import { IconCalendarMonth } from '@tabler/icons-react';
import { Datepicker } from 'flowbite-react';

const AutoHideCode = () => {
  return (
    <>
      <div className="max-w-sm">
        <Datepicker
          autoHide={false}
          className="form-control"
          icon={() => <IconCalendarMonth size={20} />}
        />
      </div>
    </>
  );
};

export default AutoHideCode;
