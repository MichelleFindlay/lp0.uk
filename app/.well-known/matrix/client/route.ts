export function GET() {
  return Response.json(
    { "m.homeserver": { "base_url": "https://matrix.lp0.uk" } },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
