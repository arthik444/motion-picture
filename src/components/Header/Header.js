import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
       Motion Picture
    </span>
  );
};

export default Header;
