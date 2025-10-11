import DefaultProgress from 'src/components/ui-components/Progressbar/DefaultProgress';
import LabelPostionProgress from 'src/components/ui-components/Progressbar/LabelPostionProgress';
import LabelProgress from 'src/components/ui-components/Progressbar/LabelProgress';
import ProgressColor from 'src/components/ui-components/Progressbar/ProgressColor';
import ProgressSize from 'src/components/ui-components/Progressbar/ProgressSize';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Progress Bar',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'progress',
    description: 'Sets the completion percentage of the progress bar.',
    type: 'number',
    default: '0',
  },
  {
    id: '2',
    prop: 'color',
    description: 'Specifies the color of the progress bar.',
    type: `'primary' | 'secondary' | 'error' | 'success' | 'nfo'`,
    default: `'Default'`,
  },
  {
    id: '3',
    prop: 'size',
    description: 'Determines the height of the progress bar.',
    type: `'sm' | 'md' | 'lg' | 'xl'`,
    default: `'md'`,
  },
  {
    id: '4',
    prop: 'textLabel',
    description: 'Sets the label text displayed outside the progress bar.',
    type: 'string',
    default: '-',
  },
  {
    id: '5',
    prop: 'labelText',
    description: 'Sets the label text displayed inside the progress bar.',
    type: 'string',
    default: '-',
  },
  {
    id: '6',
    prop: 'labelProgress',
    description: 'If true, displays the progress percentage inside the bar.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '7',
    prop: 'textLabelPosition',
    description: 'Positions the textLabel relative to the progress bar.',
    type: `'inside' | 'outside'`,
    default: `'outside'`,
  },
  {
    id: '8',
    prop: 'progressLabelPosition',
    description: 'Positions the labelProgress relative to the progress bar.',
    type: `'inside' | 'outside'`,
    default: `'inside'`,
  },
];

const FlowbiteProgressbar = () => {
  return (
    <>
      <BreadcrumbComp title="Progress Bar" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default Progress */}
        <div className="col-span-12">
          <DefaultProgress />
        </div>
        {/* Label Progress */}
        <div className="col-span-12">
          <LabelProgress />
        </div>
        {/* Label Postion Progress */}
        <div className="col-span-12">
          <LabelPostionProgress />
        </div>
        {/* Progress Size */}
        <div className="col-span-12">
          <ProgressSize />
        </div>
        {/* Progress Colors */}
        <div className="col-span-12">
          <ProgressColor />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Progress Bar" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteProgressbar;
