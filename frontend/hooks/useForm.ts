import React from 'react';
import { IFormController } from '../common/models/controllers/IFormController';
import { IFormValue } from '../common/models/entities/IFormValue';
import { IError } from '../common/models/entities/IError';
import { getHandleSubmit, getHandleChange, getHandleBlur } from './UseFormHandlers';
import { IUser } from '../common/models/entities/IUser';

const useForm = (initialState: Array<IFormValue>, validatationFn: (formValues: Array<IFormValue>) => Array<IError>, formExecutionFn: (formValues: Array<IFormValue>) => Promise<IUser>): IFormController => {
    const [values, setValues] = React.useState<Array<IFormValue>>(initialState);
    const [errors, setErrors] = React.useState<Array<IError>>([]);
    const [submittedForm, setSubmittedForm ] = React.useState(false);

    const handleSubmit = getHandleSubmit(values, validatationFn, setErrors, setSubmittedForm);
    const handleChange = getHandleChange(values, setValues);
    const handleBlur = getHandleBlur(values, validatationFn, setErrors);

    React.useEffect(() => {const executeUseEffect = async () => {
        if(submittedForm) {
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors) {
                try {
                    await formExecutionFn(values);
                    setValues(initialState);
                }
                catch (error) {
                    const newErrors = [...errors];
                    newErrors.push({name:'formExecutionFn', message:error.message});
                    setErrors(newErrors);
                }
                
            }
            setSubmittedForm(false);
        }}; executeUseEffect();
    }, [errors])

    
    return { values, errors, submittedForm, handleSubmit, handleChange, handleBlur }
}

export default useForm;