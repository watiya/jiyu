import { Link } from "react-router";
import CardBox from "src/components/shared/CardBox";
import Logo from "src/layouts/full/shared/logo/Logo";
import AuthRegister from "../authforms/AuthRegister";
import SocialButtons from "../authforms/SocialButtons";


const Register = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-muted dark:bg-dark">
        <div className="flex h-full justify-center items-center px-4">
          <CardBox className="md:w-[450px] w-full border-none">
            <div className="mx-auto">
              <Logo />
            </div>
            <SocialButtons title="or sign up with" />
            <AuthRegister />
            <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-start">
                  <p>Already have an Account?</p>
                  <Link
                    to={"/auth/auth2/login"}
                    className="text-primary text-sm font-medium"
                  >
                    Sign in
                  </Link>
                </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Register;
