import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";
import HeadingsCode from "./typography/Headings.html";
import TextCode from "./typography/Text.html";
import VariantsCode from "./typography/Variants.html";
import ColorsCode from "./typography/Colors.html";
import LineHeightCode from "./typography/LineHeight.html";
import TextIconsCode from "./typography/TextIcons.html";

const Typography = () => (
  <section id="view-typography" class="margin-bottom-xxlarge">
    <Header title="Typography" />

    <div>
      <SubHeader title="Headings" />
      <ul className="list-no-bullets">
        <li>
          <h3 className="head-1">Heading 1</h3>
        </li>
        <li>
          <h3 className="head-2">Heading 1</h3>
        </li>
        <li>
          <h3 className="head-3">Heading 1</h3>
        </li>
      </ul>
      <CodeBlock>{HeadingsCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Text" />
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
      <CodeBlock>{TextCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Text Variants" />
      <SectionNote>
        Text variant classes can be used on or within any <span className="weight-bold">Text</span> style.
      </SectionNote>

      <p className="text-2 weight-bold">Bold</p>
      <p className="text-2 weight-semi">Semibold</p>
      <p className="text-2 italic">Italic</p>
      <p className="text-2 upper">Uppercase</p>
      <CodeBlock>{VariantsCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Line spacing" />
      <SectionNote>
        Line spacing classes can be used on or within any <span className="weight-bold">Text</span> style.
      </SectionNote>

      <div style={{width: "300px"}}>
        <p className="text-2 margin-bottom-medium">Normal line spacing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-2 line-tight margin-bottom-medium">Tight line spacing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <CodeBlock>{LineHeightCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Font colors" />
      <SectionNote>
        Color classes can be used on both <span className="weight-bold">Heading</span> and <span className="weight-bold">Text</span> styles.
      </SectionNote>

      <div>
        <p className="text-2 color-black">Bold</p>
        <p className="text-2 color-charcoal">Charcoal</p>
        <p className="text-2 color-blue">Blue</p>
        <p className="text-2 color-gray">Gray</p>
        <p className="text-2 color-red">Red</p>
        <p className="text-2 color-green">Green</p>
      </div>

      <CodeBlock>{ColorsCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Text w/ Icons" />
      <SectionNote>
        Icon classes can be used on both <span className="weight-bold">Heading</span> and <span className="weight-bold">Text</span> styles.
      </SectionNote>

      <div>
        <ul class="list-no-bullets">
          <li>
            <p className="text-1 icon-left icon-arrow-left-blue">Text</p>
          </li>
          <li>
            <p className="text-1 icon-right icon-chevron-down">Text</p>
          </li>
        </ul>
      </div>

      <CodeBlock>{TextIconsCode}</CodeBlock>
    </div>
  </section>
);

export default Typography;
