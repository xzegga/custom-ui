import { useRef } from 'react';
import { useDateRangePickerState } from 'react-stately';
import {
  AriaDateRangePickerProps,
  DateRangePickerAria,
  DateValue,
  useDateRangePicker,
} from 'react-aria';
import { FieldButton } from '../Button';
import { DateField } from '../DateField';
import { Popover } from '../Popover';
import { Dialog } from '../Dialog';
import {
  CalendarIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { RangeMultipleCalendar } from './RangeCalendar';

export function DateRangePicker(props: AriaDateRangePickerProps<DateValue>) {
  const state = useDateRangePickerState(props);
  const ref = useRef<HTMLDivElement>(null);
  const {
    groupProps,
    labelProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  }: DateRangePickerAria = useDateRangePicker(props, state, ref);

  return (
    <div className='relative inline-flex flex-col text-left'>
      <span {...labelProps} className='text-sm text-gray-800'>
        {props.label}
      </span>
      <div {...groupProps} ref={ref} className='group flex'>
        <div className='relative flex rounded-l-md border border-gray-300 bg-white p-1 pr-10 transition-colors group-focus-within:border-teal-600 group-hover:border-gray-400 group-focus-within:group-hover:border-teal-600'>
          <DateField {...startFieldProps} />
          <span aria-hidden='true' className='px-2'>
            –
          </span>
          <DateField {...endFieldProps} />
          {state.validationState === 'invalid' && (
            <ExclamationCircleIcon className='absolute right-1 h-6 w-6 text-red-500' />
          )}
        </div>
        <FieldButton {...buttonProps} isPressed={state.isOpen}>
          <CalendarIcon className='h-5 w-5 text-gray-700 group-focus-within:text-teal-700' />
        </FieldButton>
      </div>
      {state.isOpen && (
        <Popover
          triggerRef={ref}
          state={state}
          {...{ placement: 'bottom start' }}
        >
          <Dialog {...dialogProps}>
            <RangeMultipleCalendar {...calendarProps} />
          </Dialog>
        </Popover>
      )}
    </div>
  );
}
