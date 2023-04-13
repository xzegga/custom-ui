import './AspecRatioBox.css';

type AspectRatioBoxProps = {
  ratio?: number;
  children: React.ReactNode;
};

export function AspectRatioBox({ children, ratio = 1 }: AspectRatioBoxProps) {
  return (
    <div className="relative mt-2">
      <div className="aspect-ratio absolute inset-0">{children}</div>
      <div>{children}</div>
    </div>
  );
}
