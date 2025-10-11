
import React, { useContext } from "react";
import Google from "/src/assets/images/svgs/google-icon.svg";
import github from "/src/assets/images/svgs/github-icon.svg";

import { HRText } from "flowbite-react";

import { AuthContext } from "src/guards/auth/AuthContext";

interface MyAppProps {
  title?: string;
}

const SocialButtons: React.FC<MyAppProps> = ({ title }) => {
  const { loginWithProvider }: any = useContext(AuthContext);

  const handleGoogle = async () => {
    try {
      await loginWithProvider("google");
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  const handleGithub = async () => {
    try {
      await loginWithProvider("github");
    } catch (error) {
      console.error("GitHub login failed", error);
    }
  };

  return (
    <>
      <div className="flex justify-between gap-8 my-6 ">
        <div
          onClick={handleGoogle}
          className="px-4 py-2.5 border-border border dark:border-darkborder flex gap-2 items-enter w-full rounded-md text-center justify-center text-dark dark:text-white text-primary-ld cursor-pointer"
        >
          <img src={Google} alt="google" height={18} width={18} /> Google
        </div>
        <div
          onClick={handleGithub}
          className="px-4 py-2.5 border-border border dark:border-darkborder flex gap-2 items-enter w-full rounded-md text-center justify-center text-dark dark:text-white text-primary-ld cursor-pointer"
        >
          <img src={github} alt="google" height={18} width={18} />
          Github
        </div>
      </div>
      {/* Divider */}
      <HRText text={`${title}`} className="border-t! border-ld! bg-transparent!" />
    </>
  );
};

export default SocialButtons;
