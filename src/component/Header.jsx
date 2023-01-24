import React from "react";
import "../style.css";
import Logo from "../images/keep-logo.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="logo" height="70px" width="70px" />
        <h2>Notion</h2>
        <div className="profile">
        <a href="https://www.linkedin.com/in/prakhar-gupta-4a8331244">
          <LinkedInIcon  className="profile"/>
        </a>{" "}
        <a href="https://github.com/PrakharGupta658">
          <GitHubIcon className="profile"/>
        </a>
      </div>
      </div>
    </>
  );
};

export default Header;
