import { Link } from 'react-router-dom';

export function Breadcrumbs({
  items,
  current,
  ...props
}: {
  items: {
    label: string;
    path: string;
  }[];
  current: string;
  [key: string]: any;
}) {
  const { className: classes } = props;
  return (
    <>
      <nav className='w-full rounded-md'>
        <ol className='list-reset flex'>
          {items.map((item, key) => {
            return (
              <div key={key}>
                {current !== item.path ? (
                  <Link
                    to={item.path}
                    className={`text-neutral transition duration-150 ease-in-out
                    hover:text-neutral-600 
                    focus:text-neutral-600 
                    active:text-neutral-700 
                    dark:text-neutral-500 
                    dark:hover:text-neutral-500
                    dark:focus:text-neutral-500
                    dark:active:text-neutral-600
                    ${classes}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className='text-neutral-800 dark:text-neutral-400'>
                    {item.label}
                  </span>
                )}
                {/* Separator */}
                {key < items.length - 1 ? (
                  <span className='mx-2 text-neutral-500 dark:text-neutral-500'>
                    /
                  </span>
                ) : null}
              </div>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
