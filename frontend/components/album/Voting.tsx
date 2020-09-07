import React, { useContext, Fragment } from 'react';
import { AlbumVotesContainer } from '../styles/albums/AlbumPageStyles';
import { Form } from '../styles/form/Form';
import { InputSubmitForm } from '../styles/form/InputSubmitForm';
import { IAlbumController } from '../../common/models/controllers/IAlbumController';
import AlbumContext from '../../context/album/AlbumContext';
import Spinner from '../Spinner';
import { countTotalVotes } from '../../common/utils/CountTotalVotes';

const Voting: React.FC = (): JSX.Element => {
    const {state:{album:{id, votes}, fetchingData}, albumServices:{}}: IAlbumController = useContext(AlbumContext);
    
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
                <p>votes: {countTotalVotes(votes)}</p>
                <InputSubmitForm
                    onClick={(event) => {
                        event.preventDefault();
                        console.log('upvoting');
                    }}
                ><p>&#9650;</p></InputSubmitForm>
                <InputSubmitForm
                    onClick={(event) => {
                        event.preventDefault();
                        console.log('upvoting');
                    }}
                ><p>&#9660;</p></InputSubmitForm>
            </Form>
        </AlbumVotesContainer>
    );
}

export default Voting;