import { Link } from "react-router";
import CardBox from "src/components/shared/CardBox";
import Logo from "src/layouts/full/shared/logo/Logo";
import AuthLogin from "../authforms/AuthLogin";
import SocialButtons from "../authforms/SocialButtons";

const Login = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-muted dark:bg-dark">
        <div className="flex h-full justify-center items-center px-4">
          <CardBox className="md:w-[450px] w-full border-none">
            <div className="mx-auto">
              <Logo />
            </div>
            <SocialButtons title="or sign in with" />
            <AuthLogin />
            <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
              <p>New to MaterialM?</p>
              <Link
                to={"/auth/auth2/register"}
                className="text-primary text-sm font-medium"
              >
                Create an account
              </Link>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Login;
