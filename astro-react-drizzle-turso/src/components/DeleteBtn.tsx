const DeleteBtn = () => {
  const clickHandler = async () => {
    const data = await fetch('/api/data.json', {
      method: 'DELETE',
      body: JSON.stringify({
        id: 1,
      }),
    });
    const res = await data.json();
    console.log('delete', res);
  };

  return <button onClick={clickHandler}>Delete</button>;
};

export default DeleteBtn;
