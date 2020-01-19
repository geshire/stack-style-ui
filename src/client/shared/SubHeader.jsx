import React from "react";
import PropTypes from "prop-types";

const SubHeader = ({ title, isTop }) => (
  <header className={isTop ? "" : "margin-top-xlarge"}>
    <h3 className="margin-vert-medium text-1 upper inline-block border-bottom">{title}</h3>
  </header>
);

SubHeader.propTypes = {
  title: PropTypes.string,
};

export default SubHeader;
