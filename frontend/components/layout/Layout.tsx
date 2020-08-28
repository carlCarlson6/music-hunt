import React, {Fragment} from 'react';
import Head from 'next/head';
import { ILayout } from '../../common/models/ILayout';
import Header from './Header';
 
const Layout: React.FC<ILayout> = (props): JSX.Element => (
    <Fragment>
        <Head>
            <title>music-hunt</title>

            <link rel="stylesheet"  href="/static/css/layout.css" />
            <link rel="stylesheet"  href="/static/css/spinner.css"/>

            <link rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
                integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
                crossOrigin="anonymous" 
            />

            <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet" />

        </Head>

        <Header />

        <main>
            {props.children}
        </main>

    </Fragment>
);

 
export default Layout;