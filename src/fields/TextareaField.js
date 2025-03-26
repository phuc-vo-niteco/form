import Icons from "./Icons";

const Component = (item) => {
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
    onPreview,
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

const Preview = () => {
  return <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor-text" viewBox="0 0 16 16">
    <path d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.17 4.17 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.5 3.5 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.17 4.17 0 0 1-2.06-.566A5 5 0 0 1 8 13.65a5 5 0 0 1-.44.285 4.17 4.17 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.5 3.5 0 0 0-.436-.294A3.17 3.17 0 0 0 5.5 2.5.5.5 0 0 1 5 2m2.648 10.645" />
  </svg></>
}

export default {
  Component,
  Preview,
};
