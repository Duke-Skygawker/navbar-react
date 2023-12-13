import { useState } from "react";
import { links, social } from "../data";
import Logo from "./Logo";
import Links from "./Links";
import Socials from "./Socials";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav">
        <Logo />
        <div className="links-container">
          <Links links={links} />
          <Socials socials={social} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
