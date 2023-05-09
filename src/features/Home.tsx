import { today, getLocalTimeZone, parseDate } from '@internationalized/date';
import { DatePicker } from 'core-ui';
import { DateRangePicker } from 'core-ui';
import { useState } from 'react';
import { useDateFormatter } from '@react-aria/i18n';
import { DateValue } from 'react-aria';
import { RangeValue } from '@react-types/shared';
import BreadcrumbsNav from 'core-ui/Breadcrumbs/BreadcrumbsNav';

function Home() {
  const [date, setDate] = useState<DateValue>(parseDate('2022-07-04'));
  const [rangeDate, setRangeDate] = useState<RangeValue<DateValue>>();
  const formatter = useDateFormatter({ dateStyle: 'full' });
  const [pages] = useState<any[]>([
    { label: 'Dashboard', link: '../link/dashboard' },
    { label: 'Management Dashboard', link: '../link/managedashboard' },
  ]);

  const changeHandler = (value: DateValue) => {
    setDate(value);
  };

  const changeRangeHandler = (value: RangeValue<DateValue>) => {
    setRangeDate(value);
  };
  return (
    <>
      <div className="ml-12 max-w-lg text-gray-700">
        
      <h2 className="mt-12 mb-2 font-bold text-xl text-left">Breadcrumbs</h2>
        <BreadcrumbsNav items={pages} />
        <h2 className="mt-12 mb-2 font-bold text-xl text-left">Date picker</h2>
        <DatePicker label="Appointment date" minValue={today(getLocalTimeZone())} {...{onChange: changeHandler}} />
        <p>Selected date: {formatter.format(date.toDate(getLocalTimeZone()))}</p>
        <br />
        <h2 className="mt-12 mb-2 font-bold text-xl text-left">Date range picker</h2>
        <DateRangePicker label="Trip dates" minValue={today(getLocalTimeZone())}  {...{onChange: changeRangeHandler}}/>
        {rangeDate && <>
          <p>Selected dates: 
          from {formatter.format(rangeDate.start.toDate(getLocalTimeZone()))} &nbsp;
          to {formatter.format(rangeDate.end.toDate(getLocalTimeZone()))}
          </p>
        </>}
        <h2 className="mt-12 mb-2 font-bold text-xl text-left">Date range picker</h2>
      </div>
    </>
  );
}

export default Home;
