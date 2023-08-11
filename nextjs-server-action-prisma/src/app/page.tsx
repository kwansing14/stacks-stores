import prisma from '@/lib/prisma';

export default async function Home() {
  const post = await prisma.post.findMany();
  console.log(post);
  return (
    <main className='flex text-sm flex-col items-center'>
      <div>To do list - Next server action prisma</div>
      <div>
        {post.map((item) => (
          <div key={item.id}>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
