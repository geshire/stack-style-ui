import React from 'react';
import PropTypes from 'prop-types';
import Highlight from "react-highlight";

const CodeBlock = props => (
  <div className="code-block">
    <Highlight className="html">{props.children}</Highlight>
  </div>
);

CodeBlock.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CodeBlock;
