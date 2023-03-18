import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGUser from 'components/IGUser';
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
          <div className='hidden lg:block lg:w-[424px]'>
            <IGUser
              size='medium'
              avatar='/images/avatars/a4.png'
              account='naluwan06'
              location='New Taipei City'
              showFollow
              isFollowing={false}
            />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default React.memo(Home);
