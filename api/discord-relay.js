const WEBHOOK = "https://discord.com/api/webhooks/1503066059178119378/_Nm2spdJm3fJ-hAJ-z1l6K-CIYY7UEB8thDUTEAlknW4TDhAiAwtTGWK-QSnYWLH22qk";
const SECRET = "viralarc-morning-relay-2026";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  if (req.headers["x-relay-secret"] !== SECRET) return res.status(401).end();

  const { content } = req.body;
  if (!content) return res.status(400).end();

  const r = await fetch(WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });

  res.status(r.status).end();
}
