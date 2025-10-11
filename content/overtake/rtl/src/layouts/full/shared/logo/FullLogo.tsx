

import { useContext } from "react";
import DarkLogo from "/src/assets/images/logos/dark-logo.svg";
import LightLogo from "/src/assets/images/logos/light-logo.svg";
import { Link } from "react-router";
import { CustomizerContext } from "src/context/CustomizerContext";
const FullLogo = () => {
  const {activeMode}  = useContext(CustomizerContext);
  return (
    <Link to={"/"}>
      {activeMode ==="light"?<img src={DarkLogo} alt="logo" className="block mx-auto" />:<img src={LightLogo} alt="logo" className="block mx-auto" />}
    </Link>
  );
};

export default FullLogo;
