export async function GET() {
  const apiKey = process.env.GOOGLESHEET_API;
  const res = await fetch(`https://script.google.com/macros/s/${apiKey}/exec`);
  const data = await res.json();
  return Response.json({ data });
}
