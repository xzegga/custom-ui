import { useRef } from 'react';
import { useDatePickerState } from 'react-stately';
import { AriaDatePickerProps, DateValue, useDatePicker } from 'react-aria';
import { FieldButton } from '../Button';
import { Calendar } from '../Calendar/Calendar';
import { DateField } from '../DateField';
import { Popover } from '../Popover';
import { Dialog } from '../Dialog';
import {
  CalendarIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

export function DatePicker(props: AriaDatePickerProps<DateValue>) {
  const state = useDatePickerState(props);
  const ref = useRef<HTMLDivElement>(null);
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref);

  return (
    <div className="relative inline-flex flex-col text-left">
      <span {...labelProps} className="text-sm text-gray-800">
        {props.label}
      </span>
      <div {...groupProps} ref={ref} className="group flex">
        <div className="relative flex items-center rounded-l-md border border-gray-300 bg-white p-1 pr-10 transition-colors group-focus-within:border-teal-600 group-hover:border-gray-400 group-focus-within:group-hover:border-teal-600">
          <DateField {...fieldProps} />
          {state.validationState === 'invalid' && (
            <ExclamationCircleIcon className="absolute right-1 h-6 w-6 text-red-500" />
          )}
        </div>
        <FieldButton {...buttonProps} isPressed={state.isOpen}>
          <CalendarIcon className="h-5 w-5 text-gray-700 group-focus-within:text-teal-700" />
        </FieldButton>
      </div>
      {state.isOpen && (
        <Popover
          triggerRef={ref}
          state={state}
          {...{ placement: 'bottom start' }}
        >
          <Dialog {...dialogProps}>
            <Calendar {...calendarProps} />
          </Dialog>
        </Popover>
      )}
    </div>
  );
}
