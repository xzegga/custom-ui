import { today, getLocalTimeZone } from '@internationalized/date';
import { DatePicker } from 'core-ui';
import { DateRangePicker } from 'core-ui';

function Home() {
  return (
    <>
      <div className="ml-12 max-w-lg text-gray-700">
        <DatePicker label="Appointment date" minValue={today(getLocalTimeZone())} />
        <h2 className="mt-12 mb-2 font-bold text-xl text-left">DateRangePicker</h2>
        <DateRangePicker label="Trip dates" minValue={today(getLocalTimeZone())} />
      </div>
    </>
  );
}

export default Home;
