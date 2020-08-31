import React, { useContext } from 'react';
import AlbumContext from '../../context/album/AlbumContext';
import { IAlbumController } from '../../common/models/controllers/IAlbumController';
import Spinner from '../../components/Spinner';
import { useRouter, NextRouter } from 'next/router';
import Layout from '../../components/Layout';

const Album: React.FC = () => {
    const [loadingInfo, setLoadingInfo] = React.useState<boolean>(true);
    const [error, setError] = React.useState<boolean>(false);
    const {state:{album:{artist, genre, id, title, url, user, votes}, fetchingData}, albumServices:{getAlbum}}: IAlbumController = useContext(AlbumContext);
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
    }, [idAlbum])


    if(loadingInfo) {
        return (
            <Layout>
                <p>Cargando ...</p>
                <Spinner />
            </Layout>
        )
    };

    return (
        <Layout>
            <p>desde el album</p>
            <p>{artist}</p>
        </Layout>
    );
}

export default Album;