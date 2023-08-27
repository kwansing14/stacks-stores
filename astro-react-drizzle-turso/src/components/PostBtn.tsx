const PostBtn = () => {
  const clickHandler = async () => {
    const data = await fetch('/api/data.json', {
      method: 'POST',
      body: JSON.stringify({
        userId: 1,
        msg: 'test',
      }),
    });
    const res = await data.json();
    console.log('post', res);
  };
  return (
    <div>
      <button onClick={clickHandler}>Post</button>
    </div>
  );
};

export default PostBtn;
