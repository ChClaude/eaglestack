import * as React from 'react';
import buttonStyles from '../styles/Button.module.scss';

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  /** The children element(s) of the component */
  children?: React.ReactNode;
  /** Specifies the HTLM element to render */
  as?: E;
};

type PrimaryButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
    /** Indicate primary variant of the button */
    primary: boolean;
    /** Indicate secondary variant of the button */
    secondary?: never;
    /** Indicate dark variant of the button */
    dark?: never;
    /** Indicate light variant of the button */
    light?: never;
  };

type SecondaryButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
    /** Indicate secondary variant of the button */
    secondary: boolean;
    /** Indicate primary variant of the button */
    primary?: never;
    /** Indicate dark variant of the button */
    dark?: never;
    /** Indicate light variant of the button */
    light?: never;
  };

type DarkButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
    /** Indicate dark variant of the button */
    dark: boolean;
    /** Indicate primary variant of the button */
    primary?: never;
    /** Indicate secondary variant of the button */
    secondary?: never;
    /** Indicate light variant of the button */
    light?: never;
  };

type LightButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
    /** Indicate light variant of the button */
    light: boolean;
    /** Indicate primary variant of the button */
    primary?: never;
    /** Indicate secondary variant of the button */
    secondary?: never;
    /** Indicate dark variant of the button */
    dark?: never;
  };

type ButtonProps<E extends React.ElementType> =
  | PrimaryButtonProps<E>
  | SecondaryButtonProps<E>
  | DarkButtonProps<E>
  | LightButtonProps<E>;

const createClassNames = (classes: { [key: string]: boolean }): string => {
  // let classNames = '';
  // for (const [key, value] of Object.entries(classes)) {
  //   if (value) classNames += key + ' ';
  // }
  // return classNames.trim();

  return 'py-3 px-9 border-solid border-2 border-dark rounded-md hover:bg-dark hover:text-white focus:outline-none';
};

const defaultElement = 'button';

const Button = <E extends React.ElementType = typeof defaultElement>({
  children,
  primary = false,
  secondary = false,
  dark = false,
  light = false,
  as,
}: ButtonProps<E>) => {
  const classNames = createClassNames({ primary, secondary, dark, light });
  const TagName = as || defaultElement;

  return <TagName className={classNames}>{children}</TagName>;
};

export default Button;
