import Hamburger from 'hamburger-react';
import '../common/styles/styles.css';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
      <NavItem>
        <DropdownMenu></DropdownMenu>
      </NavItem>
  );
}


function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a className="icon-button" onClick={() => setOpen(!open)}>
      <Hamburger toggle={setOpen} toggled={open} />
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem><Link to="productandfeature" spy={true} smooth={true} offset={50} duration={500}>Our Products</Link></DropdownItem>
          <DropdownItem><Link to="pricingplan" spy={true} smooth={true} offset={50} duration={500}>Pricing plan</Link></DropdownItem>
          <DropdownItem>FAQ</DropdownItem>
          <DropdownItem><Link to="contactt" spy={true} smooth={true} offset={50} duration={500} >Contact Us</Link></DropdownItem>
          <DropdownItem>Our Products</DropdownItem>

        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
