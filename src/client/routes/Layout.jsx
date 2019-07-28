import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import FlexRowsCode from "./layout/FlexRows.html";
import Lists from "./layout/Lists.js";
import Display from "./layout/Display";
import Spacing from "./layout/Spacing";

const Layout = ({ config }) => (
  <section id="view-layout" class="margin-bottom-xxlarge">
    <Header anchor="layout" title="Layout" />

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
      <ul className="list-no-style">
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
      <ul className="list-no-style">
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

    <div>
      <SubHeader title="Lists" />
      <div className="margin-vert-large">
        <ul className="list-no-style">
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </div>
      <CodeBlock>{Lists("list-no-style")}</CodeBlock>

      <div className="margin-vert-large">
        <ul className="list-no-style list-striped">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
      <CodeBlock>{Lists("list-no-style list-striped")}</CodeBlock>

      <div className="margin-vert-large">
        <ul className="list-no-style list-inline">
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </div>
      <CodeBlock>{Lists("list-no-style list-inline")}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Layout Utilities" />
      <table className="text-2 table-striped">
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>border-box</code></td>
          <td className="border-bottom padding-small">Sets the element to use border-box sizing (as opposed to the default content-box)</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>absolute</code></td>
          <td className="border-bottom padding-small">Sets the element's postion to "absolute"</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>relative</code></td>
          <td className="border-bottom padding-small">Sets the element's postion to "relative"</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>fixed</code></td>
          <td className="border-bottom padding-small">Sets the element's postion to "fixed"</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>top</code></td>
          <td className="border-bottom padding-small">Sets the element's top position to "0px"</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>bottom</code></td>
          <td className="border-bottom padding-small">Sets the element's bottom position to "0px"</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>left</code></td>
          <td className="border-bottom padding-small">Sets the element's left position to "0px"</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>right</code></td>
          <td className="border-bottom padding-small">Sets the element's right position to "0px"</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>auto</code></td>
          <td className="border-bottom padding-small">Sets the left and right margin of the element to "auto"</td>
        </tr>
      </table>
    </div>
  </section>
);

Layout.propTypes = {};

export default Layout;
