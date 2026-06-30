export function GET() {
  return Response.json(
    { "m.server": "matrix.lp0.uk:443" },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
