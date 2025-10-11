
import { Link } from "react-router";
import Banner1 from "/src/assets/images/landingpage/background/banner-bg-1.png";
import Banner2 from "/src/assets/images/landingpage/background/banner-bg-2.png";
import Banner3 from "/src/assets/images/landingpage/background/banner-bg-3.png";
import Animate1 from "/src/assets/images/landingpage/background/banner-widget-1.svg";
import Animate2 from "/src/assets/images/landingpage/background/banner-widget-2.svg";
import { Button } from "flowbite-react";

const banner = () => {
  return (
    <>
      <div className="bg-lightgray dark:bg-darkgray md:py-20 py-12 relative overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-3 col-span-12 lg:inline hidden text-end">
              <img
                src={Banner1}
                className=" float-right rtl:float-left max-w-max h-full"
                alt="banner"
              />
              <img src={Animate1} className="animted-img " alt="banner" />
            </div>
            <div className="lg:col-span-6 col-span-12 flex flex-col">
              <div className="text-center">
                <h1 className="md:text-[64px] text-4xl font-bold sm:leading-[74px] sm:mt-12" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                  Most Elegant
                  <span className="font-normal block">Admin Dashboard</span>
                </h1>
                <div className="flex gap-3.5 justify-center my-[30px]" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                  <div className="border rounded-md border-dashed border-ld px-4 py-2 text-center">
                    <h4 className="text-xl">90+</h4>
                    <p className="text-xs font-medium text-darklink">
                      Demo Pages
                    </p>
                  </div>
                  <div className="border rounded-md border-dashed border-ld px-4 py-2 text-center">
                    <h4 className="text-xl">12+</h4>
                    <p className="text-xs font-medium text-darklink">Apps</p>
                  </div>
                  <div className="border rounded-md border-dashed border-ld px-4 py-2 text-center">
                    <h4 className="text-xl">45+</h4>
                    <p className="text-xs font-medium text-darklink">
                      UI Components
                    </p>
                  </div>
                </div>
                <div className="flex gap-3.5 justify-center" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                  <Button as={Link} to="/auth/auth1/login" color={"primary"} className="px-8">
                    Login
                  </Button>
                  <a href="#demos" type="button" className="group relative flex items-stretch justify-center p-0.5 text-center font-medium border border-primary bg-transparent text-primary hover:bg-primary dark:hover:bg-primary hover:text-white rounded-lg px-4" data-discover="true"><span className="flex items-center gap-2 transition-all duration-150 justify-center rounded-md px-4 py-2 text-sm">Live Preview</span></a>
                </div>
              </div>
              <div className="mt-auto lg:block hidden">
                <img src={Banner3} alt="banner" />
              </div>
            </div>
            <div className="lg:col-span-3 col-span-12 lg:inline hidden">
              <img
                src={Banner2}
                className=" float-left rtl:float-right  max-w-max h-full"
                alt="banner"

              />
              <img src={Animate2} className="animted-img-2" alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;
