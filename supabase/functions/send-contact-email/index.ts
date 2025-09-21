import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Resend } from 'npm:resend@3.2.0';

// Headers de CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

serve(async (req) => {
  // Lida com a preflight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { nome, empresa, email, mensagem } = await req.json();
    
    // Verifica se a RESEND_API_KEY foi carregada
    if (!Deno.env.get('RESEND_API_KEY')) {
        throw new Error('A variável de ambiente RESEND_API_KEY não foi configurada.');
    }

    const { data, error } = await resend.emails.send({
      // IMPORTANTE: Use o seu e-mail do Gmail aqui para receber a mensagem
      to: 'k3vy0liveira@gmail.com', 
      // O remetente PODE ser um e-mail que não existe, DESDE QUE o domínio esteja verificado.
      from: 'Formulário Site <contato@megasoluções.com>', 
      subject: `Nova mensagem de ${nome} (${empresa})`,
      html: `<p><strong>Nome:</strong> ${nome}</p>
             <p><strong>Empresa:</strong> ${empresa}</p>
             <p><strong>Email do remetente:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${mensagem}</p>`,
      reply_to: email
    });

    if (error) {
      // Se houver um erro do Resend, retorna o erro
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400, // Bad Request, pois o erro veio da API
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Se tudo deu certo
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, // Erro interno da nossa função
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
