import React from 'react';
import Link from 'next/link';
import { Nav } from '../styles/NavigationStyles';

const Navigation: React.FC = (): JSX.Element => {
    return (
        <Nav>
            <Link 
                href="/"
            ><a>index</a></Link>

            <Link 
                href="/ranking"
            ><a>top 5</a></Link>

            <Link 
                href="/new-album"
            ><a>new album</a></Link>

            <Link 
                href="/about"
            ><a>about us</a></Link>


        </ Nav>
    );
}
 
export default Navigation;