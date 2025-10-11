import { TabItem, Tabs } from 'flowbite-react';

const TabsPillcode = () => {
  return (
    <>
      <div className="mt-2">
        <Tabs aria-label="Pills">
          <TabItem active title="Tab 1" className="rounded-t-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p>
          </TabItem>
          <TabItem title="Tab 2">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
          </TabItem>
          <TabItem title="Tab 3">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
          </TabItem>
          <TabItem title="Tab 4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
          </TabItem>
          <TabItem disabled title="Tab 5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 5</p>
          </TabItem>
        </Tabs>
      </div>
    </>
  );
};

export default TabsPillcode;
