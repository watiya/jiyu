import { IconCalendarMonth } from '@tabler/icons-react';
import { Datepicker } from 'flowbite-react';

const TitleDatePickerCode = () => {
  return (
    <>
      <div className="max-w-sm">
        <Datepicker
          title="DatePicker Title"
          className="form-control"
          icon={() => <IconCalendarMonth size={20} />}
        />
      </div>
    </>
  );
};

export default TitleDatePickerCode;
