import { useRef } from "react";
import { useRangeCalendarState } from "@react-stately/calendar";
import { useRangeCalendar } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import { CalendarGrid } from "../Calendar/CalendarGrid";
import { CalendarHeader } from "../Calendar/CalendarHeader";
import { CalendarAria, DateValue, RangeCalendarProps } from "react-aria";
import { RangeCalendarState } from "react-stately";

export function RangeMultipleCalendar(props: RangeCalendarProps<DateValue>) {
  const { locale } = useLocale();
  const state: RangeCalendarState = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 2 },
    locale,
    createCalendar
  });

  const ref = useRef<HTMLDivElement>(null);
  const { calendarProps, prevButtonProps, nextButtonProps }: CalendarAria = useRangeCalendar(
    props,
    state,
    ref
  );

  return (
    <div {...calendarProps} ref={ref} className="inline-block text-gray-800">
      <CalendarHeader
              state={state}
              calendarProps={calendarProps}
              prevButtonProps={prevButtonProps}
              nextButtonProps={nextButtonProps} />
      <div className="flex gap-8">
        <CalendarGrid state={state} />
        <CalendarGrid state={state} {...{ offset: { months: 1 }}} />
      </div>
    </div>
  );
}