import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";
import RadioFieldsCode from "./forms/RadioFields.html";
import SelectFieldsCode from "./forms/SelectFields.html";
import Checkboxes from "./forms/Checkboxes";
import InputFieldStylesCode from "./forms/InputFieldStyles.html";
import InputFieldSizesCode from "./forms/InputFieldSizes.html";
import InputFieldIconsCode from "./forms/InputFieldIcons.html";

const Forms = ({ config }) => (
  <section id="view-fx" class="margin-bottom-xxlarge">
    <Header anchor="forms" title="Forms" />

    <div>
      <SubHeader title="Input Field Styles" />
      <form className="form">
        <ul className="list-no-style">
          {config.inputStyles.map(inputStyle => {
            if (inputStyle.name != "default") {
             return (
               <li className="margin-xsmall">
                 <input type="text" className={`input-${inputStyle.name}`} placeholder="Enter..." />
               </li>
             );
            }
          })}
        </ul>
      </form>
      <CodeBlock>{InputFieldStylesCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Input Field Sizes" />
      <form className="form">
        <ul className="list-no-style">
        {config.inputSizes.map(inputSize => {
          if (inputSize.name != "default") {
           return (
             <li className="margin-xsmall">
               <input type="text" className={`input-${config.inputStyles[1].name} input-${inputSize.name}`} placeholder="Enter..." />
             </li>
           );
         }
        })}
        </ul>
      </form>
      <CodeBlock>{InputFieldSizesCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Input Fields w/ Icons" />
      <SectionNote>
        Input Icon classes can be used on any <span className="weight-bold">Input</span> style or size.
      </SectionNote>
      <form className="form">
        <ul className="list-no-style">
           <li className="margin-xsmall">
             <input type="text" className={`input-${config.inputStyles[1].name} icon-search-charcoal icon-right`} placeholder="Enter..." />
           </li>
           <li className="margin-xsmall">
             <input type="text" className={`input-${config.inputStyles[1].name} icon-search-charcoal icon-left`} placeholder="Enter..." />
           </li>
        </ul>
      </form>
      <CodeBlock>{InputFieldIconsCode}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Checkbox Styles" />
      <ul className="list-no-style">
        {config.checkboxStyles.map((checkbox, index) => (
          <li>
             <fieldset className={`checkbox ${checkbox.name !== "default" ? `checkbox-${checkbox.name}` : ""}`}>
               <input type="checkbox" name={`style-${index}`} id={`style-${index}`} />
               <label htmlFor={`style-${index}`}>
                 <span className="checkbox-icon">
                   <i className="icon-checkmark-white"></i>
                 </span>
                 <span className="checkbox-label">
                   Label
                 </span>
               </label>
             </fieldset>
          </li>
         ))}
      </ul>
      <CodeBlock>{Checkboxes(config.checkboxStyles)}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Checkbox Sizes" />
      <ul className="list-no-style">
        {config.checkboxSizes.map((checkbox, index) => (
          <li>
             <fieldset className={`checkbox ${checkbox.name !== "default" ? `checkbox-${checkbox.name}` : ""}`}>
               <input type="checkbox" name={`size-${index}`} id={`size-${index}`} />
               <label htmlFor={`size-${index}`}>
                 <span className="checkbox-icon">
                   <i className="icon-checkmark-white"></i>
                 </span>
                 <span className="checkbox-label">
                   Label
                 </span>
               </label>
             </fieldset>
          </li>
         ))}
      </ul>
      <CodeBlock>{Checkboxes(config.checkboxSizes)}</CodeBlock>
    </div>

    <div>
      <SubHeader title="Select Fields" />
      <fieldset className="margin-bottom-medium">
        <select className="btn-white btn-medium icon-right icon-triangle-down">
          <option selected disabled>Select</option>
          <option>A</option>
          <option>B</option>
        </select>
      </fieldset>
      <fieldset>
        <select className="text-2 icon-right icon-triangle-down">
          <option selected disabled>Select</option>
          <option>A</option>
          <option>B</option>
        </select>
      </fieldset>
      <CodeBlock>{SelectFieldsCode}</CodeBlock>
    </div>

  </section>
);

export default Forms;
