import React from 'react';
import Link from 'next/link';
import { Nav } from '../styles/NavigationStyles';

const Navigation: React.FC = (): JSX.Element => {
    return (
        <Nav>

            <Link 
                href="/"
            ><a>Index</a></Link>

            <Link 
                href="/ranking"
            ><a>Ranking</a></Link>

            <Link 
                href="/new-album"
            ><a>New Album</a></Link>

            <Link 
                href="/about"
            ><a>About Us</a></Link>


        </ Nav>
    );
}
 
export default Navigation;