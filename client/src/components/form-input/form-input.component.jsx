import React from "react";

import { GroupCont, FormInputCont, FormInputLabel } from "./form-input.styles";

const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupCont>
        <FormInputCont onChange={handleChange} {...otherProps} />
        {
            label ?
            (<FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''}`} htmlFor={`${otherProps.name}`}>
                {label}
            </FormInputLabel>)
            : null
        }
    </GroupCont>
)

export default FormInput;