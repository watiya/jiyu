import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';
import { Link } from 'react-router';

const DefaultNavCode = () => {
  return (
    <>
      <div>
        <Navbar fluid className="rounded-md">
          <FullLogo />
          <NavbarToggle />
          <NavbarCollapse className="overflow-x-auto">
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink as={Link} href="#">
              About
            </NavbarLink>
            <NavbarLink href="#">Services</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
    </>
  );
};

export default DefaultNavCode;
