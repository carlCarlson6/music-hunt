import { IError } from "../../models/entities/IError";
import { IFormValue } from "../../models/entities/IFormValue";
import { unpackLoginFormValues } from "../unpackValues/unpackLogin";


export const loginValidation = (formValues: Array<IFormValue>): Array<IError> =>  {
    let errors: Array<IError> = []
    const {email, password} = unpackLoginFormValues(formValues);
    
    if(!email.value) {
        errors.push({name:email.name, message: 'email is mandatory'});
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.value)) {
        errors.push({name:email.name, message: 'email not valid'});
    }
    if(!password.value) {
        errors.push({name:password.name, message: 'password is mandatory'});
    }

    return errors;
}