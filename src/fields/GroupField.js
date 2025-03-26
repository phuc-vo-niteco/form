import { useState } from "react";
import Icons from "./Icons";

const Component = (item) => {
  const { id, name, value, onChange, onConfig, label, index } = item;

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
  ];

  const [optionSource, setOptionSource] = useState(
    Array.from(
      value || [
        {
          value: "",
          lable: "",
        },
      ]
    )
  );

  const addItem = () => {
    setOptionSource(() => {
      const _optionSource = Array.from(optionSource);
      _optionSource.push({
        value: "",
        lable: "",
      });
      return _optionSource;
    });
  };

  const removeItem = (index) => {
    setOptionSource(() => {
      return Array.from(optionSource).filter((_, _index) => _index != index);
    });
  };

  const onChangeItem = ({ key, index, event }) => {
    const _optionSource = Array.from(optionSource);
    _optionSource[index][key] = event.target.value;

    setOptionSource(_optionSource);

    onChange({
      target: {
        value: optionSource,
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
        <div className="field-groups">
          <div className="field-group-item">
            <span className="field-group-item-title">Value:</span>
            <span className="field-group-item-title">Label:</span>
          </div>
          {optionSource.map((option, index) => (
            <div key={index} className="field-group-item">
              <input
                className="form-control"
                placeholder="option"
                value={option.value}
                onChange={(event) =>
                  onChangeItem({ event, index, key: "value" })
                }
              />
              <input
                className="form-control"
                placeholder="Option"
                value={option.label}
                onChange={(event) =>
                  onChangeItem({ event, index, key: "label" })
                }
              />
              <button
                type="submit"
                disabled={optionSource.length <= 1}
                onClick={() => removeItem(index)}
                className="field-group-action field-group-remove btn"
              >
                <Icons.DashCircle />
              </button>
              <button
                type="submit"
                onClick={addItem}
                className="field-group-action field-group-add btn"
              >
                <Icons.PlusCircle />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


const Preview = () => {
  return <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
  </svg></>
}

export default {
  Component,
  Preview,
};

