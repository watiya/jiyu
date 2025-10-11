import { FC, useContext } from 'react';
import { Outlet } from "react-router";
import { Customizer } from './shared/customizer/Customizer';
import { CustomizerContext } from '../../context/CustomizerContext';
import Sidebar from './vertical/sidebar/Sidebar';
import Header from './vertical/header/Header';
import ScrollToTop from 'src/components/shared/ScrollToTop';



const FullLayout: FC = () => {
  const { activeLayout, isLayout } = useContext(CustomizerContext);

  return (
      <>
    <div className="flex w-full min-h-screen dark:bg-darkgray">
      <div className="page-wrapper flex w-full  ">
        {/* Header/sidebar */}

        {activeLayout == "vertical" ? <Sidebar /> : null}
        <div className="page-wrapper-sub flex flex-col w-full dark:bg-dark  bg-lightgray">
          {/* Top Header  */}
          {activeLayout == "horizontal" ? (
            <Header layoutType="horizontal" />
          ) : (
            <Header layoutType="vertical" />
          )}

          <div
            className={`bg-lightgray dark:bg-dark   h-full ${
              activeLayout != "horizontal" ? "rounded-bb" : "rounded-none"
            } `}
          >
            {/* Body Content  */}
            <div
              className={` ${
                isLayout == "full"
                  ? "w-full py-30 md:px-30 px-5"
                  : "container mx-auto  py-30"
              } ${activeLayout == "horizontal" ? "xl:mt-3" : ""}
              `}
            >
              <ScrollToTop>
              <Outlet/>
              </ScrollToTop>
            </div>
            {/* Customizer */}
            <Customizer />
          </div>
        </div>
      </div>
    </div>
      </>
  );
};

export default FullLayout;
