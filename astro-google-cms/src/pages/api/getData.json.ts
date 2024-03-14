import type { APIRoute } from "astro";

const usernames = ["Sarah", "Chris", "Yan", "Elian"];

export const GET: APIRoute = async ({ request }) => {
  const key = import.meta.env.GOOGLE_SHEET_API_KEY;
  const url = `https://script.google.com/macros/s/${key}/exec`;
  const res = await fetch(url);
  const data = await res.json();
  return new Response(JSON.stringify({ data }));
};
