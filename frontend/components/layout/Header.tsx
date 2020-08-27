import React, { Fragment } from 'react';
import Link from 'next/link'
import { Logo } from '../styles/Logo';
import Navigation from './Navigation';

const Header: React.FC = (): JSX.Element => {
    return (
        <Fragment>
            <div>
                <Link href='/'>
                    <a><Logo src='static/img/logo.png'/></a>
                </Link>

                <Navigation />

            </div>


        </Fragment>
    );
}

export default Header;