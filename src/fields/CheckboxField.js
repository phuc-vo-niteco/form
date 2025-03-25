import Icons from "./Icons";

export default (item) => {
  const {
    type,
    placeholder,
    id,
    name,
    value,
    onChange,
    message,
    onConfig,
    label,
    index,
    text,
    checked,
  } = item;

  let config = [
    {
      type: "text",
      label: "ID",
      value: id,
      placeholder: "id",
      id: "checkbox-field-config-id",
      name: "id",
    },
    {
      type: "text",
      label: "Label",
      value: label,
      placeholder: "",
      id: "checkbox-field-config-label",
      name: "label",
    },
    {
      type: "text",
      label: "Name",
      value: name,
      placeholder: "name",
      id: "checkbox-field-config-name",
      name: "name",
    },
    {
      type: "text",
      label: "Value",
      value: value,
      placeholder: "value",
      id: "checkbox-field-config-value",
      name: "value",
    },
    {
      type: "text",
      label: "Text",
      value: text,
      placeholder: "Text",
      id: "checkbox-field-config-value",
      name: "text",
    },
    {
      type: "checkbox",
      label: "Checked",
      value: value,
      checked: checked,
      id: "checkbox-field-config-checked",
      name: "checked",
      text: "Set the default to checked",
    },
  ];

  return (
    <>
      {" "}
      {onConfig && (
        <button
          type="button"
          className="btn-setting"
          onClick={() => onConfig({ config, index })}
        >
          <Icons.Sliders />
        </button>
      )}
      <div className="content-input">
        <div className="form-check">
          <input
            checked={checked}
            type="checkbox"
            value={value}
            id={id}
            className={"form-check-input " + (message ? "is-invalid" : "")}
            name={name}
            onChange={onChange}
          />
          <label for={id} className="form-check-label">
            {text}
          </label>
          <div class="invalid-feedback">{message}</div>
        </div>
      </div>
    </>
  );
};
