import { IUserController } from "../../common/models/controllers/IUserController";
import { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { IAlbumController } from "../../common/models/controllers/IAlbumController";
import AlbumContext from "../../context/album/AlbumContext";

const VotingButton: React.FC = (): JSX.Element => {
    const {state:{album:{id, votes}, fetchingData}, albumServices:{voteAlbum}}: IAlbumController = useContext(AlbumContext);
    const {state:{user}}: IUserController = useContext(AuthContext);

}

export default VotingButton;