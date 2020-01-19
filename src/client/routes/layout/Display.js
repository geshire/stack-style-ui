const blockHtml = `<span class="block">Block</span>`;

const inlineBlockHtml =`<span class="inline-block">Inline Block</span>`;

const inlineHtml = `<div className="inline">Inline</div>`;

export default (props) => {
  const inlineBlocks = [...Array(3)].map(item => inlineBlockHtml).join("\n");
  const inlines = [...Array(3)].map(item => inlineHtml).join("\n");

  return `
    <!-- block elements fill the width of their container -->
    ${blockHtml}
    \n
    <!-- inline block elements fill the space of their content and line up with spacing between -->
    ${inlineBlocks}
    \n
    <!-- inline elements fill the space of their content and line up with no spacing between -->
    ${inlines}`;
}
