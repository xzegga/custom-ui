import * as React from "react";
import { usePopover, DismissButton, Overlay } from "@react-aria/overlays";
import { OverlayTriggerState } from "react-stately";
import { RefObject } from "react";

interface PopoverProps {
  triggerRef: RefObject<Element>;
  state: OverlayTriggerState;
  children: React.ReactNode;
}

export function Popover({ state, children, ...props} : PopoverProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
    },
    state
  );

  return (
    <Overlay>
      <div {...underlayProps} className="fixed inset-0" />
      <div
        {...(popoverProps as PopoverProps)}
        ref={ref}
        className="absolute top-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 p-8 z-10"
      >
        <DismissButton onDismiss={state.close} />
          {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
