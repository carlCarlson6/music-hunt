import * as React from 'react';
import Layout from '../components/layout/Layout';
import { FormTitle } from '../components/styles/form/FormTitle';
import { Form } from '../components/styles/form/Form';
import { Field } from '../components/styles/form/Field';
import { InputSubmitForm } from '../components/styles/form/InputSubmitForm';
 
const SignIn: React.FunctionComponent = (): JSX.Element => {
    return (
        <Layout>
            <FormTitle>sign in</FormTitle>    

            <Form
                onSubmit={() => console.log('on submit form')}
            >
                
                <Field>
                    <label>email</label>
                    <input 
                        type="email"
                        id="email"
                        placeholder="your email"
                        name={''}
                        value={''}
                        onChange={() => console.log('on change')}
                        onBlur={() => console.log('on blur')}
                    />
                </Field>
                
                <Field>
                    <label>password</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder="your password"
                        name={''}
                        value={''}
                        onChange={() => console.log('on change')}
                        onBlur={() => console.log('on blur')}
                    />
                </Field>
                
                <Field>
                    <label>confirm password</label>
                    <input 
                        type="password"
                        id="confirm-password"
                        placeholder="repeat your password"
                        name={''}
                        value={''}
                        onChange={() => console.log('on change')}
                        onBlur={() => console.log('on blur')}
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