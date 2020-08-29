import * as React from 'react';
import Layout from '../components/layout/Layout';
import { FormTitle } from '../components/styles/form/FormTitle';
import { Form } from '../components/styles/form/Form';
import { Field } from '../components/styles/form/Field';
import { InputSubmitForm } from '../components/styles/form/InputSubmitForm';
import AuthContext from '../context/auth/AuthContext';
import { IUserController } from '../common/models/controllers/IUserController';
import useForm from '../hooks/form/useForm';
import { sigIntInitialState } from '../common/InitialStates';
import { IFormController } from '../common/models/controllers/IFormController';
import { sigInValidation } from '../validations/signInValidation';
import { unpackCreateAccountFormErrors, unpackCreateAccountFormValues } from '../common/utils/unpackValues/unpackCreateAccount';
 
const SignIn: React.FunctionComponent = (): JSX.Element => {
    const { userServices }: IUserController = React.useContext(AuthContext);
    const {handleBlur, handleChange, handleSubmit, submittedForm, values}: IFormController = useForm(sigIntInitialState, sigInValidation, userServices.signIn)

    const {email, password, confimPassword} = unpackCreateAccountFormValues(values);

    return (
        <Layout>
            <FormTitle>sign in</FormTitle>    

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
                        onBlur={handleChange}
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
                        onBlur={handleChange}
                    />
                </Field>
                
                <Field>
                    <label>confirm password</label>
                    <input 
                        type="password"
                        id="confirm-password"
                        placeholder="repeat your password"
                        name={confimPassword.name}
                        value={confimPassword.value}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                </Field>

                <InputSubmitForm 
                    type="submit"
                >create account</InputSubmitForm>
                
            </Form>
        </Layout>
    );
}
 
export default SignIn;