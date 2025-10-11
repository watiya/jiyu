import { Transition, TransitionChild } from '@headlessui/react'
import { DashboardContext } from 'src/context/DashboardContext/DashboardContext'
import { useContext } from 'react'


const PartialTransitioning = () => {
    const {isSidebarOpen,setIsSidebarOpen} = useContext(DashboardContext)
  return (
    <Transition show={isSidebarOpen}>
    {/* Backdrop */}
    <TransitionChild>
      <div
        className="fixed inset-0 bg-black/30 transition duration-300 data-closed:opacity-0"
        onClick={() => setIsSidebarOpen(false)}
      />
    </TransitionChild>

    {/* Slide-in sidebar */}
    <TransitionChild>
      <div className="fixed inset-y-0 z-50 left-0 w-80 bg-white dark:bg-dark transition duration-300 data-closed:-translate-x-full p-4">
        <h3 className="text-lg mb-2">This Is Sidebar</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </TransitionChild>
  </Transition>
  )
}

export default PartialTransitioning