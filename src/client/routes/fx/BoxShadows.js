const html = (shadow, index) => (
`<div class="shadow-${shadow.name}"></div>`);

export default (props) => {
  return props.map((shadow, index) => (html(shadow, index))).join("\n");
}
