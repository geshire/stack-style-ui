import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";

const Utils = () => (
  <section id="view-responsive" class="margin-bottom-xxlarge">
    <Header anchor="responsive" title="Responsive" />
    <SectionNote>
      Responsive class pre-fixes allow one to change the applied styling depending
      on the screen size. Pre-fixes can be applied to most
      <span class="weight-bold"> Typography</span>,
      <span class="weight-bold"> Layout</span>,
      and <span class="weight-bold"> Utility</span> classes. If two classes are
      applied the most relevant class will override the other
      (i.e. on a large screen <span className="italic">large-up-</span> would override <span className="italic">small-up-</span>).
    </SectionNote>
    <div>
      <SubHeader title="Media Size Pre-fixes" />
      <table className="text-2 table-striped">
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>xsmall-only-</code></td>
          <td className="border-bottom padding-small">Applies to only screen sizes between <span className="weight-bold">0px and 480px</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>small-up-</code></td>
          <td className="border-bottom padding-small">Applies to screen sizes <span className="weight-bold">481px or larger</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>small-only-</code></td>
          <td className="border-bottom padding-small">Applies to only screen sizes between <span className="weight-bold">481px and 640px</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>small-down-</code></td>
          <td className="border-bottom padding-small">Applies to screen sizes <span className="weight-bold">640px or smaller</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>medium-up-</code></td>
          <td className="border-bottom padding-small">Applies to screen sizes <span className="weight-bold">641px or larger</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>medium-only-</code></td>
          <td className="border-bottom padding-small">Applies to only screen sizes between <span className="weight-bold">641px and 768px</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>medium-down-</code></td>
          <td className="border-bottom padding-small">Applies to screen sizes <span className="weight-bold">768px or smaller</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>large-up-</code></td>
          <td className="border-bottom padding-small">Applies to screen sizes <span className="weight-bold">769px or larger</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>large-only-</code></td>
          <td className="border-bottom padding-small">Applies to only screen sizes between <span className="weight-bold">769px and 1024px</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>large-down-</code></td>
          <td className="border-bottom padding-small">Applies to screen sizes <span className="weight-bold">1024px or smaller</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>xlarge-up-</code></td>
          <td className="border-bottom padding-small">Applies to screen sizes <span className="weight-bold">1025px or larger</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>xlarge-only-</code></td>
          <td className="border-bottom padding-small">Applies to only screen sizes between <span className="weight-bold">1025px and 1200px</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>xlarge-down-</code></td>
          <td className="border-bottom padding-small">Applies to screen sizes <span className="weight-bold">1200px or smaller</span></td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>xxlarge-up-</code></td>
          <td className="border-bottom padding-small">Applies to screen sizes <span className="weight-bold">1201px or larger</span></td>
        </tr>
      </table>
    </div>
  </section>
);

export default Utils;
