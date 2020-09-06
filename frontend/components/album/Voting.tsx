import React, { useContext, Fragment } from 'react';
import { AlbumVotesContainer } from '../styles/albums/AlbumPageStyles';
import { Form } from '../styles/form/Form';
import { InputSubmitForm } from '../styles/form/InputSubmitForm';
import { IAlbumController } from '../../common/models/controllers/IAlbumController';
import AlbumContext from '../../context/album/AlbumContext';
import Spinner from '../Spinner';

const Voting: React.FC = (): JSX.Element => {
    const {state:{album:{id, votes}, fetchingData}, albumServices:{editAlbum}}: IAlbumController = useContext(AlbumContext);
    
    if(fetchingData) {
        return (
            <Fragment>
                <p>Loading ...</p>
                <Spinner />
            </Fragment>
        )
    }; 

    return (
        <AlbumVotesContainer>               
            <Form>
                <p>votes: {votes}</p>
                <InputSubmitForm
                    onClick={(event) => {
                        event.preventDefault();
                        editAlbum(id, [{name: 'votes', value: votes+1}]);
                    }}
                ><p>&#9650;</p></InputSubmitForm>
                <InputSubmitForm
                    onClick={(event) => {
                        event.preventDefault();
                        editAlbum(id, [{name: 'votes', value: votes-1}]);
                    }}
                ><p>&#9660;</p></InputSubmitForm>
            </Form>
        </AlbumVotesContainer>
    );
}

export default Voting;