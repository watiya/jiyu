import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";


const PopoverPositionCode = () => {
  return (
    <>
    <div className="mt-4">
      <div className="gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">
          <Popover className="relative flex justify-center">
            <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">
              Top Popover
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="top start"
              className="w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0"
            >
              <div className="flex flex-col gap-1">
                <a href="/analytics" className="ui-dropdown-item">
                  Analytics
                </a>
                <a href="/engagement" className="ui-dropdown-item">
                  Engagement
                </a>
                <a href="/security" className="ui-dropdown-item">
                  Security
                </a>
                <a href="/integrations" className="ui-dropdown-item">
                  Integrations
                </a>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
    </div>
    </>
  )
}

export default PopoverPositionCode
