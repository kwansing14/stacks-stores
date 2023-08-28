import type { APIRoute } from 'astro';

export const get: APIRoute = ({ params, request }) => {
  const msg = JSON.stringify({
    message: 'This was a GET!',
  });
  return new Response(msg, { status: 200 });
};

export const post: APIRoute = ({ request }) => {
  return {
    body: JSON.stringify({
      message: 'This was a POST!',
    }),
  };
};

export const del: APIRoute = ({ request }) => {
  return {
    body: JSON.stringify({
      message: 'This was a DELETE!',
    }),
  };
};

export const all: APIRoute = ({ request }) => {
  return {
    body: JSON.stringify({
      message: `This was a ${request.method}!`,
    }),
  };
};
