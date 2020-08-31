import React, { useContext, Fragment } from 'react';
import AlbumContext from '../../context/album/AlbumContext';
import { IAlbumController } from '../../common/models/controllers/IAlbumController';
import Layout from '../../components/layout/Layout';
import Spinner from '../../components/Spinner';
import { useRouter, NextRouter } from 'next/router';

const Album: React.FC = () => {
    const [loadingInfo, setLoadingInfo] = React.useState<boolean>(true);
    const [error, setError] = React.useState<boolean>(false);
    const {state:{album:{artist, genre, id, title, url, user, votes}, fetchingData}, albumServices:{getAlbum}}: IAlbumController = useContext(AlbumContext);
    const {query: {albumId}}: NextRouter = useRouter();
    let idAlbum: string = Array.isArray(albumId)? albumId[0] : albumId;

    React.useEffect(() => { (async () => {
        if(albumId && fetchingData) {
            try {
                await getAlbum(idAlbum);
                setLoadingInfo(false);
            } catch(error) {
                console.log(error);
                setLoadingInfo(false);
                setError(true);
            }
        }
        })()
    }, [albumId])


    if(loadingInfo) {
        return (
            <Fragment>
                <Layout>
                    <p>Cargando ...</p>
                    <Spinner />
                </Layout>
            </Fragment>
        )
    };

    return (
        <h1>desde el album</h1>
    );
}

export default Album;