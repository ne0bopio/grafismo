import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  sector?: string;
  project?: string;
};

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let data: ContactPayload = {};

  if (contentType.includes("application/json")) {
    data = (await request.json()) as ContactPayload;
  } else {
    const form = await request.formData();
    data = {
      name: form.get("name")?.toString(),
      company: form.get("company")?.toString(),
      email: form.get("email")?.toString(),
      sector: form.get("sector")?.toString(),
      project: form.get("project")?.toString(),
    };
  }

  if (!data.name || !data.email || !data.project) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    console.warn("[contact] RESEND_API_KEY or CONTACT_EMAIL_TO not set — stubbed.");
    return NextResponse.json({ ok: true, stub: true });
  }

  const subject = `Grafismo · nuevo contacto — ${data.name}${
    data.company ? ` (${data.company})` : ""
  }`;
  const html = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #0E1014;">
      <h2 style="font-family: Georgia, serif; font-style: italic; font-weight: 400;">
        Nuevo contacto — grafismobusiness.com
      </h2>
      <table cellpadding="8" style="border-collapse: collapse;">
        <tr><td><b>Nombre</b></td><td>${escape(data.name)}</td></tr>
        <tr><td><b>Empresa</b></td><td>${escape(data.company ?? "—")}</td></tr>
        <tr><td><b>Email</b></td><td>${escape(data.email)}</td></tr>
        <tr><td><b>Sector</b></td><td>${escape(data.sector ?? "—")}</td></tr>
      </table>
      <h3>Proyecto</h3>
      <p style="white-space: pre-wrap;">${escape(data.project)}</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Grafismo <hola@grafismobusiness.com>",
        to: [to],
        reply_to: data.email,
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("[contact] resend error", res.status, body);
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] fetch failure", err);
    return NextResponse.json(
      { ok: false, error: "network" },
      { status: 502 }
    );
  }
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
