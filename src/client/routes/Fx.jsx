import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";
import BackgroundsCode from "./fx/Backgrounds.html";
import BordersCode from "./fx/Borders.html";
import BorderWidthsCode from "./fx/BorderWidths.html";
import RadiusCode from "./fx/Radius.html";

const Fx = ({ config }) => (
  <section id="view-fx" class="margin-bottom-xxlarge">
    <Header title="Fx" />

    <div>
      <SubHeader title="Backgrounds" />
      <ul className="list-no-style row">
        {config.backgroundColors.map(bg => (
          <li className={`bg-${bg.name} padding-large margin-xsmall border-all`}>
            {bg.name}
          </li>
        ))}
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

      <div>
        <SubHeader title="Borders Colors" />
        <ul className="list-no-style row">
          {config.borderColors.map(border => (
            <li className={`border-${border.name} inline-block padding-medium border-all margin-medium`}>
              <span className="text--gray">{border.name}</span>
            </li>
          ))}
        </ul>
        <CodeBlock>
          {config.borderColors.map(border => (
            `<div class="border-all border-${border.name}">${border.name}</div>\n`
          ))}
        </CodeBlock>
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
