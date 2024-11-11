import { useMutation } from '@tanstack/react-query';

import { client } from '@/lib/hono';

const postTestAPI = async ({ message }: { message: string }) => {
  // const res = await client.getTest.hello.$get();
  // const data = await res.json();
  const res = await client.postTest.$post({ json: { message: message } });
  return await res.json();
};

export const usePostTestApi = () => {
  return useMutation({ mutationFn: postTestAPI });
};
