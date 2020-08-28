import React from 'react';
import { FooterStyled } from '../styles/footer/FooterStyled';
import { FooterContainer } from '../styles/footer/FooterContainer';
import { Logo } from '../styles/Logo';
 
const Footer: React.FC = (): JSX.Element => {
    return (
        <FooterStyled>
                <p>built by Carlos Acitores Deval</p>

                <a href='https://github.com/carlCarlson6' target='_blank'>
                    <Logo src='static/img/GitHub-Logo.png' className='github-logo'></Logo>
                </a>
                
                <a href='https://www.linkedin.com/in/carlos-acitores-deval-a3914a1b/' target='_blank'>
                    <Logo src='static/img/linkedinlogo.png' className='linkedin-logo'></Logo>
                </a>

        </FooterStyled>
    );
}
 
export default Footer;