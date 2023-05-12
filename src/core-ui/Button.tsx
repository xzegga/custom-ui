import { useRef } from 'react';
import {
  useButton,
  useFocusRing,
  AriaButtonProps,
  mergeProps,
} from 'react-aria';

interface CalendarButtonProps extends AriaButtonProps {
  isDisabled?: boolean;
  children: React.ReactNode;
}

export function CalendarButton(props: CalendarButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={`rounded-full p-2 ${props.isDisabled ? 'text-gray-400' : ''} ${
        !props.isDisabled ? 'hover:bg-teal-100 active:bg-teal-200' : ''
      } outline-none ${
        isFocusVisible ? 'ring-2 ring-purple-600 ring-offset-2' : ''
      }`}
    >
      {props.children}
    </button>
  );
}

interface FieldButtonProps extends AriaButtonProps {
  isPressed?: boolean;
  children: React.ReactNode;
}

export function FieldButton(props: FieldButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`-ml-px rounded-r-md border px-2 outline-none transition-colors group-focus-within:border-teal-600 group-focus-within:group-hover:border-teal-600 ${
        isPressed || props.isPressed
          ? 'border-gray-400 bg-gray-200'
          : 'border-gray-300 bg-gray-50 group-hover:border-gray-400'
      }`}
    >
      {props.children}
    </button>
  );
}
