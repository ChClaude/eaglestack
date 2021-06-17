import React from 'react';
import buttonStyles from '../styles/Button.module.scss';

interface Props {
  /** The children element(s) of the component */
  children?: React.ReactNode;
  /** Additionnal style for the component */
  className?: string;
  /** Specifies the button as a link  */
  href?: string;
}

const Button = ({ children, className }: Props) => {
  let style =
    'py-3 px-9 border-solid border-2 border-black rounded-md hover:bg-black hover:text-white focus:outline-none';

  style = className === undefined ? style : style.concat(' ').concat(className);

  return <button className={style}>{children}</button>;
};

export default Button;
