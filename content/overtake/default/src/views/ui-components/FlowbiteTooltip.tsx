import AnimatioTooltip from 'src/components/ui-components/Tooltip/AnimatioTooltip';
import DisableTooltip from 'src/components/ui-components/Tooltip/DisableTooltip';
import TooltipPlacement from 'src/components/ui-components/Tooltip/TooltipPlacement';
import TooltipStyle from 'src/components/ui-components/Tooltip/TooltipStyle';
import TooltipTrigger from 'src/components/ui-components/Tooltip/TooltipTrigger';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Tooltips',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'style',
    description: 'Determines the visual style of the tooltip.',
    type: `'light' | 'dark'`,
    default: `'light'`,
  },
  {
    id: '2',
    prop: 'placement',
    description: 'Defines the position of the tooltip relative to the trigger element.',
    type: `'top' | 'right' | 'bottom' | 'left'`,
    default: `'top'`,
  },
  {
    id: '3',
    prop: 'trigger',
    description: 'Sets the event that triggers the tooltip visibility.',
    type: `'hover' | 'click'`,
    default: `'hover'`,
  },
  {
    id: '4',
    prop: 'animation',
    description: 'Controls the duration of the tooltip animation.',
    type: `'duration-150' | 'duration-300' | 'duration-500'`,
    default: `'duration-300'`,
  },
  {
    id: '5',
    prop: 'arrow',
    description: 'Toggles the visibility of the tooltip arrow.',
    type: 'boolean',
    default: 'true',
  },
];

const FlowbiteTooltip = () => {
  return (
    <>
      <BreadcrumbComp title="Tooltips" items={BCrumb} />

      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Tooltip Style */}
        <div className="col-span-12">
          <TooltipStyle />
        </div>
        {/* Tooltip Trigger */}
        <div className="col-span-12">
          <TooltipTrigger />
        </div>
        {/* Tooltip Disable Icon */}
        <div className="col-span-12">
          <DisableTooltip />
        </div>
        {/* Animatio Tooltip */}
        <div className="col-span-12">
          <AnimatioTooltip />
        </div>
        {/* Tooltip Placement */}
        <div className="col-span-12">
          <TooltipPlacement />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Tooltips" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteTooltip;
