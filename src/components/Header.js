import React from "react";
import Logo from "../images/logo-allocine.png";

const Header = props => {
  return (
    <header>
      <div className="wrapper">
        <img src={Logo} alt="" width="200" />
      </div>
    </header>
  );
};
export default Header;
