import React from 'react';

interface Props {
  /** children to append to the Main component */
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default Main;
