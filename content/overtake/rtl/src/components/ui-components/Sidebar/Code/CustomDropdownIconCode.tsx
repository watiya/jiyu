import {
  IconLayoutDashboard,
  IconBrandShopee,
  IconInbox,
  IconUser,
  IconShoppingBag,
  IconLogin2,
  IconUserPlus,
} from '@tabler/icons-react';
import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from 'flowbite-react';

import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

const CustomDropdownIconCode = () => {
  return (
    <>
      <div>
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>
                Dashboard
              </SidebarItem>
              <SidebarCollapse
                icon={() => <IconBrandShopee size={20} />}
                label="E-commerce"
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                  return (
                    <IconComponent
                      aria-hidden
                      className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])}
                    />
                  );
                }}
              >
                <SidebarItem href="#">Products</SidebarItem>
                <SidebarItem href="#">Sales</SidebarItem>
                <SidebarItem href="#">Refunds</SidebarItem>
                <SidebarItem href="#">Shipping</SidebarItem>
                <SidebarItem href="#">User</SidebarItem>
              </SidebarCollapse>
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

export default CustomDropdownIconCode;
