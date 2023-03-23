import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
// import IGUser from 'components/IGUser';
import * as React from 'react';
import { useGetIGPostsQuery } from 'services/homeServices';
import Loading from 'components/Loading';
import IGStory from './components/IGStory';
import IGPost from './components/IGPost';
import IGProfile from './components/IGProfile';

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery('all');

  return (
    <>
      {isLoading && (
        <div className='flex justify-center mt-20 w-full'>
          <Loading />
        </div>
      )}
      {!isLoading &&
        data?.map((item) => {
          const { id, location, account, avatar, photo, likes, description, hashTags, createTime } =
            item;
          return (
            <IGPost
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
            />
          );
        })}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className='flex lg:justify-center'>
          {/* left */}
          <div className='w-full lg:w-[600px]'>
            <IGStory />
            <IGPostList />
          </div>
          {/* right */}
          <div className='hidden lg:block lg:w-[424px]'>
            <IGProfile />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default React.memo(Home);
