const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 200, company: 160, phone: 40, message: 5000 };

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot field: real visitors never see or fill it.
  if (body.website) return Response.json({ ok: true });

  const data = Object.fromEntries(
    Object.entries(LIMITS).map(([key, max]) => [key, String(body[key] ?? "").trim().slice(0, max)])
  );

  if (!data.name || !data.email || !data.message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL.test(data.email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  // TODO: deliver enquiries (e.g. Resend, SES or a CRM webhook). Until then they are only logged.
  console.log("Contact enquiry", { ...data, receivedAt: new Date().toISOString() });

  return Response.json({ ok: true });
}
