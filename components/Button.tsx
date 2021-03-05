import React from 'react';

interface Props {
  /** The children element(s) of the component */
  children?: React.ReactNode;
  /** Additionnal style for the component */
  className?: string;
  /** Specifies the button as a link  */
  href?: string;
}

const Button = ({ children, className }: Props) => {
  let style = 'py-3 px-8 rounded-full';

  style = className === undefined ? style : style.concat(' ').concat(className);

  return <button className={style}>{children}</button>;
};

export default Button;
