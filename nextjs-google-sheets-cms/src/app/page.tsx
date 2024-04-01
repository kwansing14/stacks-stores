import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/getData");
  const data = await res.json();
  return (
    <div className="flex gap-4">
      {data.data.map((x) => (
        <div className="p-4 y-4 flex flex-col border">
          <div>{x.Header}</div>
          <div>{x.Data}</div>
        </div>
      ))}
    </div>
  );
}
