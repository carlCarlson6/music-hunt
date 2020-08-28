import * as React from 'react';
import Layout from '../components/layout/Layout';
import { FormTitle } from '../components/styles/form/FormTitle';
import { Form } from '../components/styles/form/Form';
import { Field } from '../components/styles/form/Field';
import { InputSubmitForm } from '../components/styles/form/InputSubmitForm';
 
const Login: React.FunctionComponent = (): JSX.Element => {
    return (
        <Layout>
            <FormTitle>login</FormTitle>    

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
                        onBlur={() => console.log('on change')}
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
                        onBlur={() => console.log('on change')}
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