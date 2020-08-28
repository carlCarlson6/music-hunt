import React from 'react';
import Link from 'next/link'
import { Logo } from '../styles/Logo';
import Navigation from './Navigation';
import Administration from './Administration';
import { IUser } from '../../common/models/IUser';
import { AdministrationContainer } from '../styles/AdministrationContainer';
import { HeaderStyled } from '../styles/header/HeaderStyled';
import { HeaderContainer } from '../styles/header/HeaderContainer';
import { HeaderControlContainer } from '../styles/header/HeaderControlContainer';

const Header: React.FC = (): JSX.Element => {
    let user: IUser;
    // = {email:'test', id:'123'};

    return (
        <HeaderStyled>
            <HeaderContainer>
                
                <HeaderControlContainer>
                    <Link href='/'>
                        <a><Logo src='static/img/logo.png'/></a>
                    </Link>

                    <Navigation />
                </HeaderControlContainer>

                <AdministrationContainer>
                    <Administration user={user}/>
                </AdministrationContainer>

            </HeaderContainer>
        </HeaderStyled>
    );
}

export default Header;