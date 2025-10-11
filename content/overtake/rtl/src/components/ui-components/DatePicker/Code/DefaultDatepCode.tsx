import { IconCalendarMonth } from '@tabler/icons-react';
import { Datepicker } from 'flowbite-react';

const DefaultDatepCode = () => {
  return (
    <>
      <div className='max-w-sm'>
        <Datepicker className="form-control" icon={() => <IconCalendarMonth size={20} />} />
      </div>
    </>
  );
};

export default DefaultDatepCode;
