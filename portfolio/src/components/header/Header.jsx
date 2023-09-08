import { useState } from 'react';
import Nav from '../nav/Nav';
import PropTypes from 'prop-types';

const Header = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const clickLinkHandler = () => {
    setIsOpen(!isOpen);
  };

  return isMobile ? (
    isOpen ? (
      <header>
        <div className="menu-open">
          <a className="close-icon" onClick={onClickHandler}>
            <p className="sr-only">Close</p>
            <i className="fa-solid fa-x"></i>
          </a>
          <Nav clickLinkHandler={clickLinkHandler} />
        </div>
      </header>
    ) : (
      <header>
        <a href="#contact" className="logo">
          <img src="../src/assets/images/logo.png" alt="logo"></img>
        </a>
        <div className="hamburger-menu" onClick={onClickHandler}>
          <a className="hamburger-icon">
            <p className="sr-only">Menu</p>
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
      </header>
    )
  ) : (
    <header>
      <a href="#contact" className="logo">
        <img src="../src/assets/images/logo.png" alt="logo"></img>
      </a>
      <Nav />
    </header>
  );
};

Header.propTypes = {
  isMobile: PropTypes.bool,
};

export default Header;
