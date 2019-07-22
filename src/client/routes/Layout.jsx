import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import FlexRowsCode from "./layout/FlexRows.html";

const Layout = () => (
  <section id="view-layout" className="fill-width">
    <Header title="Layout" />

    <div>
      <SubHeader title="Flex Rows/Cols" />

      <div className="row width-100 text-center">
        {[...Array(16)].map(item => (
          <div className="col width-1-16">
            <span className="padding-vert-large block bg-gray color-gray text-3 border-all">1</span>
          </div>
        ))}
      </div>

      <div className="row width-100 text-center margin-vert-small">
        {[...Array(2)].map(item => (
          <div className="col width-1-2">
            <span className="padding-vert-large block bg-gray color-gray text-3 border-all">1</span>
          </div>
        ))}
      </div>

      <div className="row width-100 text-center margin-vert-small">
        {[...Array(3)].map(item => (
          <div className="col width-1-3">
            <span className="padding-vert-large block bg-gray color-gray text-3 border-all">1</span>
          </div>
        ))}
      </div>

      <CodeBlock>{FlexRowsCode}</CodeBlock>
    </div>
  </section>
);

Layout.propTypes = {};

export default Layout;
