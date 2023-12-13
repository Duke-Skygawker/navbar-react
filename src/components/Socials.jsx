const Socials = ({ socials }) => {
  return (
    <div className="socials">
      {socials.map((link) => {
        return (
          <a key={link.id} href={link.url}>
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};
export default Socials;
