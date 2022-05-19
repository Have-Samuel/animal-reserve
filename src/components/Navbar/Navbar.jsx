import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = ({ title, back }) => (
  <nav className="nav">
    {back ? (
      <NavLink to="/">
        <IoIosArrowBack
          className="back"
        />
      </NavLink>
    ) : <img className="nav-icons" src="./images/Pearl.png" alt="animal" />}
    <h2 className="nav-title">{title}</h2>
    <div className="nav-search">
      <img className="nav-icons mic" src="./images/mic.png" alt="mic" />
      <img className="nav-icons" src="./images/settings-cog.png" alt="mic" />
    </div>
  </nav>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

Navbar.defaultProps = {
  back: false,
};

export default Navbar;
