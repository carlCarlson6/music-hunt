import React, { Fragment, useContext } from 'react';
import { ButtonLink } from '../styles/ButtonLink';
import Link from 'next/link';
import AuthContext from '../../context/auth/AuthContext';
 
const Administration: React.FC = (): JSX.Element => {
    const {user, userServices} = useContext(AuthContext);
    
    return (
        <Fragment>
            { user.id? (
                <Fragment>
                
                    <p><span>welcome</span> {user.email}!</p>    
            
                    <ButtonLink 
                        bgColor={true}
                        onClick={()=>userServices.logout()}
                    >logout</ButtonLink>
    
                </Fragment>       
            ) : (
                <Fragment>
                
                    <Link href="/login"><ButtonLink bgColor={true}>
                        login
                    </ButtonLink></Link>
            
                    <Link href="/sign-in"><ButtonLink>
                        sign in
                    </ButtonLink></Link>
                    
                </Fragment>
            ) }
        </Fragment>
    );
}
 
export default Administration;