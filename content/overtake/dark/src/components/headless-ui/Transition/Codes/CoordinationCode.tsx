import  { useContext,  } from "react";
import { DashboardContext } from "src/context/DashboardContext/DashboardContext";


const CoordinationCode = () => {
  const {setIsSidebarOpen} = useContext(DashboardContext);
  return (
    <>
    <div className="mt-4">
      <button
          onClick={() => setIsSidebarOpen(true)}
          className="ui-button bg-success justify-center"
        >
          Coordinating Transition
        </button>
    </div>
    </>
  );
};

export default CoordinationCode;
