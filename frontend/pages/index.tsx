import * as React from 'react';
import Layout from '../components/Layout';
import AlbumContext from '../context/album/AlbumContext';
import { IAlbumController } from '../common/models/controllers/IAlbumController';
import Spinner from '../components/Spinner';
import AlbumDetail from '../components/album/AlbumDetail';
import { AlbumsListContainer } from '../components/styles/albums/AlbumsListContainer';
 
const Home: React.FunctionComponent = (): JSX.Element => {
    const {state: {fetchingData, albums}, albumServices:{getAlbums}}: IAlbumController = React.useContext(AlbumContext);

    React.useEffect(()=>{getAlbums()}, []);

    if(fetchingData) {
        return (
            <Layout>
                <Spinner />
            </Layout>
        );
    }

    return (
        <Layout>
            <AlbumsListContainer
                onGrid={true}
            >        
                {albums.map(album =>
                    <AlbumDetail
                        album={album}
                        key={album.id}
                    />
                )}
            </AlbumsListContainer>
        </Layout>
    );
}
 
export default Home;