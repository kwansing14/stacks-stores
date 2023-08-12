import { deletePost } from '@/actions';

interface Props {
  posts: {
    id: number;
    text: string;
  }[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <section className='mt-4'>
      {posts.map((item) => (
        <ul key={item.id} className='list-disc flex gap-2'>
          <li>{item.text}</li>
          <button
            className='text-red-500 text-sm'
            onClick={() => deletePost(item.id, '/')}
          >
            delete
          </button>
        </ul>
      ))}
    </section>
  );
};

export default Posts;
