import React, { Fragment } from 'react';
import { IAlbumDetails } from '../../../common/models/components/IAlbumDetails';
import YoutubeVideo from './YoutubeVideo';
import { AlbumDetailContainer } from '../../styles/albums/AlbumDetailContiner';
import { AlbumDetailInfoContainer } from '../../styles/albums/AlbumDetailInfoContainer';


const AlbumDetail: React.FC<IAlbumDetails> = ({album:{title, url, user, artist, genre, votes}}): JSX.Element => {
    
    return (
        <Fragment>
            <AlbumDetailContainer>
    
                <AlbumDetailInfoContainer>
                    <h2>{title}</h2>
                    <h3>by: {artist}</h3>
                    <p>votes: {votes}</p>
                </AlbumDetailInfoContainer>
    
                <YoutubeVideo url={url} />
                
            </AlbumDetailContainer>
        </Fragment>
        
    );
}

export default AlbumDetail;