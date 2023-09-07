import { Link } from 'react-router-dom';

import { Button, PageContent } from '../../components';

const NotFound = () => {
  return (
    <PageContent>
      <div className="flex flex-col w-[500px] items-center gap-4 mx-auto mt-36">
        <h2 className="text-white font-bold text-4xl text-center">We can’t find that page</h2>
        <p className="text-white text-lg text-center">
          Sorry, the page you are looking for doesnt exist or has been moved.
        </p>
        <Link to={'/'}>
          <Button withBorder={false} type={'button'} name={'Go to Main'} bgColor={'bg-green-700'} />
        </Link>
      </div>
    </PageContent>
  );
};
export default NotFound;
