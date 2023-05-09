import { today, getLocalTimeZone, parseDate } from '@internationalized/date';
import { DatePicker } from 'core-ui';
import { DateRangePicker } from 'core-ui';
import { useState } from 'react';
import { useDateFormatter } from '@react-aria/i18n';
import { DateValue } from 'react-aria';
import { RangeValue } from '@react-types/shared';
import Breadcrumbs from 'core-ui/Breadcrumbs/Breadcrumbs';

function Home() {
  const [date, setDate] = useState<DateValue>(parseDate('2022-07-04'));
  const [rangeDate, setRangeDate] = useState<RangeValue<DateValue>>();
  const formatter = useDateFormatter({ dateStyle: 'full' });
  const [pages, setPages] = useState<any[]>([{label: 'Management Dashboard', link: '#'}]);

  const changeHandler = (value: DateValue) => {
    setDate(value);
  }

  const changeRangeHandler = (value: RangeValue<DateValue>) => {
    setRangeDate(value);
  }
  return (
    <>
      <div className="ml-12 max-w-lg text-gray-700">
        <Breadcrumbs pages={pages}/>
        <DatePicker label="Appointment date" minValue={today(getLocalTimeZone())} {...{onChange: changeHandler}} />
        <p>Selected date: {formatter.format(date.toDate(getLocalTimeZone()))}</p>
        <br />
        <h2 className="mt-12 mb-2 font-bold text-xl text-left">DateRangePicker</h2>
        <DateRangePicker label="Trip dates" minValue={today(getLocalTimeZone())}  {...{onChange: changeRangeHandler}}/>
        {rangeDate && <>
          <p>Selected dates: 
          from {formatter.format(rangeDate.start.toDate(getLocalTimeZone()))} &nbsp;
          to {formatter.format(rangeDate.end.toDate(getLocalTimeZone()))}
          </p>
        </>}
      </div>
    </>
  );
}

export default Home;
