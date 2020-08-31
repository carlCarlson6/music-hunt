import React from 'react';
import { IYoutubeVideo } from '../../common/models/components/IYoutubeVideo';
import { YoutubeIFrame } from '../styles/iframe/YoutubeIFrame';
import { getYoutubeIdFromUrl } from '../../common/utils/getYoutubeIdFromUrl';

const YoutubeVideo: React.FC<IYoutubeVideo> = ({url}) => {
    const youtubeId: string = getYoutubeIdFromUrl(url);

    return (
        <YoutubeIFrame 
            src={`https://www.youtube.com/embed/${youtubeId}`} 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
        />
    );
}

export default YoutubeVideo;