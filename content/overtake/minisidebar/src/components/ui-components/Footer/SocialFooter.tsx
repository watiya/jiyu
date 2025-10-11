
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
const SocialFooter = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold mb-2">Social media icons</h4>
        <Footer container className="rounded-md">
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <FullLogo />
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <FooterTitle title="about" />
                  <FooterLinkGroup col>
                    <FooterLink href="#">Flowbite</FooterLink>
                    <FooterLink href="#">Tailwind CSS</FooterLink>
                  </FooterLinkGroup>
                </div>
                <div>
                  <FooterTitle title="Follow us" />
                  <FooterLinkGroup col>
                    <FooterLink href="#">Github</FooterLink>
                    <FooterLink href="#">Discord</FooterLink>
                  </FooterLinkGroup>
                </div>
                <div>
                  <FooterTitle title="Legal" />
                  <FooterLinkGroup col>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                  </FooterLinkGroup>
                </div>
              </div>
            </div>
            <FooterDivider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <FooterCopyright href="#" by="MateriaIM" year={2024} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <FooterIcon href="#" icon={BsFacebook} />
                <FooterIcon href="#" icon={BsInstagram} />
                <FooterIcon href="#" icon={BsTwitter} />
                <FooterIcon href="#" icon={BsGithub} />
                <FooterIcon href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
      </CardBox>
    </div>
  );
};

export default SocialFooter;
