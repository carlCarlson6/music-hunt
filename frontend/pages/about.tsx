import * as React from 'react';
import Layout from '../components/layout/Layout';
import { TitleAboutUs as TitleAboutUs } from '../components/styles/aboutUs/TitleAboutUs';
import { ContainerAboutUs } from '../components/styles/aboutUs/ContainerAboutUs';
import { ContentAboutUs } from '../components/styles/aboutUs/ContentAboutUs';
 
const About: React.FunctionComponent = (): JSX.Element => {
    return (
        <Layout>
            <ContainerAboutUs>

                <TitleAboutUs>hello</TitleAboutUs>
            
                <ContentAboutUs></ContentAboutUs>


            </ContainerAboutUs>
        </Layout>
    );
}
 
export default About;
