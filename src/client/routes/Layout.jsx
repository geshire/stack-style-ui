import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import FlexRowsCode from "./layout/FlexRows.html";
import Display from "./layout/Display";
import Spacing from "./layout/Spacing";

const Layout = ({ config }) => (
  <section id="view-layout" class="margin-bottom-xxlarge">
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

    <div>
      <SubHeader title="Display"/>
      <div className="margin-bottom-large text-left">
        <span className="text-center padding-vert-large block bg-gray color-gray text-4 border-all">
          Block
        </span>

        {[...Array(3)].map(item => (
          <span className="margin-vert-small margin-right-xsmall padding-medium inline-block bg-gray color-gray text-4 border-all">
            Inline Block
          </span>
        ))}

        <div className="margin-vert-small">
          {[...Array(3)].map(item => (
            <div className="padding-medium inline bg-gray color-gray text-4 border-all">
              Inline
            </div>
          ))}
        </div>
      </div>
      <CodeBlock>{Display()}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Spacing / Padding" />
      <ul className="list-no-bullets">
        {config.spacingSizes.map(space => (
          <li className={`border-all inline-block padding-${space.name} margin-small bg-gray-light`}>
            <span className="color-gray">{space.name} {space.size}</span>
          </li>
        ))}
      </ul>
      <CodeBlock>{Spacing(config.spacingSizes, "padding")}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Spacing / Margin" />
      <ul className="list-no-bullets">
        {config.spacingSizes.map(space => (
          <li style={{
            borderStyle: "dotted",
            borderColor: "#f0f0f0",
            borderWidth: "2px"
          }} className="inline-block margin-small">
            <span className={`border-all inline-block padding-xsmall margin-${space.name} bg-gray-light`}>
              <span className="color-gray">{space.name} {space.size}</span>
            </span>
          </li>
        ))}
      </ul>

      <CodeBlock>{Spacing(config.spacingSizes, "margin")}</CodeBlock>
    </div>
  </section>
);

Layout.propTypes = {};

export default Layout;
