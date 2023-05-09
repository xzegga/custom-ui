import React from 'react'
import {useBreadcrumbs} from 'react-aria';

const Breadcrumbs = (props: any) => {
    const { navProps } = useBreadcrumbs(props);
    const childCount = React.Children.count(props.children);
  
    return (
      <nav className='my-5' {...navProps}>
        <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          {React.Children.map(props.children, (child, i) =>
            React.cloneElement(child, { isCurrent: i === childCount - 1 }))}
        </ol>
      </nav>
    );
}

export default Breadcrumbs