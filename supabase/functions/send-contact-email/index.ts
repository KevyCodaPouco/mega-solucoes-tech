import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import nodemailer from "nodemailer";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const GMAIL_USER = Deno.env.get('GMAIL_USER');
    const GMAIL_APP_PASSWORD = Deno.env.get('GMAIL_APP_PASSWORD');

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      throw new Error('As variáveis de ambiente do Gmail não foram configuradas.');
    }

    const { nome, empresa, email, mensagem } = await req.json();

    // @ts-ignore
    const transporter = nodemailer.createTransport({
      hostname: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${nome} - Formulário do Site" <${GMAIL_USER}>`,
      to: 'k3vy0liveira@gmail.com',
      subject: `Nova mensagem de ${nome} (${empresa})`,
      html: `<p><strong>Nome:</strong> ${nome}</p>
             <p><strong>Empresa:</strong> ${empresa}</p>
             <p><strong>Email do remetente:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${mensagem}</p>`,
      replyTo: email
    };

    // @ts-ignore
    const info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify(info), {
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
