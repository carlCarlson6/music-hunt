import React, { useContext } from 'react';
import AlbumContext from '../../context/album/AlbumContext';
import { IAlbumController } from '../../common/models/controllers/IAlbumController';
import Spinner from '../../components/Spinner';
import { useRouter, NextRouter } from 'next/router';
import Layout from '../../components/Layout';
import { AlbumPageInfoContainer, AlbumVotesContainer, AlbumCommentsContainer } from '../../components/styles/albums/AlbumPageStyles';
import YoutubeVideo from '../../components/album/YoutubeVideo';
import { Form } from '../../components/styles/form/Form';
import { InputSubmitForm } from '../../components/styles/form/InputSubmitForm';

const Album: React.FC = () => {
    const [loadingInfo, setLoadingInfo] = React.useState<boolean>(true);
    const [error, setError] = React.useState<boolean>(false);
    const {state:{album:{artist, genre, id, title, url, user, votes}, fetchingData}, albumServices:{getAlbum, editAlbum}}: IAlbumController = useContext(AlbumContext);
    const {query: {albumId}}: NextRouter = useRouter();
    let idAlbum: string = Array.isArray(albumId)? albumId[0] : albumId;

    React.useEffect(() => { const retriveAlbumInfo = async () => {
        if(idAlbum && loadingInfo) {
            try {
                const album = await getAlbum(idAlbum);
                setLoadingInfo(false);
            } catch(error) {
                console.log(error);
                setLoadingInfo(false);
                setError(true);
            }
        }}
        retriveAlbumInfo();
    }, [idAlbum]);

    if(loadingInfo || fetchingData) {
        return (
            <Layout>
                <p>Cargando ...</p>
                <Spinner />
            </Layout>
        )
    };

    return (
        <Layout>
            <AlbumPageInfoContainer>
                <div>
                    <h1>{title}</h1>
                    <h2>- {artist}</h2>
                    <p>{genre}</p>
                    <p>uploaded by: {user.email}</p>
                    
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
                </div>
                
                <div>
                    <YoutubeVideo url={url} />
                </div>
            </AlbumPageInfoContainer>

            <AlbumCommentsContainer>

            </AlbumCommentsContainer>

        </Layout>
    );
}

export default Album;