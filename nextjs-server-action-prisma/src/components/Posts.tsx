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
        <ul key={item.id} className='list-disc'>
          <li>{item.text}</li>
        </ul>
      ))}
    </section>
  );
};

export default Posts;
