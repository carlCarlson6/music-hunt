import React, { useContext, Fragment } from 'react';
import { AlbumVotesContainer, InputSubmitVote } from '../styles/albums/AlbumPageStyles';
import { Form } from '../styles/form/Form';
import { IAlbumController } from '../../common/models/controllers/IAlbumController';
import AlbumContext from '../../context/album/AlbumContext';
import Spinner from '../Spinner';
import { countTotalVotes } from '../../common/utils/CountTotalVotes';
import AuthContext from '../../context/auth/AuthContext';
import { IUserController } from '../../common/models/controllers/IUserController';
import { setVoteButton } from '../../common/utils/setVoteButton';
import { ButtonLink } from '../styles/ButtonLink';
import Link from 'next/link';
import VotingButton from './VotingButton';

const Voting: React.FC = (): JSX.Element => {
    const {state:{album:{id, votes}, fetchingData}, albumServices:{voteAlbum}}: IAlbumController = useContext(AlbumContext);
    const {state:{user}}: IUserController = useContext(AuthContext);
    
    if(fetchingData) {
        return (
            <Fragment>
                <AlbumVotesContainer>
                    <Form>
                        <p>Loading ...</p>
                        <Spinner />
                    </Form>
                </AlbumVotesContainer>
            </Fragment>
        )
    }; 

    return (
        <AlbumVotesContainer>               
            <Form>
                <p>votes: {countTotalVotes(votes)}</p>

                {user.id?
                    <Fragment>        
                        <VotingButton
                            positiveVotingButton={true}
                        />
                        <VotingButton
                            positiveVotingButton={false}
                        />
                    </Fragment>
                : 
                    <Fragment>
                        <Link href="/login"><ButtonLink bgColor={true}>
                            login to vote
                        </ButtonLink></Link>
                    </Fragment>
                }

            </Form>
        </AlbumVotesContainer>
    );
}

export default Voting;