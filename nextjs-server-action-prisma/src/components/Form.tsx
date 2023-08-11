'use client';
import { addPost } from '@/actions';
import { useRef } from 'react';
import { experimental_useFormStatus } from 'react-dom';

const Button = () => {
  const { pending } = experimental_useFormStatus();
  return (
    <button
      className='border border-gray-400 w-80 h-10 rounded-lg px-4 mt-2'
      type='submit'
    >
      {pending ? 'Loading...' : 'Add'}
    </button>
  );
};

type Post = {
  id: number;
  text: string;
};

interface Props {
  setPosts: (action: Post) => void;
}

const Form: React.FC<Props> = ({ setPosts }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const actionHandler = async (e: FormData) => {
    formRef.current?.reset();
    setPosts({
      id: Math.random(),
      text: e.get('content') as string,
    });
    await addPost(e, '/');
  };

  return (
    <form
      ref={formRef}
      action={actionHandler}
      className='flex flex-col items-center'
    >
      <input
        className='border border-gray-400 w-80 h-10 rounded-lg px-4 text-neutral-900 mt-2 outline-none'
        type='text'
        name='content'
        placeholder='Add a new task'
      />
      <Button />
    </form>
  );
};

export default Form;
