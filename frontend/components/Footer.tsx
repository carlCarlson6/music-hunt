import React from 'react';
import { FooterStyled } from './styles/footer/FooterStyled';
import { LogoGithub } from './styles/footer/LogoGithub';
import { LogoLinkedin } from './styles/footer/LogoLinkedin';
import { LogosContainer } from './styles/footer/LogosContainer';
 
const Footer: React.FC = (): JSX.Element => {
    return (
        <FooterStyled>
            <p>built by Carlos Acitores Deval</p>
            
            <LogosContainer>
                <a href='https://github.com/carlCarlson6' target='_blank'>
                    <LogoGithub src='static/GitHub-Logo.png' className='github-logo'></LogoGithub>
                </a>
                
                <a href='https://www.linkedin.com/in/carlos-acitores-deval-a3914a1b/' target='_blank'>
                    <LogoLinkedin src='static/linkedinlogo.png' className='linkedin-logo'></LogoLinkedin>
                </a>
            </LogosContainer>

        </FooterStyled>
    );
}
 
export default Footer;