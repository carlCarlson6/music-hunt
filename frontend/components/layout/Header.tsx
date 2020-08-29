import React from 'react';
import Link from 'next/link'
import { LogoWebSite } from '../styles/LogoWebSite';
import Navigation from './Navigation';
import Administration from './Administration';
import { IUser } from '../../common/models/entities/IUser';
import { AdministrationContainer } from '../styles/AdministrationContainer';
import { HeaderStyled } from '../styles/header/HeaderStyled';
import { HeaderContainer } from '../styles/header/HeaderContainer';
import { HeaderControlContainer } from '../styles/header/HeaderControlContainer';
import { IHeader } from '../../common/models/components/IHeader';

const Header: React.FC<IHeader> = ({user}): JSX.Element => {
    
    return (
        <HeaderStyled>
            <HeaderContainer>
                
                <HeaderControlContainer>
                    <Link href='/'>
                        <a><LogoWebSite src='static/img/logo.png'/></a>
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