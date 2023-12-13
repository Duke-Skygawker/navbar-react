const Links = ({ links }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        return (
          <a key={link.id} href={link.url}>
            {link.text}
          </a>
        );
      })}
    </div>
  );
};
export default Links;
