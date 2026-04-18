import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, empresa, email, whatsapp, tipo, mensagem } = await request.json();

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Lumos Site <contato@mail.produtoralumos.com.br>',
      to: ['comercial@produtoralumos.com.br'],
      replyTo: email,
      subject: `[Site Lumos] Nova mensagem de ${nome} — ${tipo}`,
      html: `
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Tipo de Projeto:</strong> ${tipo}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json({ error: err.message || "Erro interno do servidor" }, { status: 500 });
  }
}
