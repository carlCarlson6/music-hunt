import React, { useContext } from 'react';
import AlbumContext from '../../context/album/AlbumContext';
import { IAlbumController } from '../../common/models/controllers/IAlbumController';
import Spinner from '../../components/Spinner';
import { useRouter, NextRouter } from 'next/router';
import Layout from '../../components/Layout';
import { AlbumPageInfoContainer, AlbumCommentsContainer } from '../../components/styles/albums/AlbumPageStyles';
import YoutubeVideo from '../../components/album/YoutubeVideo';
import Voting from '../../components/album/Voting';

const Album: React.FC = (): JSX.Element => {
    const [loadingInfo, setLoadingInfo] = React.useState<boolean>(true);
    const [, setError] = React.useState<boolean>(false);
    const {state:{album:{artist, genre, title, url, user}}, albumServices:{getAlbum}}: IAlbumController = useContext(AlbumContext);
    const {query: {albumId}}: NextRouter = useRouter();
    let idAlbum: string = Array.isArray(albumId)? albumId[0] : albumId;

    React.useEffect(() => { const retriveAlbumInfo = async () => {
        if(idAlbum && loadingInfo) {
            try {
                await getAlbum(idAlbum);
                setLoadingInfo(false);
            } catch(error) {
                console.log(error);
                setLoadingInfo(false);
                setError(true);
            }
        }}
        retriveAlbumInfo();
    }, [idAlbum]);

    if(loadingInfo) {
        return (
            <Layout>
                <p>Loading ...</p>
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
                    
                   <Voting />
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