import { redirect } from 'next/navigation';

import { validateRequest } from '@/utils/validateRequest';

const Test = async () => {
  const { user } = await validateRequest();
  if (!user) {
    return redirect('/login');
  }

  return <div>test page </div>;
};

export default Test;
