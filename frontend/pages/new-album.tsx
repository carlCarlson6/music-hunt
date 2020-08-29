import * as React from 'react';
import Layout from '../components/layout/Layout';
import { FormTitle } from '../components/styles/form/FormTitle';
import { Form } from '../components/styles/form/Form';
import { Field } from '../components/styles/form/Field';
import { InputSubmitForm } from '../components/styles/form/InputSubmitForm';
 
const NewAlbum: React.FunctionComponent = (): JSX.Element => {
    return (
        <Layout>
            <FormTitle>new album</FormTitle>    

            <Form
                onSubmit={() => console.log('on submit form')}
            >
                
                <Field>
                    <label>title</label>
                    <input 
                        type="text"
                        id="title"
                        placeholder="album title"
                        name={''}
                        value={''}
                        onChange={() => console.log('on change')}
                        onBlur={() => console.log('on blur')}
                    />
                </Field>
                
                <Field>
                    <label>artist</label>
                    <input 
                        type="text"
                        id="artist"
                        placeholder="artist, band or composer"
                        name={''}
                        value={''}
                        onChange={() => console.log('on change')}
                        onBlur={() => console.log('on blur')}
                    />
                </Field>
                
                <Field>
                    <label>genre</label>
                    <input 
                        type="text"
                        id="genre"
                        placeholder="genre or musical style"
                        name={''}
                        value={''}
                        onChange={() => console.log('on change')}
                        onBlur={() => console.log('on blur')}
                    />
                </Field>

                <Field>
                    <label>url</label>
                    <input 
                        type="url"
                        id="genre"
                        placeholder="url to album content (i.e. youtube link)"
                        name={''}
                        value={''}
                        onChange={() => console.log('on change')}
                        onBlur={() => console.log('on blur')}
                    />
                </Field>
                
                <InputSubmitForm 
                    type="submit"
                >add a new album</InputSubmitForm>
                
            </Form>
        </Layout>
    );
}
 
export default NewAlbum;