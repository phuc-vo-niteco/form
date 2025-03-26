import CheckboxField from "./CheckboxField";
import GroupField from "./GroupField";
import InputField from "./InputField";
import RadioField from "./RadioField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import EditorField from "./EditorField";

export default {
    textarea: TextareaField,
    select: SelectField,
    text: InputField,
    checkbox: CheckboxField,
    radio: RadioField,
    group: GroupField,
    editor: EditorField,
}

export const addOn = [
    {
        label: 'Text Input',
        value: '',
        placeholder: '',
        id: "",
        name: "",
        validate: {
            required: true
        },
        type: 'text',
    },
    {
        label: 'Select',
        value: '',
        placeholder: '',
        id: "",
        name: "",
        validate: {},
        type: 'select',
        options: [
            {
                label: 'Option 1',
                value: 'option1'
            },
            {
                label: 'Option 2',
                value: 'option2'
            }
        ],
    },
    {
        label: 'Text Area',
        value: '',
        placeholder: '',
        id: "",
        name: "",
        validate: {},
        type: 'textarea',
    },
    {
        label: 'Checkbox',
        value: '',
        placeholder: '',
        id: "",
        name: "",
        validate: {},
        checked: false,
        type: 'checkbox',
        text: 'Checkbox',
    },
    {
        label: 'Radio',
        value: '',
        placeholder: '',
        id: "",
        name: "",
        validate: {},
        type: 'radio',
        text: 'Radio',
        options: [
            {
                label: 'Option 1',
                value: 'option1'
            },
            {
                label: 'Option 2',
                value: 'option2'
            }
        ],
    },
    {
        label: 'Group',
        value: [
            {
                label: 'Option 1',
                value: 'option1'
            },
        ],
        placeholder: '',
        id: "",
        name: "",
        validate: {},
        type: 'group',
        text: 'Radio',
    },
    {
        label: 'Editor',
        placeholder: '',
        id: "",
        name: "",
        validate: {},
        type: 'editor',
        content: 'This is the content',
    },
];