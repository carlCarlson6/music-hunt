import React from 'react';
import Link from 'next/link'
import { LogoWebSite } from './styles/LogoWebSite';
import Navigation from './Navigation';
import Administration from './Administration';
import { AdministrationContainer } from './styles/AdministrationContainer';
import { HeaderStyled } from './styles/header/HeaderStyled';
import { HeaderContainer } from './styles/header/HeaderContainer';
import { HeaderControlContainer } from './styles/header/HeaderControlContainer';

const Header: React.FC = (): JSX.Element => {
    
    return (
        <HeaderStyled>
            <HeaderContainer>
                
                <HeaderControlContainer>
                    <Link href='/'>
                        <a><LogoWebSite src='/static/images/logo.png' alt='logo'/></a>
                    </Link>

                    <Navigation />
                </HeaderControlContainer>

                <AdministrationContainer>
                    <Administration />
                </AdministrationContainer>

            </HeaderContainer>
        </HeaderStyled>
    );
}

export default Header;