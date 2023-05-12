import { useRef } from 'react';
import {
  AriaDatePickerProps,
  DateValue,
  useDateField,
  useDateSegment,
  useLocale,
} from 'react-aria';
import { createCalendar } from '@internationalized/date';
import {
  DateFieldState,
  useDateFieldState,
  DateSegment as DtSegment,
} from 'react-stately';

export function DateField(props: AriaDatePickerProps<DateValue>) {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef<HTMLDivElement>(null);
  const { fieldProps } = useDateField(props, state, ref);

  return (
    <div {...fieldProps} ref={ref} className="flex">
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  );
}

interface DateSegmentProps {
  segment: DtSegment;
  state: DateFieldState;
}

function DateSegment({ segment, state }: DateSegmentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        ...(segment.maxValue != null
          ? { minWidth: String(segment.maxValue).length + 'ch' }
          : {}),
      }}
      className={`group box-content rounded-sm px-0.5 text-right tabular-nums outline-none focus:bg-teal-600 focus:text-white ${
        !segment.isEditable ? 'text-gray-500' : 'text-gray-800'
      }`}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
        className="block w-full text-center italic text-gray-500 group-focus:text-white"
        style={{
          ...(segment.isPlaceholder ? {} : { visibility: 'hidden' }),
          height: segment.isPlaceholder ? '' : 0,
          pointerEvents: 'none',
        }}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? '' : segment.text}
    </div>
  );
}
