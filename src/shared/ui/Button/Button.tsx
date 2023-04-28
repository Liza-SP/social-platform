import React, { HTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      {...otherProps}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};
