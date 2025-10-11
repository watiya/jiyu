import {
  IconBrandTrello,
  IconInbox,
  IconLayoutDashboard,
  IconLogin2,
  IconShoppingBag,
  IconUser,
  IconUserPlus,
} from '@tabler/icons-react';
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';

const DefaultSidebarCode = () => {
  return (
    <>
      <div>
        <Sidebar aria-label="Default sidebar example">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>
                Dashboard
              </SidebarItem>
              <SidebarItem
                href="#"
                icon={() => <IconBrandTrello size={20} />}
                label="Pro"
                labelColor="dark"
              >
                Kanban
              </SidebarItem>
              <SidebarItem href="#" icon={() => <IconInbox size={20} />} label="3">
                Inbox
              </SidebarItem>
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>
                Users
              </SidebarItem>
              <SidebarItem href="#" icon={() => <IconShoppingBag size={20} />}>
                Products
              </SidebarItem>
              <SidebarItem href="#" icon={() => <IconLogin2 size={20} />}>
                Sign In
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

export default DefaultSidebarCode;
