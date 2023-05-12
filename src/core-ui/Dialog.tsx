import { AriaDialogProps, DialogAria, useDialog } from 'react-aria';
import React, { FC, ReactNode } from 'react';

interface DialogProps extends AriaDialogProps {
  children: ReactNode;
}

export const Dialog: FC<DialogProps> = ({ children, ...props }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { dialogProps }: DialogAria = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref}>
      {children}
    </div>
  );
};
