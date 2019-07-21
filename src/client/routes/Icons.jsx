import React from "react";
import Header from "shared/Header";

const GuideFx = () => (
  <div id="view-icons" className="fill-width row">
    <Header title="Icons" />
    <IconsGuide />
    <SymbolsGuide />
  </div>
);

GuideFx.propTypes = {
};

export default GuideFx;
