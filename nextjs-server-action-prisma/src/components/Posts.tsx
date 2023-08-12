import { deletePost } from '@/actions';
import { useTransition } from 'react';

interface Post {
  item: {
    id: number;
    text: string;
  };
}
interface Props {
  posts: {
    id: number;
    text: string;
  }[];
}

const Post: React.FC<Post> = ({ item }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <ul key={item.id} className='list-disc flex gap-2'>
      <li className={isPending ? 'text-neutral-700' : 'text-neutral-50'}>
        {item.text}
      </li>
      <button
        className='text-red-500 text-sm'
        onClick={() => startTransition(() => deletePost(item.id, '/'))}
      >
        delete
      </button>
    </ul>
  );
};

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <section className='mt-4'>
      {posts.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Posts;
