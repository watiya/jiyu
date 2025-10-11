import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';

const DefaultFooterCode = () => {
  return (
    <>
      <div>
        <Footer container className="rounded-md">
          <FooterCopyright href="#" by="MateriaIM" year={2024} />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </Footer>
      </div>
    </>
  );
};

export default DefaultFooterCode;
