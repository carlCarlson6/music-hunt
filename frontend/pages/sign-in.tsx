import * as React from 'react';
import Layout from '../components/Layout';
import { FormTitle } from '../components/styles/form/FormTitle';
import { Form } from '../components/styles/form/Form';
import { Field } from '../components/styles/form/Field';
import { InputSubmitForm } from '../components/styles/form/InputSubmitForm';
import AuthContext from '../context/auth/AuthContext';
import { IUserController } from '../common/models/controllers/IUserController';
import useForm from '../hooks/useForm';
import { sigIntInitialState } from '../common/InitialStates';
import { IFormController } from '../common/models/controllers/IFormController';
import { sigInValidation } from '../common/utils/validations/signInValidation';
import { unpackCreateAccountFormErrors, unpackCreateAccountFormValues } from '../common/utils/unpackValues/unpackCreateAccount';
import Link from 'next/link';
import { ButtonLink } from '../components/styles/ButtonLink';
import Spinner from '../components/Spinner';
 
const SignIn: React.FunctionComponent = (): JSX.Element => {
    const { userServices }: IUserController = React.useContext(AuthContext);
    const {handleBlur, handleChange, handleSubmit, submittedForm, values}: IFormController = useForm(sigIntInitialState, sigInValidation, userServices.signIn)

    const {email, password, confimPassword} = unpackCreateAccountFormValues(values);

    if(submittedForm) {
        return (
            <Layout>
                <Spinner />
            </Layout>
        );
    }

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
                
                <Field>
                    <label>confirm password</label>
                    <input 
                        type="password"
                        id="confirm-password"
                        placeholder="repeat your password"
                        name={confimPassword.name}
                        value={confimPassword.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>

                <InputSubmitForm 
                    type="submit"
                >create account</InputSubmitForm>

                <Link href='/login'><ButtonLink>alredy have an account? login</ButtonLink></Link>
                
            </Form>
        </Layout>
    );
}
 
export default SignIn;