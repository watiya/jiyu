import DefaultModal from 'src/components/ui-components/Modals/DefaultModal';
import FormModal from 'src/components/ui-components/Modals/FormModal';
import PlacementModal from 'src/components/ui-components/Modals/PlacementModal';
import PopupModal from 'src/components/ui-components/Modals/PopupModal';
import SizingModal from 'src/components/ui-components/Modals/SizingModal';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Modals',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'show',
    description: 'Controls the visibility of the modal.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '2',
    prop: 'onClose',
    description: 'Function to call when the modal is requested to be closed.',
    type: '() => void',
    default: '-',
  },
  {
    id: '3',
    prop: 'size',
    description: 'Sets the size of the modal (e.g., sm, md, lg, xl, 2xl).',
    type: `'sm' | 'md' | 'lg' | 'xl' | '2xl'`,
    default: `'2xl'`,
  },
  {
    id: '4',
    prop: 'popup',
    description: 'Enables popup-style modal (with centered layout).',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '5',
    prop: 'dismissible',
    description: 'If true, adds a close (X) button to the top-right corner.',
    type: 'boolean',
    default: 'true',
  },
  {
    id: '6',
    prop: 'position',
    description: 'Sets the position of the modal on the screen.',
    type: `'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'`,
    default: `'center'`,
  },
];

const FlowbiteModals = () => {
  return (
    <>
      <BreadcrumbComp title="Modals" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default */}
        <div className="col-span-12">
          <DefaultModal />
        </div>
        {/* Popup Modal */}
        <div className="col-span-12">
          <PopupModal />
        </div>
        {/* Form Modal */}
        <div className="col-span-12">
          <FormModal />
        </div>
        {/* Placement Modal */}
        <div className="col-span-12">
          <PlacementModal />
        </div>
        {/* Sizing Modal */}
        <div className="col-span-12">
          <SizingModal />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Modals" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteModals;
