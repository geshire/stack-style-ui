import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, anchor }) => (
  <header id={anchor} >
    <h3 className="margin-vert-medium head-3 upper border-bottom padding-bottom-xsmall">{title}</h3>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
