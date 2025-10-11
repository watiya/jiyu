import {
  IconLayoutDashboard,
  IconBrandTrello,
  IconInbox,
  IconWorldUpload,
  IconFileText,
  IconInfoSquareRounded,
  IconUserPlus,
} from '@tabler/icons-react';
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';

const ContentSeparatorCode = () => {
  return (
    <>
      <div>
        <Sidebar aria-label="Sidebar with content separator example">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>
                Dashboard
              </SidebarItem>
              <SidebarItem href="#" icon={() => <IconBrandTrello size={20} />}>
                Kanban
              </SidebarItem>
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>
                Inbox
              </SidebarItem>
            </SidebarItemGroup>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={() => <IconWorldUpload size={20} />}>
                Upgrade to Pro
              </SidebarItem>
              <SidebarItem href="#" icon={() => <IconFileText size={20} />}>
                Documentation
              </SidebarItem>
              <SidebarItem href="#" icon={() => <IconInfoSquareRounded size={20} />}>
                Help
              </SidebarItem>
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>
                Sign Up
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
};

export default ContentSeparatorCode;
