import { useRef } from "react";
import { useDatePickerState } from "react-stately";
import { AriaDatePickerProps, DateValue, useDatePicker } from "react-aria";
import { FieldButton } from "../Button";
import { Calendar } from "../Calendar/Calendar";
import { DateField } from "../DateField";
import { Popover } from "../Popover";
import { Dialog } from "../Dialog";
import { CalendarIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

export function DatePicker(props: AriaDatePickerProps<DateValue>) {
  const state = useDatePickerState(props);
  const ref = useRef<HTMLDivElement>(null);
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps
  } = useDatePicker(props, state, ref);

  return (
    <div className="relative inline-flex flex-col text-left">
      <span {...labelProps} className="text-sm text-gray-800">
        {props.label}
      </span>
      <div {...groupProps} ref={ref} className="flex group">
        <div className="bg-white border border-gray-300 group-hover:border-gray-400 transition-colors rounded-l-md pr-10 group-focus-within:border-teal-600 group-focus-within:group-hover:border-teal-600 p-1 relative flex items-center">
          <DateField {...fieldProps} />
          {state.validationState === "invalid" && (
            <ExclamationCircleIcon className="w-6 h-6 text-red-500 absolute right-1" />
          )}
        </div>
        <FieldButton {...buttonProps} isPressed={state.isOpen}>
          <CalendarIcon className="w-5 h-5 text-gray-700 group-focus-within:text-teal-700" />
        </FieldButton>
      </div>
      {state.isOpen && (
        <Popover triggerRef={ref} state={state}  {...{ placement: "bottom start" }}>
          <Dialog {...dialogProps}>
            <Calendar {...calendarProps} />
          </Dialog>
        </Popover>
      )}
    </div>
  );
}
