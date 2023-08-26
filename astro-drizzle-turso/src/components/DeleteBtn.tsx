import { useState } from 'react';

const DeleteBtn: React.FC<{ id: number }> = ({ id }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    console.log('delete', id);
  };

  return (
    <button onClick={handleDelete}>
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteBtn;
