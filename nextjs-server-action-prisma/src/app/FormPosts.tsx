'use client';

import Form from '@/components/Form';
import Posts from '@/components/Posts';
import { experimental_useOptimistic as useOp } from 'react';

type Post = {
  id: number;
  text: string;
};

interface Props {
  posts: Post[];
}

const FormPosts: React.FC<Props> = ({ posts }) => {
  const setPosts = (state: Props['posts'], newPost: Post) => [
    ...state,
    newPost,
  ];
  const [optimisticPost, setOptimisticPost] = useOp(posts, setPosts);
  return (
    <>
      <Form setPosts={setOptimisticPost} />
      <Posts posts={optimisticPost} />
    </>
  );
};

export default FormPosts;
