import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">Copyright © {year} Coded By- Prakhar Gupta</div>
    </>
  );
};

export default Footer;
