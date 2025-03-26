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
    text,
    options,
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
      type: "group",
      label: "Options",
      value: options,
      id: "select-field-config-group",
      name: "options",
    },
  ];

  const _onChange = () => {
    onChange({
      target: {
        value: 1,
      },
    });
  };

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
        <div>
          {item.options.map((option) => (
            <div className="form-check">
              <input
                id={id + option.value}
                className="form-check-input"
                type="radio"
                data-value={option.value}
                name={item.name}
                onChange={(event) => _onChange(event, item)}
              />
              <label for={id + option.value} className="form-check-label">
                {option.value}
              </label>
              <div class="invalid-feedback">{item.message}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Preview = () => {
  return <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-radios" viewBox="0 0 16 16">
    <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0m7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
  </svg></>
}

export default {
  Component,
  Preview,
};
