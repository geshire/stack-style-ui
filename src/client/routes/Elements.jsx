import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";
import ButtonsCode from "./elements/Buttons.html";
import ButtonSizesCode from "./elements/ButtonSizes.html";
import ButtonIconsCode from "./elements/ButtonIcons.html";

const Elements = () => (
  <section id="view-elements" class="margin-bottom-xxlarge">
    <Header title="Elements" />

    <div>
      <SubHeader title="Buttons" />
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
      <SubHeader title="Buttons w/ Icons" />
      <SectionNote>
        Button Icon classes can be used on any <span className="weight-bold">Button</span> style.
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
  </section>
);

Elements.propTypes = {};

export default Elements;
