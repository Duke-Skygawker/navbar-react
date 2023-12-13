import { useState } from "react";
import { links, social } from "../data";
import Logo from "./Logo";
import Links from "./Links";
import Socials from "./Socials";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <Logo />
      <div className="links-container">
        <Links links={links} />
        <Socials socials={social} />
      </div>
    </nav>
  );
};
export default Navbar;
