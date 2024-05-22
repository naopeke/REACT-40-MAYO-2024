import "./Header.module.css";
import Menu from './Menu';
import styles from './BookItem.module.css';

// import Logo from './Logo';


function Header() {
  console.log("Header works");

  return (
    <header className={`header w-full fixed top-0 ${styles.header}`}>      
    {/* <Logo /> */}
      <Menu />
    </header>
  );
}

export default Header;
