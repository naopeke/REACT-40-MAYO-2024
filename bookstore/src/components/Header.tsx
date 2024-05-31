import "./Header.module.css";
import Menu from './Menu';
import Greet from '../components/Greet'


function Header() {
  console.log("Header works");


  return (
    <header className="header w-full fixed top-0">      
      <Menu />
      <Greet />
    </header>
  );
}

export default Header;
