'use client';

import { useGetTestApi } from '@/queryHooks/useGetQuery';
import { usePostTestApi } from '@/queryHooks/usePostQuery';

export default function Home() {
  const { data, isLoading } = useGetTestApi();
  const { mutate, data: postData, isPending: isPostLoading } = usePostTestApi();

  return (
    <div>
      {isLoading && <div>loading....</div>}
      {!isLoading && <div>{data?.message}</div>}
      <button onClick={() => mutate({ message: 'test123123' })}>simple post</button>
      {isPostLoading && <div>loading....</div>}
      <div className="flex flex-col border border-black bg-red-50">{postData?.message}</div>
    </div>
  );
}
