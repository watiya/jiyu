import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Icon } from "@iconify/react";

const ButtonActionCode = () => {
  function showSettingsDialog() {
    alert("Open settings dialog!");
  }
  function showSupportDialog() {
    alert("Open Support dialog!");
  }
  function showLogoutDialog() {
    alert("Open Logout dialog!");
  }
  return (
    <>
    <div className="mt-4">
      <Menu>
          <MenuButton className="ui-button bg-success gap-2">
            My Action <Icon icon="solar:alt-arrow-down-outline" height={18} />
          </MenuButton>
          <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">
            <MenuItem>
              <button onClick={showSettingsDialog} className="ui-dropdown-item">
                Settings
              </button>
            </MenuItem>
            <MenuItem>
              <button onClick={showSupportDialog} className="ui-dropdown-item">
                Support
              </button>
            </MenuItem>
            <MenuItem>
              <button onClick={showLogoutDialog} className="ui-dropdown-item">
                Logout
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
    </div>
    </>
  );
};

export default ButtonActionCode;
