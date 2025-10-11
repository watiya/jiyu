import { TabItem, Tabs } from 'flowbite-react';
import { Icon } from '@iconify/react';

const FullWidthTabsCode = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <Tabs aria-label="Full width tabs" variant="fullWidth">
          <TabItem
            active
            title="Profile"
            icon={() => <Icon icon="solar:shield-user-outline" height={20} />}
          >
            This is{' '}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab
            JavaScript swaps classes to control the content visibility and styling.
          </TabItem>
          <TabItem title="Dashboard" icon={() => <Icon icon="solar:graph-linear" height={20} />}>
            This is{' '}
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab
            JavaScript swaps classes to control the content visibility and styling.
          </TabItem>
          <TabItem title="Settings" icon={() => <Icon icon="solar:settings-outline" height={20} />}>
            This is{' '}
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab
            JavaScript swaps classes to control the content visibility and styling.
          </TabItem>
          <TabItem
            title="Contacts"
            icon={() => <Icon icon="solar:accessibility-linear" height={20} />}
          >
            This is{' '}
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab
            JavaScript swaps classes to control the content visibility and styling.
          </TabItem>
          <TabItem disabled title="Disabled">
            Disabled content
          </TabItem>
        </Tabs>
      </div>
    </>
  );
};

export default FullWidthTabsCode;
