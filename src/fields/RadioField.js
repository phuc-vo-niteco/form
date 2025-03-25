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
