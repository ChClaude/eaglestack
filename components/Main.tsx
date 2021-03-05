import React from 'react';

interface Props {
  /** children to append to the Main component */
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return <main className="px-32 pt-4 pb-20">{children}</main>;
};

export default Main;
