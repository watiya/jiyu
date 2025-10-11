import MyCustomLink from "../MyLink";
import { Icon } from "@iconify/react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  CloseButton,
} from "@headlessui/react";

const ClosingDisclosureCode = () => {
  return (
    <>
    <div className="mt-4">
      <Disclosure>
          <DisclosureButton className="group bg-primary ui-button">
            Open mobile menu
            <Icon
              icon="solar:alt-arrow-down-outline"
              height={18}
              className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"
            />
          </DisclosureButton>
          <DisclosurePanel className="px-4 py-1">
            <CloseButton as={MyCustomLink}>Go with your link</CloseButton>
          </DisclosurePanel>
        </Disclosure>
    </div>
    </>
  )
}

export default ClosingDisclosureCode
