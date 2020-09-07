import React, { useContext, Fragment } from 'react';
import { AlbumVotesContainer, AlbumsVotesButtonVote, InputSubmitVote } from '../styles/albums/AlbumPageStyles';
import { Form } from '../styles/form/Form';
import { InputSubmitForm } from '../styles/form/InputSubmitForm';
import { IAlbumController } from '../../common/models/controllers/IAlbumController';
import AlbumContext from '../../context/album/AlbumContext';
import Spinner from '../Spinner';
import { countTotalVotes } from '../../common/utils/CountTotalVotes';
import AuthContext from '../../context/auth/AuthContext';
import { IUser } from '../../common/models/entities/IUser';
import { IUserController } from '../../common/models/controllers/IUserController';
import { IVote } from '../../common/models/entities/IVote';
import { setVoteButton } from '../../common/utils/setVoteButton';

const Voting: React.FC = (): JSX.Element => {
    const {state:{album:{id, votes}, fetchingData}, albumServices:{voteAlbum}}: IAlbumController = useContext(AlbumContext);
    const {state:{user}}: IUserController = useContext(AuthContext);
    
    

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
            
                <InputSubmitVote
                    voted={setVoteButton(user, votes, true)}
                    onClick={(event) => {
                        event.preventDefault();
                        voteAlbum(id, true);
                    }}
                ><p>&#9650;</p></InputSubmitVote>
                
                <InputSubmitVote
                    voted={setVoteButton(user, votes, false)}
                    onClick={(event) => {
                        event.preventDefault();
                        voteAlbum(id, false);
                    }}
                ><p>&#9660;</p></InputSubmitVote>
            
            </Form>
        </AlbumVotesContainer>
    );
}

export default Voting;