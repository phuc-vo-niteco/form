import Icons from "./Icons";

export default (item) => {
  const { id, content, onConfig, label, index, className } = item;

  let config = [
    {
      type: "text",
      label: "ID",
      value: id,
      placeholder: "id",
      id: "input-field-config-id",
      name: "id",
    },
    {
      type: "text",
      label: "Label",
      value: label,
      placeholder: "",
      id: "input-field-config-label",
      name: "label",
    },
    {
      type: "text",
      label: "Class name",
      value: className,
      placeholder: "",
      id: "input-field-config-className",
      name: "className",
    },
    {
      type: "textarea",
      label: "Placeholder",
      value: content,
      placeholder: "Placeholder",
      id: "input-field-config-content",
      name: "content",
      rows: 10,
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
        <div
          className={className}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );
};
