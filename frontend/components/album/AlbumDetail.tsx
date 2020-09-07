import React, { Fragment } from 'react';
import { IAlbumDetails } from '../../common/models/components/IAlbumDetails';
import YoutubeVideo from './YoutubeVideo';
import { AlbumDetailContainer, AlbumDetailInfoContainer } from '../styles/albums/AlbumDetailStyles';
import Link from 'next/link';
import { countTotalVotes } from '../../common/utils/CountTotalVotes';


const AlbumDetail: React.FC<IAlbumDetails> = ({album:{title, url, artist, votes, id}}): JSX.Element => {
    
    return (
        <Fragment>
            <AlbumDetailContainer>
    
                <Link
                    href='/albums/[albumId]'
                    as={`/albums/${id}`}
                >
                    <AlbumDetailInfoContainer>
                        <h2>{title}</h2>
                        <h3>by: {artist}</h3>
                        <p>votes: {countTotalVotes(votes)}</p>
                    </AlbumDetailInfoContainer>
                </Link>

                <YoutubeVideo url={url} />
                
            </AlbumDetailContainer>
        </Fragment>
        
    );
}

export default AlbumDetail;