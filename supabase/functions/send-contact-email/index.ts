import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.4.0";

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

// Headers de CORS que vamos adicionar
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Permite qualquer origem, pode ser mais restrito
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Esta parte lida com a "preflight request" que o navegador envia
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { nome, empresa, email, mensagem } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Mega Soluções Tecnológicas <contato@megasolucoes.com>',
      to: 'emily.fontes@hotmail.com',
      subject: `Nova mensagem de ${nome} (${empresa})`,
      html: `<p><strong>Nome:</strong> ${nome}</p>
             <p><strong>Empresa:</strong> ${empresa}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${mensagem}</p>`,
    });

    if (error) {
      return new Response(JSON.stringify(error), {
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
