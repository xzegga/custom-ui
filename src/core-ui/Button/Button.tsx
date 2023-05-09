import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useButton } from 'react-aria';

const Button = (props: any) => {
  const { children } = props;
  const ref = useRef({} as HTMLButtonElement);
  const { buttonProps, isPressed } = useButton(
    {
      ...props,
      elementType: 'span',
    },
    ref
  );
  const [styles, setStyles] = useState();

  useEffect(() => {
    if (props) {
      setStyles(props.styling);
    }
  }, [props]);

  return (
    <span
      className={classNames(styles, {'focus-visible: outline-info-700': true})}
      {...buttonProps}
      style={{
        padding: 10,
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      ref={ref}
    >
      {children}
    </span>
  );
};

export default Button;
