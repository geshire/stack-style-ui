import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";
import ButtonsCode from "./elements/Buttons.html";
import ButtonGroupCode from "./elements/ButtonGroup.html";
import ButtonSizesCode from "./elements/ButtonSizes.html";
import ButtonIconsCode from "./elements/ButtonIcons.html";
import LoaderStylesCode from "./elements/LoaderStyles.html";
import LoaderSizesCode from "./elements/LoaderSizes.html";

const Elements = () => (
  <section id="view-elements" class="margin-bottom-xxlarge">
    <Header anchor="elements" title="Elements" />

    <div>
      <SubHeader isTop title="Buttons" />
      <ul className="list-no-style row">
        <li className="margin-xsmall">
          <button className="btn-blue margin-bottom-small block">Button</button>
        </li>
        <li className="margin-xsmall">
          <button className="btn-white margin-bottom-small block">Button</button>
        </li>
        <li className="margin-xsmall">
          <button className="btn-blue-outline margin-bottom-small block">Button</button>
        </li>
        <li className="margin-xsmall">
          <button className="btn-green margin-bottom-small block">Button</button>
        </li>
        <li className="margin-xsmall">
          <button className="btn-navy margin-bottom-small block">Button</button>
        </li>
      </ul>
      <CodeBlock>{ButtonsCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Button Sizes" />
      <SectionNote>
        Button size classes can be used on any <span className="weight-bold">Button</span> style.
      </SectionNote>
      <ul className="list-no-style row">
        <li className="margin-xsmall">
          <button className="btn-blue btn-small margin-bottom-small block">Small</button>
        </li>
        <li className="margin-xsmall">
          <button className="btn-blue btn-medium margin-bottom-small block">Medium</button>
        </li>
        <li className="margin-xsmall">
          <button className="btn-blue btn-large margin-bottom-small block">Large</button>
        </li>
      </ul>
      <CodeBlock>{ButtonSizesCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Button Groups" />
      <SectionNote>
        Buttons can be grouped to great tabs or radio buttons.
      </SectionNote>
      <div className="btn-group">
        <button className="btn-white">Button</button>
        <button className="btn-white">Button</button>
        <button className="btn-white selected">Button</button>
      </div>
      <CodeBlock>{ButtonGroupCode}</CodeBlock>
    </div>


    <div>
      <SubHeader title="Buttons w/ Icons" />
      <SectionNote>
        Button Icon classes can be used on any <span className="weight-bold">Button</span> style. For proper alignment a size (e.g. <span className="italic">btn-small</span>, etc) class is required. See the <a href="#icons">Icons Section</a> for available icons.
      </SectionNote>

      <ul className="list-no-style row">
        <li className="margin-xsmall">
          <button className="btn-blue btn-medium icon-arrow-left-white icon-left margin-bottom-small block">Button</button>
        </li>
        <li className="margin-xsmall">
          <button className="btn-blue btn-medium icon-arrow-right-white icon-right margin-bottom-small block">Button</button>
        </li>
        <li className="margin-xsmall">
          <button className="btn-blue btn-medium icon-chevron-right-white icon-center margin-bottom-small block">Button</button>
        </li>
      </ul>
      <CodeBlock>{ButtonIconsCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Loader Styles" />

      <ul className="list-no-style row">
        <li className="margin-xsmall">
          <div className="loader-bars"></div>
        </li>
      </ul>
      <CodeBlock>{LoaderStylesCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Loader Sizes" />

      <ul className="list-no-style">
        <li className="margin-xsmall">
          <div className="loader-bars loader-small"></div>
        </li>
        <li className="margin-xsmall">
          <div className="loader-bars loader-large"></div>
        </li>
      </ul>
      <CodeBlock>{LoaderSizesCode}</CodeBlock>
    </div>
  </section>
);

Elements.propTypes = {};

export default Elements;
