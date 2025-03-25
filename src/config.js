export default {
    form: [] || [
        {
            col: 12,
            type: 'text',
            label: 'street address*',
            value: '',
            placeholder: 'placeholder',
            id: "streetAddress",
            name: "streetAddress",
            validate: {
                required: true
            },
            attrs: {

            }
        },
        {
            col: 12,
            type: 'text',
            label: 'suburb / city*',
            value: 'value',
            placeholder: 'placeholder',
            id: "suburb",
            name: "suburb",
            attrs: {

            }
        },
        {
            col: 12,
            type: 'text',
            label: 'state*',
            value: 'value',
            placeholder: 'placeholder',
            id: "state",
            name: "state",
            attrs: {

            }
        },
        {
            col: 12,
            type: 'text',
            label: 'postcode*',
            value: 'value',
            placeholder: 'placeholder',
            id: "postcode",
            name: "postcode",
            validate: {
                required: {
                    message: 'Postcode is required'
                }
            },
        },
        {
            col: 12,
            type: 'select',
            label: 'country / region*',
            value: '',
            placeholder: 'placeholder',
            id: "country",
            name: "country",
            validate: {
                required: {
                    message: 'Country / region is required'
                }
            },
            options: [
                {
                    value: '',
                    label: 'select country'
                },
                {
                    value: 1,
                    label: 'australia'
                },
                {
                    value: 2,
                    label: 'argentina'
                },
                {
                    value: 3,
                    label: 'aruba'
                },
                {
                    value: 4,
                    label: 'estonia'
                },
            ]
        },
        {
            col: 12,
            type: 'textarea',
            label: 'delivery notes / instructions (Max 75 characters)',
            name: 'deliveryNotes',
            id: 'deliveryNotes',
            validate: {
                required: true
            },

        },
        {
            col: 12,
            type: 'checkbox',
            text: 'This is also my billing address',
            value: 'value',
            name: 'name4',
            id: 'one',
        },
        {
            col: 12,
            type: 'checkbox',
            text: 'opt me in to receive future offers and updates from evo (*)',
            value: 'value',
            name: 'name4',
            id: 'two',
            validate: {
                required: true
            },
        },
        {
            col: 12,
            type: 'radio',
            text: 'Standard Shipping - $9.99',
            value: 'value',
            name: 'name5',
            id: 'three',
        },
        {
            col: 12,
            text: 'Click And Collect Shipping - $9.99',
            type: 'radio',
            value: 'value',
            name: 'name5',
            id: 'four',
        },
    ]
}