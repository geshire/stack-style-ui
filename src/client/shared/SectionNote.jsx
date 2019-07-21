import React from "react";
import PropTypes from "prop-types";

const SectionNote = props => (
  <p className="color-gray-dark italic margin-bottom-medium">{props.children}</p>
);

SectionNote.propTypes = {
  desc: PropTypes.string,
};

export default SectionNote;
