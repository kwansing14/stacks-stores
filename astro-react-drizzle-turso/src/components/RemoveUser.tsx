const RemoveUser: React.FC<{ id: number }> = ({ id }) => {
  const clickHandler = async () => {
    const data = await fetch('/api/user.json', {
      method: 'DELETE',
      body: JSON.stringify({
        id: id,
      }),
    });
    location.replace('/');
  };
  return <button onClick={clickHandler}>x</button>;
};
export default RemoveUser;
