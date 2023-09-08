import PropTypes from 'prop-types';

const Nav = ({ clickLinkHandler }) => {
  return (
    <nav>
      <ul className="nav__links">
        <li onClick={clickLinkHandler}>
          <a href="#home">Home</a>
        </li>
        <li onClick={clickLinkHandler}>
          <a href="#about">About</a>
        </li>
        <li onClick={clickLinkHandler}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={clickLinkHandler}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  clickLinkHandler: PropTypes.func,
};

export default Nav;
