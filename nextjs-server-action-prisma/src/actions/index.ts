'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const addPost = async (formData: FormData, path: string) => {
  const content = formData.get('content');
  // test loading
  await new Promise((r) => setTimeout(r, 1000));
  try {
    await prisma.post.create({
      data: {
        text: content as string,
      },
    });
  } catch (e) {
    console.error(e);
  }
  revalidatePath(path);
};

const deletePost = async (id: number, path: string) => {
  // test loading
  await new Promise((r) => setTimeout(r, 1000));
  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    console.error(e);
  }
  revalidatePath(path);
};

export { addPost, deletePost };
