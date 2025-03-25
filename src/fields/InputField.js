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
        index
    } = item;

    let config = [
        {
            type: 'text',
            label: 'ID',
            value: id,
            placeholder: 'id',
            id: "input-field-config-id",
            name: "id",
        },
        {
            type: 'text',
            label: 'Label',
            value: label,
            placeholder: '',
            id: "input-field-config-label",
            name: "label",
        },
        {
            type: 'text',
            label: 'Placeholder',
            value: placeholder,
            placeholder: 'Placeholder',
            id: "input-field-config-placeholder",
            name: "placeholder",
        },
        {
            type: 'text',
            label: 'value',
            value: value,
            placeholder: 'Value',
            id: "input-field-config-value",
            name: "value",
        },
        {
            type: 'text',
            label: 'Name',
            value: name,
            placeholder: 'name',
            id: "input-field-config-name",
            name: "name",
        }
    ];

    return (
        <div className="content-input">
            {onConfig && <button type="button" className="btn-setting" onClick={() => onConfig({ config, index })} >
                <Icons.Sliders />
            </button>}
            <input
                type={type}
                id={id}
                className={'form-control ' + (message ? 'is-invalid' : '')}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange} />
            <div class="invalid-feedback">
                {message}
            </div>
        </div>
    );
}