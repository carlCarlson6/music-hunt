import { IUserController } from "../../common/models/controllers/IUserController";
import { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { IAlbumController } from "../../common/models/controllers/IAlbumController";
import AlbumContext from "../../context/album/AlbumContext";
import { IVotingButton } from "../../common/models/entities/IVotingButton";
import { InputSubmitVote } from "../styles/albums/AlbumPageStyles";
import { setVoteButton } from "../../common/utils/setVoteButton";

const VotingButton: React.FC<IVotingButton> = ({positiveVotingButton}): JSX.Element => {
    const {state:{album:{id, votes}, fetchingData}, albumServices:{voteAlbum, editAlbumVote, deleteAlbumVote}}: IAlbumController = useContext(AlbumContext);
    const {state:{user}}: IUserController = useContext(AuthContext);

    const unicodeSymbol: string = positiveVotingButton? '&#9650;' : '&#9660;';
    const onClickAction: any = null;

    return (
        <InputSubmitVote
            voted={setVoteButton(user, votes, positiveVotingButton)}
            onClick={(event) => {
                event.preventDefault();
            }}
        >
            <p>&#9650;</p>
        </InputSubmitVote>
    )

}

export default VotingButton;