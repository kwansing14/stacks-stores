const AllBtn = () => {
  const clickHandler = async () => {
    const data = await fetch('/api/data.json', {
      method: 'PATCH',
    });
    const res = await data.json();
    console.log('all', res);
  };
  return (
    <div>
      <button onClick={clickHandler}>All</button>
    </div>
  );
};

export default AllBtn;
