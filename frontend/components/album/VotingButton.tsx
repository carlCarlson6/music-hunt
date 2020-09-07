import { IUserController } from "../../common/models/controllers/IUserController";
import { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { IAlbumController } from "../../common/models/controllers/IAlbumController";
import AlbumContext from "../../context/album/AlbumContext";
import { IVotingButton } from "../../common/models/entities/IVotingButton";
import { InputSubmitVote } from "../styles/albums/AlbumPageStyles";
import { setVoteButton } from "../../common/utils/setVoteButton";
import { IVote } from "../../common/models/entities/IVote";

const VotingButton: React.FC<IVotingButton> = ({positiveVotingButton}): JSX.Element => {
    const {state:{album:{id, votes}, fetchingData}, albumServices:{voteAlbum, editAlbumVote, deleteAlbumVote}}: IAlbumController = useContext(AlbumContext);
    const {state:{user}}: IUserController = useContext(AuthContext);

    return (
        <InputSubmitVote
            voted={setVoteButton(user, votes, positiveVotingButton)}
            onClick={(event) => {
                event.preventDefault();
                const userVote: IVote = votes.find(vote => vote.user.id == user.id)

                if(!userVote) {
                    voteAlbum(id, positiveVotingButton)
                } else if(positiveVotingButton === userVote.isPositive) {
                    deleteAlbumVote(userVote.id);
                } else if(positiveVotingButton !== userVote.isPositive) {
                    editAlbumVote(userVote.id, positiveVotingButton)
                }
            }}
        >
            { positiveVotingButton? <p>&#9650;</p> : <p>&#9660;</p> }
        </InputSubmitVote>
    )

}

export default VotingButton;