import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

const getTestAPI = async () => {
  const res = await client.getTest.hello.$get();
  // const data = await res.json();
  return await res.json();
};

export const useGetTestApi = () => {
  return useQuery({ queryKey: ["test"], queryFn: getTestAPI });
};
