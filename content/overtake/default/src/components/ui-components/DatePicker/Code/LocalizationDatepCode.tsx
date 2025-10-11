import { IconCalendarMonth } from '@tabler/icons-react';
import { Datepicker } from 'flowbite-react';

const LocalizationDatepCode = () => {
  return (
    <>
      <div className="max-w-sm">
        <Datepicker
          language="pt-BR"
          labelTodayButton="Hoje"
          labelClearButton="Limpar"
          className="form-control"
          icon={() => <IconCalendarMonth size={20} />}
        />
      </div>
    </>
  );
};

export default LocalizationDatepCode;
