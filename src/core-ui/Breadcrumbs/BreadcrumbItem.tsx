import React from 'react';
import { useBreadcrumbItem } from 'react-aria';
import classNames from 'classnames';

const BreadcrumbItem = (props: any) => {
  const ref = React.useRef(null);
  const { itemProps } = useBreadcrumbItem(props, ref);
  return (
    <li>
      <a
        className={classNames({
          'hover:text-primary-900': !props.isCurrent && !props.isDisabled,
        })}
        {...itemProps}
        ref={ref}
        href={props.href}
        style={{
          textDecoration:
            props.isCurrent || props.isDisabled ? 'none' : 'underline',
          fontWeight: props.isCurrent ? 'bold' : 'light',
          cursor: props.isCurrent || props.isDisabled ? 'default' : 'pointer',
        }}
      >
        {props.children}
      </a>
      {!props.isCurrent && (
        <span aria-hidden="true" style={{ padding: '0 5px' }}>
          {'›'}
        </span>
      )}
    </li>
  );
};

export default BreadcrumbItem;
