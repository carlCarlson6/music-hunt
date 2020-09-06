import * as React from 'react';
import Layout from '../components/Layout';
import { BandcampIFrame } from '../components/styles/iframe/BandCampIFrame';
 
const Ranking: React.FunctionComponent = (): JSX.Element => {

    return (
        <Layout>
            <h1>from ranking</h1>
            <p>from ranking</p>
            <BandcampIFrame src="https://bandcamp.com/EmbeddedPlayer/album=56814115" seamless><a href="http://leviathvn.bandcamp.com/album/love-hates-you">Love Hates You by LEVIATHVN</a></BandcampIFrame>
        </Layout>
    );
}
 
export default Ranking;