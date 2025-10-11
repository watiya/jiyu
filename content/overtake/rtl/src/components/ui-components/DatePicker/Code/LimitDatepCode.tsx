import { IconCalendarMonth } from '@tabler/icons-react';
import { Datepicker } from 'flowbite-react';

const LimitDatepCode = () => {
  return (
    <>
      <div className='max-w-sm'>
        <Datepicker
          minDate={new Date(2023, 0, 1)}
          maxDate={new Date(2023, 3, 30)}
          className="form-control"
          icon={() => <IconCalendarMonth size={20} />}
        />
      </div>
    </>
  );
};

export default LimitDatepCode;
