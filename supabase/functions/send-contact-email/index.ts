import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Resend } from 'npm:resend@3.2.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-control-allow-headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (!Deno.env.get('RESEND_API_KEY')) {
        throw new Error('A variável de ambiente RESEND_API_KEY não foi configurada.');
    }

    const { nome, empresa, email, mensagem } = await req.json();

    const { data, error } = await resend.emails.send({
      to: 'k3vy0liveira@gmail.com',
      from: 'Contato Site <contato@megasoluções.com>', 
      subject: `Nova mensagem de ${nome} (${empresa})`,
      html: `<p><strong>Nome:</strong> ${nome}</p>
             <p><strong>Empresa:</strong> ${empresa}</p>
             <p><strong>Email do remetente:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${mensagem}</p>`,
      reply_to: email
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
