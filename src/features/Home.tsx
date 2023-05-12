import { DatePicker, DateRangePicker } from 'core-ui';
import BreadcrumbsNav from 'core-ui/Breadcrumbs/BreadcrumbsNav';
import Button from 'core-ui/Button/Button';
import { useState } from 'react';
import { DateValue } from 'react-aria';

import { getLocalTimeZone, parseDate, today } from '@internationalized/date';
import { useDateFormatter } from '@react-aria/i18n';
import { RangeValue } from '@react-types/shared';

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
      <div className='ml-12 max-w-lg text-gray-700'>
        <h2 className='mb-2 mt-12 text-left text-xl font-bold'>Breadcrumbs</h2>
        <BreadcrumbsNav items={pages} />
        <h2 className='mb-2 mt-12 text-left text-xl font-bold'>Date picker</h2>
        <DatePicker
          label='Appointment date'
          minValue={today(getLocalTimeZone())}
          {...{ onChange: changeHandler }}
        />
        <p>
          Selected date: {formatter.format(date.toDate(getLocalTimeZone()))}
        </p>
        <br />
        <h2 className='mb-2 mt-12 text-left text-xl font-bold'>
          Date range picker
        </h2>
        <DateRangePicker
          label='Trip dates'
          minValue={today(getLocalTimeZone())}
          {...{ onChange: changeRangeHandler }}
        />
        {rangeDate && (
          <>
            <p>
              Selected dates: from{' '}
              {formatter.format(rangeDate.start.toDate(getLocalTimeZone()))}{' '}
              &nbsp; to{' '}
              {formatter.format(rangeDate.end.toDate(getLocalTimeZone()))}
            </p>
          </>
        )}
        <h2 className='mb-2 mt-12 text-left text-xl font-bold'>Buttons</h2>
        <Button color='primary' ripple='light' className='mx-2'>
          Primary
        </Button>
        <Button color='danger' ripple='light' className='mx-2'>
          Secondary
        </Button>
        <Button className='mx-2'>Secondary</Button>
      </div>
    </>
  );
}

export default Home;
