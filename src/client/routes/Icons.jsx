import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";
import IconsCode from "./icons/Icons.html";
import IconColorsCode from "./icons/IconColors.html";
import IconSizesCode from "./icons/IconSizes.html";

const Icons = ({ config, list }) => (
  <section id="view-icons" class="margin-bottom-xxlarge">
    <Header anchor="icons" title="Icons" />

    <div>
      <SubHeader isTop title="Available Icons" />
      <SectionNote>
        Labels are the html class for each icon.
      </SectionNote>

      <ul className="list-no-style row">
      {list.map(icon => (
        <li className="border-all border-gray-light padding-medium text-center margin-xsmall">
          <i className={icon}></i>
          <p class="text-4 margin-top-xxsmall">{icon}</p>
        </li>
      ))}
      </ul>
      <CodeBlock>{IconsCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Icons Sizes" />
      <SectionNote>
        Icon size classes can be used on any <span className="weight-bold">Icon</span> style.
      </SectionNote>

      <ul className="list-no-style row">
        <li className="border-all border-gray-light padding-medium text-center margin-xsmall">
          <i className="icon-search"></i>
          <p class="text-4 margin-top-xxsmall">default</p>
        </li>
        {config.sizes.map(size => {
          if (size.name != "default") {
            return (
              <li className="border-all border-gray-light padding-medium text-center margin-xsmall">
                <i className={`icon-search icon-${size.name}`}></i>
                <p class="text-4 margin-top-xxsmall">{size.name}</p>
              </li>
            )
          }
        })}
      </ul>
      <CodeBlock>{IconSizesCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Icons Colors" />
      <SectionNote>
        Icon color classes can be used on any <span className="weight-bold">Icon</span> style.
      </SectionNote>

      <ul className="list-no-style row">
        <li className="border-all border-gray-light padding-medium text-center margin-xsmall">
          <i className="icon-x"></i>
          <p class="text-4 margin-top-xxsmall">default</p>
        </li>
        {config.colors.map(color => (
          <li className="border-all border-gray-light padding-medium text-center margin-xsmall">
            <i className={`icon-x-${color.name}`}></i>
            <p class="text-4 margin-top-xxsmall">{color.name}</p>
          </li>
        ))}
      </ul>
      <CodeBlock>{IconColorsCode}</CodeBlock>
    </div>
  </section>
);

Icons.propTypes = {
};

export default Icons;
