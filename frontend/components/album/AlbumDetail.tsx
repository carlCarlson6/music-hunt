import React, { Fragment } from 'react';
import { IAlbumDetails } from '../../common/models/components/IAlbumDetails';
import YoutubeVideo from './YoutubeVideo';
import { AlbumDetailContainer } from '../styles/albums/AlbumDetailContiner';
import { AlbumDetailInfoContainer } from '../styles/albums/AlbumDetailInfoContainer';
import Link from 'next/link';


const AlbumDetail: React.FC<IAlbumDetails> = ({album:{title, url, artist, votes, id}}): JSX.Element => {
    
    return (
        <Fragment>
            <AlbumDetailContainer>
    
                <AlbumDetailInfoContainer>
                    <Link
                        href='/albums/[albumId]'
                        as={`/albums/${id}`}
                    ><a><h2>{title}</h2></a></Link>
                    
                    <a><h3>by: {artist}</h3></a>
                    <p>votes: {votes}</p>
                
                </AlbumDetailInfoContainer>
    
                <YoutubeVideo url={url} />
                
            </AlbumDetailContainer>
        </Fragment>
        
    );
}

export default AlbumDetail;