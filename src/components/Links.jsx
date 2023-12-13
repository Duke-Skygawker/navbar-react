const Links = ({ links }) => {
  return (
    <div className="nav-links">
      {links.map((item) => {
        return (
          <a
            style={{ textTransform: "capitalize" }}
            key={item.id}
            href={item.url}
          >
            {item.text}
          </a>
        );
      })}
    </div>
  );
};
export default Links;
