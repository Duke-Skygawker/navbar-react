import { useRef, useState } from "react";
import { links, social } from "../data";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import Links from "./Links";
import Socials from "./Socials";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [linksHeight, setLinksHeight] = useState(0);
  const [linksMargin, setLinksMargin] = useState(0);

  const linksRef = useRef(null);

  const expandLinks = () => {
    const linksCont = linksRef.current.getBoundingClientRect();
    setLinksHeight(linksCont.x);
    setLinksMargin(linksCont.top * 2);
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="nav">
        <Logo />
        <div
          className="links-container"
          style={
            showLinks
              ? { height: `${linksHeight - linksMargin}px` }
              : { height: "0" }
          }
          ref={linksRef}
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
