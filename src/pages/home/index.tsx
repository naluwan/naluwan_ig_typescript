import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import * as React from 'react';
import IGStory from './components/IGStory';

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className='flex lg:justify-center'>
          {/* left */}
          <div className='w-full lg:w-[600px]'>
            <IGStory />
          </div>
          {/* right */}
          <div className='hidden lg:block lg:w-[424px]'>right</div>
        </div>
      </IGContainer>
    </>
  );
};

export default React.memo(Home);
