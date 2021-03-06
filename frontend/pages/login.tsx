import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { FormTitle } from '../components/styles/form/FormTitle';
import { Form } from '../components/styles/form/Form';
import { Field } from '../components/styles/form/Field';
import { InputSubmitForm } from '../components/styles/form/InputSubmitForm';
import { IFormController } from '../common/models/controllers/IFormController';
import useForm from '../hooks/useForm';
import { loginInitialState } from '../common/InitialStates';
import { loginValidation } from '../common/utils/validations/loginValidation';
import { unpackLoginFormValues } from '../common/utils/unpackValues/unpackLogin';
import Spinner from '../components/Spinner';
import AuthContext from '../context/auth/AuthContext';
import { IUserController } from '../common/models/controllers/IUserController';
import Link from 'next/link';
import { ButtonLink } from '../components/styles/ButtonLink';
 
const Login: React.FunctionComponent = (): JSX.Element => {
    const {userServices}: IUserController = useContext(AuthContext);
    const {handleBlur, handleChange, handleSubmit, values, submittedForm}: IFormController = useForm(loginInitialState, loginValidation, userServices.login);

    const {email, password} = unpackLoginFormValues(values);
    
    if(submittedForm) {
        return (
            <Layout>
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

                <Link href='/sign-in'><ButtonLink>are you new? create an account</ButtonLink></Link>
                
            </Form>

            

        </Layout>
    );
}
 
export default Login;