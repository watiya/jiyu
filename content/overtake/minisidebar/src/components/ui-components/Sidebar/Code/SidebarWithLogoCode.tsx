import {
  IconLayoutDashboard,
  IconBrandTrello,
  IconInbox,
  IconUser,
  IconShoppingBag,
  IconLogin2,
  IconUserPlus,
} from '@tabler/icons-react';
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';

const SidebarWithLogoCode = () => {
  return (
    <>
      <div>
        <Sidebar aria-label="Sidebar with logo branding example">
          <div className="pb-5">
            <FullLogo />
          </div>
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

export default SidebarWithLogoCode;
