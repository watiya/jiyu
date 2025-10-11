import { IconCalendarMonth } from '@tabler/icons-react';
import { Datepicker } from 'flowbite-react';

const WeekStartCode = () => {
  return (
    <>
      <div className="max-w-sm">
        <Datepicker
          weekStart={1} // Monday
          className="form-control"
          icon={() => <IconCalendarMonth size={20} />}
        />
      </div>
    </>
  );
};

export default WeekStartCode;
