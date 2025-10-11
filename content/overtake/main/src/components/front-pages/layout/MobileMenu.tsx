
import { useState } from "react";
import { Badge, Button, Drawer, DrawerItems } from "flowbite-react";
import { IconMenu2 } from "@tabler/icons-react";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import { Link, useLocation } from "react-router";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const FrontNav = [
    {
      menu: "About Us",
      link: "/frontend-pages/aboutus",
      badge: false,
    },
    {
      menu: "Blog",
      link: "/frontend-pages/blog",
      badge: false,
    },
    {
      menu: "Portfolio",
      link: "/frontend-pages/portfolio",
      badge: true,
    },
    {
      menu: "Dashboard",
      link: "/",
      badge: false,
    },
    {
      menu: "Pricing",
      link: "/frontend-pages/pricing",
      badge: false,
    },
    {
      menu: "Contact",
      link: "/frontend-pages/contact",
      badge: false,
    },
  ];

  const location = useLocation();
  const pathname = location.pathname;
  
  return (

    <>
      <div className="xl:hidden flex">
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center text-dark dark:text-white p-0 h-10 w-10 rounded-full bg-transparent hover:bg-lightprimary"
        >
          <IconMenu2 />
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="h-full">
        <DrawerItems className="p-6">
          <div className="mb-6">
            <FullLogo />
          </div>
               <ul className="flex xl:flex-row flex-col xl:gap-2 gap-2 xl:items-center">
                 {FrontNav.map((item, index) => (
                   <li
                     key={index}
                     className={`rounded-full font-semibold text-15 py-3 px-5 ${pathname == item.link ? 'bg-lightprimary text-primary' : 'text-dark dark:text-white ' }`}
                   >
                     <Link to={item.link} className="flex gap-3 items-center text-primary-ld">
                       {item.menu}
                       {item.badge == true ? <Badge color={'lightprimary'}>New</Badge> : null}
                     </Link>
                   </li>
                 ))}
               </ul>
          <Button
            as={Link}
            to="/auth/auth1/login"
            className="font-bold w-full mt-6"
            color={"primary"}
          >
            Log in
          </Button>
        </DrawerItems>
      </Drawer>
    </>
  );
};

export default MobileMenu;
