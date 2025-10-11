import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Icon } from "@iconify/react";

const LinkDropdownCode = () => {
  return (
    <>
    <div className="mt-4">
      <Menu>
          <MenuButton className="ui-button bg-secondary gap-2">
            My Account <Icon icon="solar:alt-arrow-down-outline" height={18} />
          </MenuButton>
          <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">
            <MenuItem>
              <a className="ui-dropdown-item" href="/settings">
                Settings
              </a>
            </MenuItem>
            <MenuItem>
              <a className="ui-dropdown-item" href="/support">
                Support
              </a>
            </MenuItem>
            <MenuItem>
              <a className="ui-dropdown-item" href="/license">
                License
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
    </div>
    </>
  );
};

export default LinkDropdownCode;
