import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <header>
    <h3 className="margin-vert-medium text-1 upper weight-bold border-bottom padding-bottom-xsmall">{title}</h3>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
