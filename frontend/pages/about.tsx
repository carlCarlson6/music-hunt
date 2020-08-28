import * as React from 'react';
import Layout from '../components/layout/Layout';
import { TitleAboutUs as TitleAboutUs } from '../components/styles/aboutUs/TitleAboutUs';
import { ContentAboutUs } from '../components/styles/aboutUs/ContentAboutUs';
import { ContainerAboutUs } from '../components/styles/aboutUs/ContainerAbout';
 
const About: React.FunctionComponent = (): JSX.Element => {
    return (
        <Layout>
            <ContainerAboutUs>
            <TitleAboutUs>welcome to music hunt</TitleAboutUs>
        
            <ContentAboutUs>
                <p>
                    share your favorite albums, discover new music, vote for them and have a nice constructive discussion with other people
                </p>
                <p>
                    this website is built as a personal project for learning purposes
                </p>
                <p>
                    the frontend uses nextjs and react, on the backend we have a graphql server with a postgresql database, all code is written with typescript
                </p>
                <p>
                    checkout the project repository <a href='https://github.com/carlCarlson6/music-hunt' target='_blank'> on github</a>
                </p> 
            </ContentAboutUs>
            </ContainerAboutUs>
        </Layout>
    );
}
 
export default About;
