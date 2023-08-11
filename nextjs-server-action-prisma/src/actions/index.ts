'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const addPost = async (formData: FormData, path: string) => {
  // e.preventDefault();
  const content = formData.get('content');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await prisma.post.create({
    data: {
      text: content as string,
    },
  });
  revalidatePath(path);
};

export { addPost };
