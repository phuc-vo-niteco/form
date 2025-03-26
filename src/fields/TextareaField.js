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
    rows,
  } = item;
  let config = [
    {
      type: "text",
      label: "ID",
      value: id,
      placeholder: "id",
      id: "textarea-field-config-id",
      name: "id",
    },
    {
      type: "number",
      label: "Row",
      value: rows,
      placeholder: "Rows",
      id: "textarea-field-config-rows",
      name: "rows",
    },
    {
      type: "text",
      label: "Label",
      value: label,
      placeholder: "",
      id: "textarea-field-config-label",
      name: "label",
    },
    {
      type: "text",
      label: "Placeholder",
      value: placeholder,
      placeholder: "Placeholder",
      id: "textarea-field-config-placehoder",
      name: "placeholder",
    },
    {
      type: "text",
      label: "Name",
      value: name,
      placeholder: "name",
      id: "textarea-field-config-name",
      name: "name",
    },
  ];

  return (
    <>
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
        <textarea
          id={id}
          placeholder={item.placeholder}
          data-value={item.value}
          className={"form-control " + (item.message ? "is-invalid" : "")}
          value={item.value}
          name={item.name}
          rows={rows}
          onChange={onChange}
        />
        <div class="invalid-feedback">{item.message}</div>
      </div>
    </>
  );
};
