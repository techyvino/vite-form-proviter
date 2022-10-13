import { CheckBoxInput, Input, NormalSelectInput, RadioInput } from "./FormInputs";
import './formStyles.scss'

export const formTypes = {
    text: 'text',
    email: 'email',
    search: 'search',
    url: 'url',
    password: 'password',
    tel: 'tel',
    number: 'number',
    checkbox: 'checkbox',
    radio: 'radio',
    normalSelect: 'normalSelect',
}

const SelectField = (props: any) => {
    switch (props?.type) {
        case formTypes.text:
        case formTypes.email:
        case formTypes.search:
        case formTypes.url:
        case formTypes.password:
        case formTypes.tel:
        case formTypes.number:
            return <Input {...props} />
        case formTypes.checkbox:
            return <CheckBoxInput {...props} />
        case formTypes.radio:
            return <RadioInput {...props} />
        case formTypes.normalSelect:
            return <NormalSelectInput {...props} />
        default:
            return <p className="text-danger">Invalid Field</p>;
    }
}

export default SelectField;