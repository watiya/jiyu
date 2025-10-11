import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from 'flowbite-react';
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';

const FooterWithLogoCode = () => {
  return (
    <>
      <div>
        <Footer container className="rounded-md">
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <FullLogo />
              <FooterLinkGroup>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Licensing</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </FooterLinkGroup>
            </div>
            <FooterDivider />
            <FooterCopyright href="#" by="MateriaIM" year={2024} />
          </div>
        </Footer>
      </div>
    </>
  );
};

export default FooterWithLogoCode;
