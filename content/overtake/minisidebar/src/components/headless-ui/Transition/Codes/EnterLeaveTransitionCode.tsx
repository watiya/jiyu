import { Transition } from "@headlessui/react";
import clsx from "clsx";
import  { useState } from "react";


const EnterLeaveTransitionCode = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="mt-4">
       <div className="relative">
          <button onClick={() => setOpen((open) => !open)} className="ui-button bg-secondary justify-center">Enter Leave Transition</button>
          <Transition show={open}>
            <div
              className={clsx([
                // Base styles
                "absolute z-50 transition ease-in-out bg-white dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 mt-1",
                // Shared closed styles
                "data-closed:opacity-0 ",
                // Entering styles
                "data-enter:duration-100 data-enter:data-closed:-translate-x-full",
                // Leaving styles
                "data-leave:duration-300 data-leave:data-closed:translate-x-full",
              ])}
            >
              I will enter from the left and leave to the right
            </div>
          </Transition>
        </div>
    </div>
    </>
  )
}

export default EnterLeaveTransitionCode
