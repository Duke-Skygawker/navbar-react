import { useState } from "react";
import { links, social } from "../data";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import Links from "./Links";
import Socials from "./Socials";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const expandLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="nav">
        <Logo />
        <div
          className={
            showLinks ? "links-container display-flex" : "links-container"
          }
          style={showLinks ? { height: "15rem" } : { height: "0" }}
        >
          <Links links={links} />
          <Socials socials={social} />
        </div>
        <button
          className={showLinks ? "btn toggler deg90" : "btn toggler"}
          onClick={expandLinks}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
