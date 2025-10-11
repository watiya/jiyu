import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Button, ButtonGroup, TabItem, Tabs, TabsRef } from 'flowbite-react';

const StateTabsCode = () => {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="sm:flex flex-col gap-3">
        <Tabs
          aria-label="Default tabs"
          ref={tabsRef}
          onActiveTabChange={(tab) => setActiveTab(tab)}
        >
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
        <div className="text-sm text-gray-500 dark:text-gray-400">Active tab: {activeTab}</div>
        <ButtonGroup className="md:flex hidden">
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(0)}>
            Profile
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(1)}>
            Dashboard
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(2)}>
            Settings
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(3)}>
            Contacts
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default StateTabsCode;
