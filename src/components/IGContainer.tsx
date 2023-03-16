import * as React from 'react';

type IGContainerProps = {
  children: React.ReactNode;
};

const IGContainer: React.FC<IGContainerProps> = (props) => {
  const { children } = props;
  return <div className='max-w-[1024px] my-0 mx-auto lg:max-w-[1024px]'>{children}</div>;
};

export default React.memo(IGContainer);
