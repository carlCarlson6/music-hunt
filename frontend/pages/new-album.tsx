import * as React from 'react';
import Layout from '../components/layout/Layout';
import { FormTitle } from '../components/styles/form/FormTitle';
import { Form } from '../components/styles/form/Form';
import { Field } from '../components/styles/form/Field';
import { InputSubmitForm } from '../components/styles/form/InputSubmitForm';
import { IAlbumController } from '../common/models/controllers/IAlbumController';
import AlbumContext from '../context/album/AlbumContext';
import { IFormController } from '../common/models/controllers/IFormController';
import { newAlbumInitialState } from '../common/InitialStates';
import { newAlbumValidations } from '../common/utils/validations/newAlbumValidations';
import useForm from '../hooks/useForm';
import { unpackNewAlbumFormValues } from '../common/utils/unpackValues/unpackNewAlbum';
import Spinner from '../components/Spinner';
 
const NewAlbum: React.FunctionComponent = (): JSX.Element => {
    const {albumServices}: IAlbumController = React.useContext(AlbumContext)
    const {handleBlur, handleChange, handleSubmit, values, submittedForm}: IFormController = useForm(newAlbumInitialState, newAlbumValidations, albumServices.addAlbum)

    const {artist, genre, title, url} = unpackNewAlbumFormValues(values);

    if(submittedForm) {
        return (
            <Layout>
                <Spinner />
            </Layout>
        );
    }

    return (
        <Layout>
            <FormTitle>new album</FormTitle>    

            <Form
                onSubmit={handleSubmit}
            >
                
                <Field>
                    <label>title</label>
                    <input 
                        type="text"
                        id="title"
                        placeholder="album title"
                        name={title.name}
                        value={title.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>
                
                <Field>
                    <label>artist</label>
                    <input 
                        type="text"
                        id="artist"
                        placeholder="artist, band or composer"
                        name={artist.name}
                        value={artist.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>
                
                <Field>
                    <label>genre</label>
                    <input 
                        type="text"
                        id="genre"
                        placeholder="genre or musical style"
                        name={genre.name}
                        value={genre.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>

                <Field>
                    <label>url</label>
                    <input 
                        type="url"
                        id="genre"
                        placeholder="url to album content (i.e. youtube link)"
                        name={url.name}
                        value={url.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
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