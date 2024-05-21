import "./Header.css";
import Menu from './Menu';


function Header() {
  console.log("Header works");

  return (
    <header className="header w-full fixed top-0">
      <Menu />
    </header>
  );
}

export default Header;
