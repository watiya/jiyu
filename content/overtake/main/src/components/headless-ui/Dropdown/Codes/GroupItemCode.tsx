import {
  Menu,
  MenuButton,
  MenuItems,
  MenuSection,
  MenuHeading,
  MenuItem,
  MenuSeparator,
} from "@headlessui/react";
import { Icon } from "@iconify/react";


const GroupItemCode = () => {
  return (
    <>
    <div className="mt-4">
      <Menu>
          <MenuButton className="ui-button bg-info gap-2">
            My Groups
            <Icon icon="solar:alt-arrow-down-outline" height={18} />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom"
            className="ui-dropdown ui-dropdown-animation"
          >
            <MenuSection>
              <MenuHeading className="text-ld text-sm font-semibold px-4 py-1">
                Settings
              </MenuHeading>
              <MenuItem>
                <a className="ui-dropdown-item" href="/profile">
                  My profile
                </a>
              </MenuItem>
              <MenuItem>
                <a className="ui-dropdown-item" href="/notifications">
                  Notifications
                </a>
              </MenuItem>
            </MenuSection>
            <MenuSeparator className="my-1 h-px bg-border dark:bg-darkborder" />
            <MenuSection>
              <MenuHeading className="text-ld text-sm font-semibold px-4 py-1">
                Support
              </MenuHeading>
              <MenuItem>
                <a className="ui-dropdown-item" href="/support">
                  Documentation
                </a>
              </MenuItem>
              <MenuItem>
                <a className="ui-dropdown-item" href="/license">
                  License
                </a>
              </MenuItem>
            </MenuSection>
          </MenuItems>
        </Menu>
    </div>
    </>
  );
};

export default GroupItemCode;
