import React, { Fragment } from 'react';
import { IAlbumDetails } from '../../../common/models/components/IAlbumDetails';
import YoutubeVideo from './YoutubeVideo';
import { AlbumsDetailContainer } from '../../styles/albums/AlbumDetailContiner';


const AlbumDetail: React.FC<IAlbumDetails> = ({album:{title, url, user, artist, genre, votes}}): JSX.Element => {
    
    return (
        <Fragment>
            <AlbumsDetailContainer>
                <h2>{title}</h2>
                <h3>by: {artist}</h3>
                
                <p>votes: {votes}</p>
                <YoutubeVideo url={url} />
            </AlbumsDetailContainer>
        </Fragment>
        
    );
}

export default AlbumDetail;