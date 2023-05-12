import { useRef } from 'react';
import {
  useCalendarCell,
  useLocale,
  useFocusRing,
  mergeProps,
  CalendarCellAria,
  AriaCalendarCellProps,
  DateValue,
} from 'react-aria';
import {
  isSameDay,
  getDayOfWeek,
  CalendarDate,
  isSameMonth,
} from '@internationalized/date';
import { CalendarState, RangeCalendarState } from 'react-stately';

interface CalendarCellProps extends AriaCalendarCellProps {
  state: RangeCalendarState | CalendarState;
  date: CalendarDate;
  currentMonth: DateValue;
}

export function CalendarCell({ state, date, currentMonth }: CalendarCellProps) {
  const ref = useRef(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    isDisabled,
    formattedDate,
    isInvalid,
  }: CalendarCellAria = useCalendarCell({ date }, state, ref);

  const isOutsideMonth = !isSameMonth(currentMonth, date);

  // The start and end date of the selected range will have
  // an emphasized appearance.
  const isSelectionStart =
    'highlightedRange' in state && state.highlightedRange !== null
      ? isSameDay(date, state.highlightedRange.start)
      : isSelected;

  const isSelectionEnd =
    'highlightedRange' in state && state.highlightedRange !== null
      ? isSameDay(date, state.highlightedRange.end)
      : isSelected;

  // We add rounded corners on the left for the first day of the month,
  // the first day of each week, and the start date of the selection.
  // We add rounded corners on the right for the last day of the month,
  // the last day of each week, and the end date of the selection.
  const { locale } = useLocale();
  const dayOfWeek = getDayOfWeek(date, locale);

  const isRoundedLeft =
    isSelected && (isSelectionStart || dayOfWeek === 0 || date.day === 1);
  const isRoundedRight =
    isSelected &&
    (isSelectionEnd ||
      dayOfWeek === 6 ||
      date.day === date.calendar.getDaysInMonth(date));

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <td
      {...cellProps}
      className={`relative py-0.5 ${isFocusVisible ? 'z-10' : 'z-0'}`}
    >
      <div
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        hidden={isOutsideMonth}
        className={`group h-10 w-10 outline-none ${
          isRoundedLeft ? 'rounded-l-full' : ''
        } ${isRoundedRight ? 'rounded-r-full' : ''} ${
          isSelected ? (isInvalid ? 'bg-red-300' : 'bg-teal-300') : ''
        } ${isDisabled ? 'disabled' : ''}`}
      >
        <div
          className={`flex h-full w-full items-center justify-center rounded-full ${
            isDisabled ? 'text-gray-400' : ''
          } ${
            // Focus ring, visible while the cell has keyboard focus.
            isFocusVisible
              ? 'group-focus:z-2 ring-2 ring-teal-600 ring-offset-2'
              : ''
          } ${
            // Darker selection background for the start and end.
            isSelectionStart || isSelectionEnd
              ? 'bg-teal-600 text-white hover:bg-teal-600'
              : ''
          } ${
            // Hover state for cells in the middle of the range.
            isSelected && !(isSelectionStart || isSelectionEnd)
              ? 'text-white hover:bg-teal-400'
              : ''
          } ${
            // Hover state for non-selected cells.
            !isSelected && !isDisabled ? 'hover:bg-teal-100' : ''
          } cursor-default`}
        >
          {formattedDate}
        </div>
      </div>
    </td>
  );
}
