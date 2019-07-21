import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";
import BackgroundsCode from "./fx/Backgrounds.html";
import BordersCode from "./fx/Borders.html";

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
      <ul className="list-no-bullets">
        <li>
          <p className="text-1">Text 1</p>
        </li>
        <li>
          <p className="text-2">Text 2</p>
        </li>
        <li>
          <p className="text-3">Text 3</p>
        </li>
        <li>
          <p className="text-4">Text 4</p>
        </li>
      </ul>
      <CodeBlock>{BordersCode}</CodeBlock>
    </div>

  </section>
);

export default Fx;
