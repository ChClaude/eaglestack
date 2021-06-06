import React from 'react';

interface Props {
  /** The children element(s) of the component */
  children?: React.ReactNode;
  /** Additionnal style for the component */
  className?: string;
  /** Specifies the button as a link  */
  href?: string;
}

// TODO:Add liquid animation like here --> https://www.youtube.com/watch?v=zvZ-HlzaBcY&list=RDCMUCvHKiUI75ytqUcN851fRR2w&index=1
const Button = ({ children, className }: Props) => {
  let style = 'py-3 px-9 border-solid border-2 border-black rounded-md';

  style = className === undefined ? style : style.concat(' ').concat(className);

  return <button className={style}>{children}</button>;
};

export default Button;
