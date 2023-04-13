/* eslint-disable @typescript-eslint/naming-convention */
import { useStore } from '../../hooks/useGlobalStore';

function Title() {
  const { title } = useStore((state) => ({
    title: state.title,
  }));

  return (
    <header className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
}

export default Title;
