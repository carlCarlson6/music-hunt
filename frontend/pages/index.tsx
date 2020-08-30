import * as React from 'react';
import Layout from '../components/layout/Layout';
import AlbumContext from '../context/album/AlbumContext';
import { IAlbumController } from '../common/models/controllers/IAlbumController';
import Spinner from '../components/Spinner';
 
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
            <h1>from index</h1>
            <p>from index</p>
        </Layout>
    );
}
 
export default Home;