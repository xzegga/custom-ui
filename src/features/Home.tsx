import { today, getLocalTimeZone, parseDate } from '@internationalized/date';
import { DatePicker } from 'core-ui';
import { DateRangePicker } from 'core-ui';
import { useState } from 'react';
import { useDateFormatter } from '@react-aria/i18n';
import { DateValue } from 'react-aria';
import { RangeValue } from '@react-types/shared';
import BreadcrumbsNav from 'core-ui/Breadcrumbs/BreadcrumbsNav';
import Button from 'core-ui/Button/Button';

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
        <BreadcrumbsNav items={pages} />
        <DatePicker label="Appointment date" minValue={today(getLocalTimeZone())} {...{ onChange: changeHandler }} />
        <p>Selected date: {formatter.format(date.toDate(getLocalTimeZone()))}</p>
        <br />
        <h2 className="mt-12 mb-2 font-bold text-xl text-left">DateRangePicker</h2>
        <DateRangePicker label="Trip dates" minValue={today(getLocalTimeZone())} {...{ onChange: changeRangeHandler }} />
        {rangeDate && (
          <>
            <p>
              Selected dates: from {formatter.format(rangeDate.start.toDate(getLocalTimeZone()))} &nbsp; to{' '}
              {formatter.format(rangeDate.end.toDate(getLocalTimeZone()))}
            </p>
          </>
        )}
        <br />
        <h2 className="mt-12 mb-2 font-bold text-xl text-left">Buttons</h2>
        <br />
        <Button styling={'rounded bg-primary-900 text-white hover:bg-primary-800'} onClick={()=>alert('Hello :)')}>Primary Btn</Button>
        <br />
        <br />
        <Button styling={'border border-secondary-900 rounded text-secondary-900 bg-white hover:bg-secondary-900 hover:text-white'} onClick={()=>alert('Hello :)')}>Secondary Btn</Button>
        <br />
        <br />
        <Button styling={'rounded bg-danger-900 text-white hover:bg-danger-800'} onClick={()=>alert('Hello :)')}>Danger Btn</Button>
        <br />
        <br />
        <Button styling={'rounded bg-warning-900 text-white hover:bg-warning-800'} onClick={()=>alert('Hello :)')}>Warning Btn</Button>
        <br />
        <br />
        <Button styling={'border border-primary-900 rounded text-primary-900 bg-white hover:bg-primary-900 hover:text-white'} onClick={()=>alert('Hello :)')}>Primary Reverse Btn</Button>
        <br />
        <br />
        <Button styling={'border border-danger-900 rounded text-danger-900 bg-white hover:bg-danger-900 hover:text-white'} onClick={()=>alert('Hello :)')}>Danger Reverse Btn</Button>
        <br />
        <br />
        <Button styling={'border border-warning-900 rounded text-warning-900 bg-white hover:bg-warning-900 hover:text-white'} onClick={()=>alert('Hello :)')}>Warning Reverse Btn</Button>
      </div>
    </>
  );
}

export default Home;
