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
        options

    } = item;
    let config = [
        {
            type: 'text',
            label: 'ID',
            value: id,
            placeholder: 'id',
            id: "select-field-config-id",
            name: "id",
        },
        {
            type: 'text',
            label: 'Label',
            value: label,
            placeholder: '',
            id: "select-field-config-label",
            name: "label",
        },
        {
            type: 'text',
            label: 'Placeholder',
            value: placeholder,
            placeholder: 'Placeholder',
            id: "placeholder-config",
            name: "placeholder",
        },
        {
            type: 'text',
            label: 'Name',
            value: name,
            placeholder: 'name',
            id: "select-field-config-name",
            name: "name",
        },
        {
            type: 'text',
            label: 'Value',
            value: value,
            placeholder: 'name',
            id: "select-field-config-value",
            name: "value",
        },
        {
            type: 'group',
            label: 'Options',
            value: options,
            id: "select-field-config-group",
            name: "options",
        }
    ];

    return (
        <div className="content-input">
            {onConfig && <button type="button" className="btn-setting" onClick={() => onConfig({ config, index })} >
                <Icons.Sliders />
            </button>}
            <select
                id={id}
                className={'form-control ' + (message ? 'is-invalid' : '')}
                name={name}
                onChange={onchange} >
                <option value="">{placeholder}</option>
                {
                    options.map((option, index) => {
                        return <option key={index} value={option.value} selected={value === option.value}>{option.label}</option>
                    })
                }
            </select>
            <div class="invalid-feedback">
                {message}
            </div>
        </div>
    )
}