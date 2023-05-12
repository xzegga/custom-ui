import { DatePicker, DateRangePicker } from 'core-ui';
import BreadcrumbsNav from 'core-ui/Breadcrumbs/BreadcrumbsNav';
import Button from 'core-ui/Button/Button';
import { useState } from 'react';
import { DateValue } from 'react-aria';
import { initTE, Ripple } from 'tw-elements';

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

  initTE({ Ripple });

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
        <button
          type='button'
          data-te-ripple-init
          data-te-ripple-color='light'
          // eslint-disable-next-line prettier/prettier
          className='bg-primary rounded px-6 pb-2 pt-2.5 
            font-medium uppercase 
            leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]
            transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
        >
          Button
        </button>
        <br />
        <br />
        <Button
          styling={'rounded bg-primary-900 text-white hover:bg-primary-800'}
          onPress={() => alert('Hello :)')}
        >
          Primary Btn
        </Button>
        <br />
        <br />
        <Button
          styling={
            'border border-secondary-900 rounded text-secondary-900 bg-white hover:bg-secondary-900 hover:text-white'
          }
          onPress={() => alert('Hello :)')}
        >
          Secondary Btn
        </Button>
        <br />
        <br />
        <Button
          styling={'rounded bg-danger-900 text-white hover:bg-danger-800'}
          onPress={() => alert('Hello :)')}
        >
          Danger Btn
        </Button>
        <br />
        <br />
        <Button
          styling={'rounded bg-warning-900 text-white hover:bg-warning-800'}
          onPress={() => alert('Hello :)')}
        >
          Warning Btn
        </Button>
        <br />
        <br />
        <Button
          styling={
            'border border-primary-900 rounded text-primary-900 bg-white hover:bg-primary-900 hover:text-white'
          }
          onPress={() => alert('Hello :)')}
        >
          Primary Reverse Btn
        </Button>
        <br />
        <br />
        <Button
          styling={
            'border border-danger-900 rounded text-danger-900 bg-white hover:bg-danger-900 hover:text-white'
          }
          onPress={() => alert('Hello :)')}
        >
          Danger Reverse Btn
        </Button>
        <br />
        <br />
        <Button
          styling={
            'border border-warning-900 rounded text-warning-900 bg-white hover:bg-warning-900 hover:text-white'
          }
          onPress={() => alert('Hello :)')}
        >
          Warning Reverse Btn
        </Button>
      </div>
    </>
  );
}

export default Home;
