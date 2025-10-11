import AutoHide from 'src/components/ui-components/DatePicker/AutoHide';
import DefaultDatep from 'src/components/ui-components/DatePicker/DefaultDatep';
import LimitDatep from 'src/components/ui-components/DatePicker/LimitDatep';
import LocalizationDatep from 'src/components/ui-components/DatePicker/LocalizationDatep';
import TitleDatePicker from 'src/components/ui-components/DatePicker/TitleDatePicker';
import WeekStart from 'src/components/ui-components/DatePicker/WeekStart';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Datepicker',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'language',
    description: 'Sets the language of the datepicker.',
    type: `'pt-BR'`,
    default: '-',
  },
  {
    id: '2',
    prop: 'labelTodayButton',
    description: 'Label for the "Today" button.',
    type: `'Hoje'`,
    default: '-',
  },
  {
    id: '3',
    prop: 'labelClearButton',
    description: 'Label for the "Clear" button.',
    type: `'Limpar'`,
    default: '-',
  },
  {
    id: '4',
    prop: 'minDate',
    description: 'The minimum selectable date.',
    type: 'Date(2023, 0, 1)',
    default: '-',
  },
  {
    id: '5',
    prop: 'maxDate',
    description: 'The maximum selectable date.',
    type: 'Date(2023, 3, 30)',
    default: '-',
  },
  {
    id: '6',
    prop: 'weekStart',
    description: 'Sets the first day of the week.',
    type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
    default: '0',
  },
  {
    id: '7',
    prop: 'autoHide',
    description: 'Automatically hides the datepicker after selecting a date.',
    type: 'boolean',
    default: 'true',
  },
  {
    id: '8',
    prop: 'title',
    description: 'Sets the title of the datepicker.',
    type: `'Flowbite Datepicker'`,
    default: '-',
  },
];

const FlowbiteDatePicker = () => {
  return (
    <>
      <BreadcrumbComp title="Datepicker" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default Date Picker*/}
        <div className="col-span-12">
          <DefaultDatep />
        </div>
        {/* Localization Date Picker*/}
        <div className="col-span-12">
          <LocalizationDatep />
        </div>
        {/* Limit Date Picker*/}
        <div className="col-span-12">
          <LimitDatep />
        </div>
        {/* WeekStart Date Picker*/}
        <div className="col-span-12">
          <WeekStart />
        </div>
        {/* Autohide Date Picker*/}
        <div className="col-span-12">
          <AutoHide />
        </div>
        {/* Title Date Picker*/}
        <div className="col-span-12">
          <TitleDatePicker />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Datepicker" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteDatePicker;
