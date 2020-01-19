import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";
import FlexRowsCode from "./layout/FlexRows.html";
import FlexAlignmentHorzCode from "./layout/FlexAlignmentHorz.html";
import FlexAlignmentVertCode from "./layout/FlexAlignmentVert.html";
import FlexWrapCode from "./layout/FlexWrap.html";
import FlexNoWrapCode from "./layout/FlexNoWrap.html";
import Lists from "./layout/Lists.js";
import Display from "./layout/Display";
import Spacing from "./layout/Spacing";

const Layout = ({ config }) => (
  <section id="view-layout" class="margin-bottom-xxlarge">
    <Header anchor="layout" title="Layout" />

    <div>
      <SubHeader isTop title="Flexbox Rows & Columns" />
      <SectionNote>
        Simple grid systems with rows and columns can be created with a few classes. Width classes (shown below in the table) can be used both within a row or independently.
      </SectionNote>

      <div className="row width-100 text-center">
        {[...Array(4)].map((item, index) => (
          <div className="col width-1-16">
            <span className="padding-vert-large block bg-gray color-gray text-3 border-all">{index+1}</span>
          </div>
        ))}
        <div className="col width-5-16">
          <span className="padding-vert-large block bg-gray color-gray text-3 border-all">5</span>
        </div>
        <div className="col width-7-16">
          <span className="padding-vert-large block bg-gray color-gray text-3 border-all">7</span>
        </div>
      </div>

      <div className="row width-100 text-center margin-vert-small">
        {[...Array(2)].map((item, index) => (
          <div className="col width-1-2">
            <span className="padding-vert-large block bg-gray color-gray text-3 border-all">{index++}</span>
          </div>
        ))}
      </div>

      <div className="row width-100 text-center margin-vert-small">
        {[...Array(3)].map((item, index) => (
          <div className="col width-1-3">
            <span className="padding-vert-large block bg-gray color-gray text-3 border-all">{index++}</span>
          </div>
        ))}
      </div>

      <CodeBlock>{FlexRowsCode}</CodeBlock>

      <SubHeader title="Width Classes" />
      <table className="text-2 table-striped">
        <tr>
          <td className="border-bottom padding-small">Halves</td>
          <td className="border-bottom padding-small weight-semi border-right">
            <code>width-1-2</code>
          </td>
        </tr>
        <tr>
          <td className="border-bottom padding-small">Thirds</td>
          <td className="border-bottom padding-small weight-semi border-right">
            <code>width-1-3</code><br />
            <code>width-2-3</code>
          </td>
        </tr>
        <tr>
          <td className="border-bottom padding-small">Quarters</td>
          <td className="border-bottom padding-small weight-semi border-right">
            <code>width-1-4</code><br />
            <code>width-2-4</code><br />
            <code>width-3-4</code>
          </td>
        </tr>
        <tr>
          <td className="border-bottom padding-small">Fifths</td>
          <td className="border-bottom padding-small weight-semi border-right">
            <code>width-1-5</code><br />
            <code>width-2-5</code><br />
            <code>width-3-5</code><br />
            <code>width-4-5</code>
          </td>
        </tr>
        <tr>
          <td className="border-bottom padding-small">Sixteenths</td>
          <td className="border-bottom padding-small weight-semi border-right">
            <code>width-1-16</code><br />
            <code>width-2-16</code><br />
            <code>width-3-16</code><br />
            <code>width-4-16</code><br />
            <code>width-5-16</code><br />
            <code>width-6-16</code><br />
            <code>width-7-16</code><br />
            <code>width-8-16</code><br />
            <code>width-9-16</code><br />
            <code>width-10-16</code><br />
            <code>width-11-16</code><br />
            <code>width-12-16</code><br />
            <code>width-13-16</code><br />
            <code>width-14-16</code><br />
            <code>width-15-16</code>
          </td>
        </tr>
      </table>
    </div>

    <div>
      <SubHeader title="Flexbox Vertical Alignment" />
      <SectionNote>
        Align child elements vertically using vertical alignment classes.
      </SectionNote>
      <div
        className="row vert-align-top padding-small border-all border-gray-light margin-bottom-large"
        style={{ height: "100px"}}
      >
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Top</div>
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Top</div>
      </div>

      <div
        className="row vert-align-middle padding-small border-all border-gray-light margin-bottom-large"
        style={{ height: "100px"}}
      >
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Middle</div>
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Middle</div>
      </div>

      <div
        className="row vert-align-bottom padding-small border-all border-gray-light margin-bottom-large"
        style={{ height: "100px"}}
      >
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Bottom</div>
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Bottom</div>
      </div>

      <CodeBlock>{FlexAlignmentVertCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Flexbox Horizontal Alignment" />
      <SectionNote>
        Align child elements horizontally using horizontal alignment classes.
      </SectionNote>
      <div
        className="row horz-align-left padding-small border-all border-gray-light margin-bottom-large"
      >
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Left</div>
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Left</div>
      </div>

      <div
        className="row horz-align-center padding-small border-all border-gray-light margin-bottom-large"
      >
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Center</div>
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Center</div>
      </div>

      <div
        className="row horz-align-right padding-small border-all border-gray-light margin-bottom-large"
      >
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Right</div>
        <div className="bg-blue-light padding-xsmall margin-xxsmall">Right</div>
      </div>
      <CodeBlock>{FlexAlignmentHorzCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Flexbox Column Wrapping" />
      <SectionNote>
        By default columns in a row will wrap to the next row. This makes building flexible grid layouts simple and straight forward.
      </SectionNote>

      <div className="row padding-small border-all border-gray-light margin-bottom-large">
        <div className="col width-1-3 padding-xxsmall">
          <div className="bg-blue-light padding-xsmall">1/3</div>
        </div>
        <div className="col width-1-3 padding-xxsmall">
          <div className="bg-blue-light padding-xsmall">1/3</div>
        </div>
        <div className="col width-1-3 padding-xxsmall">
          <div className="bg-blue-light padding-xsmall">1/3</div>
        </div>
        <div className="col width-3-5 padding-xxsmall">
          <div className="bg-blue-light padding-xsmall">3/5</div>
        </div>
        <div className="col width-2-5 padding-xxsmall">
          <div className="bg-blue-light padding-xsmall">2/5</div>
        </div>
      </div>
      <CodeBlock>{FlexWrapCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Flexbox Column w/o Wrapping" />
      <SectionNote>
        To prevent wrapping, in particular when dealing with columns without defined widths and with text, the <span class="bold">nowrap</span> class can be applied.
      </SectionNote>
      <div className="row nowrap padding-small border-all border-gray-light margin-bottom-large">
        <div className="col padding-xsmall margin-xxsmall text-center">
          <h3 className="text-1 weight-bold">Column 1</h3>
          <img width="100" src="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fbundles%2Fclasscentralsite%2Fimages%2Ficon-cs.png?auto=format&ixlib=php-3.1.0&s=697ac7bd36dd6d6981e295d633ec39c8" />
        </div>
        <div className="col padding-xsmall margin-xxsmall">
          <h3 className="text-1 weight-bold">Column 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <CodeBlock>{FlexNoWrapCode}</CodeBlock>

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
      <SectionNote>
        The space within an element that pushes any containing content inward.
      </SectionNote>
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
      <SectionNote>
        The space around an element that pushes away any surrounding content.
      </SectionNote>

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
      <div className="margin-bottom-xlarge">
        <SectionNote>
          Remove the default browser styling for a list with the <span className="italic">list-no-style</span> class.
        </SectionNote>
        <div className="margin-vert-medium">
          <ul className="list-no-style">
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
        </div>
        <CodeBlock>{Lists("list-no-style")}</CodeBlock>
      </div>

      <div className="margin-bottom-xlarge">
        <SectionNote>
          Give list rows alternating backgrounds with the <span className="italic">list-striped</span> class.
        </SectionNote>
        <div className="margin-vert-medium">
          <ul className="list-no-style list-striped">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
        <CodeBlock>{Lists("list-no-style list-striped")}</CodeBlock>
      </div>

      <div className="margin-bottom-xlarge">
        <SectionNote>
          Align list items side by side with the <span className="italic">list-inline</span> class.
        </SectionNote>
        <div className="margin-vert-medium">
          <ul className="list-no-style list-inline">
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
        </div>
        <CodeBlock>{Lists("list-no-style list-inline")}</CodeBlock>
      </div>
    </div>

    <div>
      <SubHeader title="Layout Utilities" />
      <table className="text-2 table-striped">
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>width-page</code></td>
          <td className="border-bottom padding-small">Sets a containing element to have a maximum width of 1300px and horizontal padding that decreases for smaller screen sizes.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>width-centered</code></td>
          <td className="border-bottom padding-small">Centers a container that has a defined width.</td>
        </tr>
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
