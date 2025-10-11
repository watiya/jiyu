import BottomDrawer from 'src/components/ui-components/Drawer/BottomDrawer';
import ContactDrawer from 'src/components/ui-components/Drawer/ContactDrawer';
import CustomBackDrop from 'src/components/ui-components/Drawer/CustomBackDrop';
import DefaultDrawer from 'src/components/ui-components/Drawer/DefaultDrawer';
import DrawerNavigation from 'src/components/ui-components/Drawer/DrawerNavigation';
import FormDrawer from 'src/components/ui-components/Drawer/FormDrawer';
import LeftDrawer from 'src/components/ui-components/Drawer/LeftDrawer';
import RightDrawer from 'src/components/ui-components/Drawer/RightDrawer';
import SwipableDrawer from 'src/components/ui-components/Drawer/SwipableDrawer';
import TopDrawer from 'src/components/ui-components/Drawer/TopDrawer';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Drawer',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'open',
    description: 'Controls the visibility of the drawer.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '2',
    prop: 'onClose',
    description: 'Callback function triggered when the drawer is closed.',
    type: `'() => setIsOpen(false)'`,
    default: '-',
  },
  {
    id: '3',
    prop: 'placement',
    description: 'Specifies the side from which the drawer will appear.',
    type: "'top' | 'right' | 'bottom' | 'left'",
    default: "'right'",
  },
  {
    id: '4',
    prop: 'backdrop',
    description: 'Determines if a backdrop is displayed behind the drawer.',
    type: 'boolean',
    default: 'true',
  },
  {
    id: '5',
    prop: 'bodyScrolling',
    description: 'Allows body scrolling when the drawer is open.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '6',
    prop: 'edge',
    description: 'Enables swipeable edge functionality.',
    type: 'boolean',
    default: 'false',
  },
];

const FlowbiteDrawer = () => {
  return (
    <>
      <BreadcrumbComp title="Drawer" items={BCrumb} />

      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default */}
        <div className="col-span-12">
          <DefaultDrawer />
        </div>
        {/* Drawer Navigation */}
        <div className="col-span-12">
          <DrawerNavigation />
        </div>
        {/* Contact Form Drawer */}
        <div className="col-span-12">
          <ContactDrawer />
        </div>
        {/* Form Drawer */}
        <div className="col-span-12">
          <FormDrawer />
        </div>
        {/* Custom BackDrop */}
        <div className="col-span-12">
          <CustomBackDrop />
        </div>
        {/* Swipable Drawer  */}
        <div className="col-span-12">
          <SwipableDrawer />
        </div>
        {/* Left Drawer  */}
        <div className="col-span-12">
          <LeftDrawer />
        </div>
        {/* Right Drawer  */}
        <div className="col-span-12">
          <RightDrawer />
        </div>
        {/* Top Drawer  */}
        <div className="col-span-12">
          <TopDrawer />
        </div>
        {/* Bottom Drawer  */}
        <div className="col-span-12">
          <BottomDrawer />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Drawer" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteDrawer;
