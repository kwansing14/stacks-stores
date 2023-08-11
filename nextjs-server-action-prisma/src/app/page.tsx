import prisma from '@/lib/prisma';
import FormPosts from '@/app/FormPosts';

export default async function Home() {
  const posts = await prisma.post.findMany();
  return (
    <main className='flex text-sm flex-col items-center mt-24'>
      <h1 className='text-lg'>To do list - Next server action prisma</h1>
      <FormPosts posts={posts} />
    </main>
  );
}
