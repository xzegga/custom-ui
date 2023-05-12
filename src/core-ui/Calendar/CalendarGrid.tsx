import { useCalendarGrid, useLocale } from 'react-aria';
import {
  getWeeksInMonth,
  endOfMonth,
  DateDuration,
} from '@internationalized/date';
import { CalendarCell } from './CalendarCell';
import { CalendarState, RangeCalendarState } from 'react-stately';

interface CalendarGridProps {
  state: RangeCalendarState | CalendarState;
  offset?: DateDuration;
}

export function CalendarGrid({ state, offset = {} }: CalendarGridProps) {
  const { locale } = useLocale();
  const startDate = state.visibleRange.start.add(offset);
  const endDate = endOfMonth(startDate);

  const { gridProps, headerProps, weekDays } = useCalendarGrid(
    {
      startDate,
      endDate,
    },
    state
  );

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(startDate, locale);

  return (
    <table {...gridProps} cellPadding='0' className='flex-1'>
      <thead {...headerProps} className='text-gray-600'>
        <tr>
          {weekDays.map((day, index) => (
            <th className='text-center' key={index}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                    currentMonth={startDate}
                  />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
