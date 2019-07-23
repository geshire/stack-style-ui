export default (props, type) => {
  const spacing = props.map(space => (
    `<div class="${type}-${space.name}">${space.name}</div>`
  )).join("\n");

  return `${spacing}`;
}
