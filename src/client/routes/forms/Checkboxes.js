const html = (checkbox, index) => (
`<fieldset class="checkbox ${checkbox.name !== "default" ? `checkbox-${checkbox.name}` : ""}">
  <input type="checkbox" name="size-${index}" id="size-${index}" />
  <label for="size-${index}">
    <span class="checkbox-icon">
      <i class="icon-checkmark-white"></i>
    </span>
    <span class="checkbox-label">
      Label
    </span>
  </label>
</fieldset>
`);

export default (props) => {
  return props.map((checkbox, index) => (html(checkbox, index))).join("\n");
}
