import React from "react";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import CodeBlock from "shared/CodeBlock";
import SectionNote from "shared/SectionNote";

const Utils = () => (
  <section id="view-utils" class="margin-bottom-xxlarge">
    <Header anchor="utils" title="Utility Classes" />

    <div>
      <SubHeader title="Display & Visibility/Transparency" />
      <table className="text-2 table-striped">
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>border-box</code></td>
          <td className="border-bottom padding-small">Sets the element to use border-box sizing (as opposed to the default content-box)</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>off-page</code></td>
          <td className="border-bottom padding-small">Positions an element absolutely off the page (outside the viewport)</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>invisible</code></td>
          <td className="border-bottom padding-small">Sets an element to be invisible with no pointer events. However, its placement on the page remains intact.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>hidden</code></td>
          <td className="border-bottom padding-small">Sets an elements display to none, so it and its position are completely hidden/removed.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>transparent-low</code></td>
          <td className="border-bottom padding-small">Gives an element 80% transparency.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>transparent-mid</code></td>
          <td className="border-bottom padding-small">Gives an element 50% transparency.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>transparent-high</code></td>
          <td className="border-bottom padding-small">Gives an element 30% transparency.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>hover-transparent</code>-low</td>
          <td className="border-bottom padding-small">Gives an element 80% transparency on hover.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>hover-transparent</code>-mid</td>
          <td className="border-bottom padding-small">Gives an element 50% transparency on hover.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>hover-transparent</code>-high</td>
          <td className="border-bottom padding-small">Gives an element 30% transparency on hover.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>hover-hidden</code></td>
          <td className="border-bottom padding-small">Hides an element on hover.</td>
        </tr>
      </table>
    </div>

    <div>
      <SubHeader title="Cursors" />
      <table className="text-2 table-striped">
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>cursor-pointer</code></td>
          <td className="border-bottom padding-small">On hover, the element will show the pointer cursor (the hand).</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>cursor-move</code></td>
          <td className="border-bottom padding-small">On hover, the element will show the move cursor.</td>
        </tr>
      </table>
    </div>

    <div>
      <SubHeader title="Scrolling" />
      <table className="text-2 table-striped">
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>scroll-hidden</code></td>
          <td className="border-bottom padding-small">Hides the overflow and scrollbar of an element.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>scrollable-y</code></td>
          <td className="border-bottom padding-small">Shows a vertical scrollbar when applicable.</td>
        </tr>
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>scrollable-x</code></td>
          <td className="border-bottom padding-small">Shows a horizontal scrollbar when applicable.</td>
        </tr>
      </table>
    </div>

    <div>
      <SubHeader title="Stacking (z-index)" />
      <table className="text-2 table-striped">
        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>z-below</code></td>
          <td className="border-bottom padding-small">Lowest stacking order at an index of -10.</td>
        </tr>

        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>z-bottom</code></td>
          <td className="border-bottom padding-small">Stacking order at an index of 0.</td>
        </tr>

        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>z-low</code></td>
          <td className="border-bottom padding-small">Stacking order at an index of 10.</td>
        </tr>

        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>z-mid</code></td>
          <td className="border-bottom padding-small">Stacking order at an index of 20.</td>
        </tr>

        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>z-high</code></td>
          <td className="border-bottom padding-small">Stacking order at an index of 30.</td>
        </tr>

        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>z-top</code></td>
          <td className="border-bottom padding-small">Stacking order at an index of 2147483646 (the higest possible z-index - 1).</td>
        </tr>

        <tr>
          <td className="border-bottom padding-small weight-semi border-right"><code>z-force</code>-top</td>
          <td className="border-bottom padding-small">Stacking order at an index of 2147483647 (the higest possible z-index).</td>
        </tr>
      </table>
    </div>
  </section>
);

export default Utils;
