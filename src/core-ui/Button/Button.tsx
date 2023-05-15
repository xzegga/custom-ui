import classNames from 'classnames';
import { ReactElement, useEffect } from 'react';
import { initTE, Ripple } from 'tw-elements';

export function Button({
  color = 'neutral',
  children = 'Button',
  ripple = 'light',
  onclick,
  ...props
}: {
  color?: string;
  children?: ReactElement | string;
  ripple?: string;
  onclick?: () => void;
  [key: string]: any;
}) {
  const { className: classes } = props;

  const whiteText = [
    'primary',
    'secondary',
    'danger',
    'succesfull',
    'warning',
    'info',
  ];
  const text = classNames({
    'text-white': whiteText.includes(color),
    'text-neutral-800': !whiteText.includes(color),
  });

  useEffect(() => {
    initTE({ Ripple });
  }, [color]);

  return (
    <button
      type='button'
      data-te-ripple-init
      data-te-ripple-color={ripple}
      data-te-ripple-duration='400ms'
      onClick={onclick}
      className={`
          inline-block rounded-full bg-${color}-main px-6 pb-2 pt-2.5 text-xs font-medium
          leading-normal ${text} shadow-[0_4px_9px_-4px_#3b71ca] transition
          duration-150 ease-in-out hover:bg-${color}-600
          hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
          focus:bg-${color}-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
          focus:outline-none focus:ring-0 active:bg-${color}-700
          active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
          dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]
          dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
          dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
          dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
          ${classes}`}
    >
      {children}
    </button>
  );
}
