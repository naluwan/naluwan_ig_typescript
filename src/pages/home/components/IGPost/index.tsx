import IGUser from 'components/IGUser';
import React from 'react';
import Comments from './Comments';

type IGPostProps = {
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
};

const IGPost: React.FC<IGPostProps> = (props) => {
  const { account, location, avatar, photo, likes, description, hashTags, createTime } = props;
  return (
    <div className='shadow-md pb-4 lg:mb-8'>
      <IGUser account={account} location={location} avatar={avatar} />
      <img src={photo} alt='post' />
      <Comments
        account={account}
        likes={likes}
        description={description}
        hashTags={hashTags}
        createTime={createTime}
      />
    </div>
  );
};

export default React.memo(IGPost);
