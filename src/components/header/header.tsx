import logo from "./logo.svg"
import "./header.css"

interface MenuItem {
  title: string;
}

interface HeaderProps {
  menu: MenuItem[];
}

function Header(props: HeaderProps) {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Home Cooks"/>
      </div>
      <div className="header__wrapper">
        {props.menu.map(
          (item) => <button className="header__button">{item.title}</button>
        )}
      </div>
    </header>
  );
}

export default Header