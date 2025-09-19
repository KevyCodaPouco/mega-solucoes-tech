import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Nodemailer } from "https://deno.land/x/nodemailer/mod.ts";

// Headers de CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Lida com a preflight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Pega as variáveis de ambiente (os secrets do Supabase)
    const GMAIL_USER = Deno.env.get('GMAIL_USER');
    const GMAIL_APP_PASSWORD = Deno.env.get('GMAIL_APP_PASSWORD');

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      throw new Error('As variáveis de ambiente do Gmail não foram configuradas.');
    }

    // Pega os dados do formulário
    const { nome, empresa, email, mensagem } = await req.json();

    // Configura o "transportador" do Nodemailer
    const transporter = new Nodemailer({
      hostname: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Monta o e-mail
    const mailOptions = {
      from: `"${nome} - Site" <${GMAIL_USER}>`, // Remetente
      to: 'kevyoliveira@hotmail.com', // O e-mail que vai receber a mensagem
      subject: `Nova mensagem de ${nome} (${empresa})`,
      html: `<p><strong>Nome:</strong> ${nome}</p>
             <p><strong>Empresa:</strong> ${empresa}</p>
             <p><strong>Email do remetente:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${mensagem}</p>`,
      replyTo: email // Para que você possa responder diretamente para o usuário
    };

    // Envia o e-mail
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