const GetBtn = () => {
  const clickHandler = async () => {
    const data = await fetch('/api/data2.json');
    const res = await data.json();
    console.log('get', res);
  };

  return (
    <div>
      <button onClick={clickHandler}>Get</button>
    </div>
  );
};

export default GetBtn;
