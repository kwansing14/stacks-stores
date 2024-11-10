"use client";

import { useEffect } from "react";
import { client } from "@/lib/hono";

export default function Home() {
  const postClick = async () => {
    const res = await client.postTest.$post({ json: { message: "hono" } });
    console.log(await res.json());
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.getTest.hello.$get();
      const data = await res.json();
      console.log(data.message);
    };
    fetchData();
  }, []);

  return (
    <div>
      new next lucia
      <button onClick={postClick}>simple post</button>
    </div>
  );
}
