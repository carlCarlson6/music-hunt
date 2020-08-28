import React from 'react';
import Layout from '../components/layout/Layout';
import { FormTitle } from '../components/styles/form/FormTitle';
import { Form } from '../components/styles/form/Form';
import { Field } from '../components/styles/form/Field';
import { InputSubmitForm } from '../components/styles/form/InputSubmitForm';
import { IFormController } from '../common/models/controllers/IFormController';
import useForm from '../hooks/form/useForm';
import { loginInitialState } from '../common/InitialStates';
import { loginUser } from '../services/UserServices';
import { loginValidation } from '../validations/loginValidation';
import { unpackLoginFormValues, unpackLoginFormErrors } from '../common/utils/unpackValues/unpackLogin';
import Spinner from '../components/Spinner';
 
const Login: React.FunctionComponent = (): JSX.Element => {
    const {errors, handleBlur, handleChange, handleSubmit, values, submittedForm}: IFormController = useForm(loginInitialState, loginValidation, loginUser)

    const {email, password} = unpackLoginFormValues(values);
    const {passwordError, emailError, formExecutionError} = unpackLoginFormErrors(errors);
    
    if(submittedForm) {
        return (
            <Layout>
                <p>Iniciado sesion</p>
                <Spinner />
            </Layout>
        );
    }

    return (
        <Layout>
            <FormTitle>login</FormTitle>    

            <Form
                onSubmit={handleSubmit}
            >
                
                <Field>
                    <label>email</label>
                    <input 
                        type="email"
                        id="email"
                        placeholder="your email"
                        name={email.name}
                        value={email.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>

                <Field>
                    <label>password</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder="your password"
                        name={password.name}
                        value={password.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>

                <InputSubmitForm 
                    type="submit"
                >login</InputSubmitForm>
                
            </Form>

        </Layout>
    );
}
 
export default Login;