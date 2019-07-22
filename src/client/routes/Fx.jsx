import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";
import BackgroundsCode from "./fx/Backgrounds.html";
import BordersCode from "./fx/Borders.html";
import BorderWidthsCode from "./fx/BorderWidths.html";
import RadiusCode from "./fx/Radius.html";

const Fx = () => (
  <section id="view-fx" className="fill-width">
    <Header title="Fx" />

    <div>
      <SubHeader title="Backgrounds" />
      <ul className="list-no-bullets row">
        <li className="bg-blue-light padding-large margin-xsmall border-all">
          blue-light
        </li>
        <li className="bg-blue-mid padding-large margin-xsmall border-all">
          blue-mid
        </li>
        <li className="bg-green-light padding-large margin-xsmall border-all">
          green-light
        </li>
        <li className="bg-green-mid padding-large margin-xsmall border-all">
          green-mid
        </li>
        <li className="bg-red-light padding-large margin-xsmall border-all">
          red-light
        </li>
        <li className="bg-red-mid padding-large margin-xsmall border-all">
          red-mid
        </li>
        <li className="bg-white padding-large margin-xsmall border-all">
          white
        </li>
        <li className="bg-yellow-light padding-large margin-xsmall border-all">
          yellow-light
        </li>
        <li className="bg-yellow-mid padding-large margin-xsmall border-all">
          yellow-mid
        </li>
        <li className="bg-gray-light padding-large margin-xsmall border-all">
          gray-light
        </li>
        <li className="bg-gray-mid padding-large margin-xsmall border-all">
          gray-mid
        </li>
        <li className="bg-gray-dark padding-large margin-xsmall">
          gray-dark
        </li>
      </ul>
      <CodeBlock>{BackgroundsCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Borders" />
      <div>
        <span className="inline-block padding-medium border-all margin-medium">
          Border All
        </span>
        <span className="inline-block padding-medium border-vert margin-medium">
          Border Vert
        </span>
        <span className="inline-block padding-medium border-horz margin-medium">
          Border Horz
        </span>
        <span className="inline-block padding-medium border-top margin-medium">
          Border Top
        </span>
        <span className="inline-block padding-medium border-bottom margin-medium">
          Border Bottom
        </span>
        <span className="inline-block padding-medium border-left margin-medium">
          Border Left
        </span>
        <span className="inline-block padding-medium border-right margin-medium">
          Border Right
        </span>

        <CodeBlock>{BordersCode}</CodeBlock>
      </div>

      <div className="margin-vert-large">
        <span className="inline-block padding-medium border-all border-mid margin-medium">
          <span className="text--gray">
            <strong>Border Width Mid</strong>
          </span>
        </span>
        <span className="inline-block padding-medium border-all border-thick margin-medium">
          <span className="text--gray">
            <strong>Border Width Thick</strong>
          </span>
        </span>

        <CodeBlock>{BorderWidthsCode}</CodeBlock>
      </div>

      <div className="margin-vert-large">
        <span className="inline-block padding-medium border-all radius-xsmall margin-medium">
          3px Radius Xsmall
        </span>
        <span className="inline-block padding-medium border-all radius-small margin-medium">
          5px Radius Small
        </span>
        <span className="inline-block padding-medium border-all radius margin-medium">
          10px Radius Medium (Default)
        </span>

        <CodeBlock>{RadiusCode}</CodeBlock>
      </div>
    </div>

  </section>
);

export default Fx;
