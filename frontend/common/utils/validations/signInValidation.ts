import { IError } from "../../models/entities/IError";
import { unpackCreateAccountFormValues } from "../unpackValues/unpackCreateAccount";
import { IFormValue } from "../../models/entities/IFormValue";

export const sigInValidation = (formValues: Array<IFormValue>): Array<IError> => {
    let errors: Array<IError> = []
    const {email, password, confimPassword} = unpackCreateAccountFormValues(formValues);

    if(!email.value) {
        errors.push({name:email.name, message: 'email is mandatory'});
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.value)) {
        errors.push({name:email.name, message: 'email not valid'});
    }
    
    if(!password.value) {
        errors.push({name:password.name, message: 'password is mandatory'});
    } else if (password.value.length < 6) {
        errors.push({name:password.name, message: 'password must be at leat 6 characters long'})
    }

    if(password.value !== confimPassword.value) {
        errors.push({name:password.name, message: 'passwords do not match'});
    }

    return errors;
}