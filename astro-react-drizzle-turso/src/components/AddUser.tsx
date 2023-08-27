// import db from '@/db/client';
import { useRef } from 'react';

const AddUser = () => {
  const ref = useRef<HTMLInputElement>(null);
  const clickHandler = async () => {
    console.log(ref.current?.value);
    const data = await fetch('/api/user.json', {
      method: 'POST',
      body: JSON.stringify({
        username: ref.current?.value || '',
      }),
    });
    // location.reload();
    location.replace('/');
  };

  return (
    <div>
      <input ref={ref} />
      <button onClick={clickHandler}>Add User</button>
    </div>
  );
};
export default AddUser;
