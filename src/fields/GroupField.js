import { useState } from "react";
import Icons from "./Icons";

export default (item) => {
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
                disabled={optionSource.length <= 1}
                onClick={() => removeItem(index)}
                className="field-group-action field-group-remove btn"
              >
                <Icons.DashCircle />
              </button>
              <button
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
