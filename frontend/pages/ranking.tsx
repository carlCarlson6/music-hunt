import * as React from 'react';
import Layout from '../components/Layout';
import { BandcampIFrame } from '../components/styles/iframe/BandCampIFrame';
import { IAlbumController } from '../common/models/controllers/IAlbumController';
import AlbumContext from '../context/album/AlbumContext';
import Spinner from '../components/Spinner';
import { AlbumsListContainer } from '../components/styles/albums/AlbumsListContainer';
import AlbumDetail from '../components/album/AlbumDetail';
import { IAlbum } from '../common/models/entities/IAlbum';
import { countTotalVotes } from '../common/utils/CountTotalVotes';
import { orderAlbumsByVotes } from '../common/utils/orderAlbumsByVotes';
 
const Ranking: React.FunctionComponent = (): JSX.Element => {
    const {state: {fetchingData}, albumServices:{getAlbums}}: IAlbumController = React.useContext(AlbumContext);
    const [top5Albums, setTop5Albums] = React.useState<Array<IAlbum>>([])

    React.useEffect(()=>{const getTop5Albums = async () => {
            const albums: Array<IAlbum> = await getAlbums();
            setTop5Albums(albums.sort((albumA, albumB)=> orderAlbumsByVotes(albumA, albumB)).slice(0,4));
        }
        getTop5Albums();
    }, []);

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
                onGrid={false}
            >        
                {top5Albums.map(album =>
                    <AlbumDetail
                        album={album}
                        key={album.id}
                    />
                )}
            </AlbumsListContainer>
        </Layout>
    );
}
 
export default Ranking;