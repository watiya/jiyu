
import { TabItem, Tabs } from "flowbite-react";
import {
  IconArticle,
  IconBell,
  IconLock,
  IconUserCircle,
} from "@tabler/icons-react";
import CardBox from "src/components/shared/CardBox";
import AccountTab from "./AccountTab";
import BillsTabs from "./BillsTab";
import NotificationTab from "./NotificationTab";
import SecurityTab from "./SecurityTab";


const AccountSettingIndex = () => {
  return (
    <>
      <CardBox className="px-0 py-0 ">
        <Tabs aria-label="Tabs with underline"  variant="underline">
          <TabItem
            active
            title="Account"
            icon={() => <IconUserCircle size={20} />}
          >
            <div className="p-6">
              <AccountTab />
            </div>
          </TabItem>
          <TabItem title="Notification" icon={() => <IconBell size={20} />}>
            <div className="p-6">
              <NotificationTab />
            </div>
          </TabItem>
          <TabItem title="Bills" icon={() => <IconArticle size={20} />}>
            <div className="p-6">
              <BillsTabs />
            </div>
          </TabItem>
          <TabItem title="Security" icon={() => <IconLock size={20} />}>
            <div className="p-6">
              <SecurityTab />
            </div>
          </TabItem>
        </Tabs>
      </CardBox>
    </>
  );
};

export default AccountSettingIndex;
