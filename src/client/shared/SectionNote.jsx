import React from "react";
import PropTypes from "prop-types";

const SectionNote = props => (
  <p className="bg-yellow-light padding-vert-xxsmall padding-horz-small color-gray-dark italic margin-bottom-medium text-2">{props.children}</p>
);

SectionNote.propTypes = {
  desc: PropTypes.string,
};

export default SectionNote;
