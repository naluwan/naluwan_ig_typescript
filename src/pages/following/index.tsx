import * as React from 'react';
import IGHeader from 'components/IGHeader';
import IGContainer from 'components/IGContainer';
import IGUser from 'components/IGUser';
import { useAppSelector } from 'hooks';

const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const { friends } = friendReducer;

  return (
    <>
      <IGHeader />
      <IGContainer>
        <p className='my-8 font-bold text-2xl px-4 box-border'>Following</p>
        <div className='shadow-md mt-8 mx-2 box-border'>
          {friends.map((item) => {
            const { id, account, location, isFollowing, avatar } = item;
            return (
              <div className='-mt-3' key={id}>
                <IGUser
                  id={id}
                  account={account}
                  location={location}
                  isFollowing={isFollowing}
                  avatar={avatar}
                  showFollow
                />
              </div>
            );
          })}
        </div>
      </IGContainer>
    </>
  );
};

export default React.memo(Following);
