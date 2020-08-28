import React, { Fragment } from 'react';
import { ButtonLink } from '../styles/ButtonLink';
import Link from 'next/link';
import { IAdministration } from '../../common/models/IAdministration';
 
const Administration: React.FC<IAdministration> = ({user}): JSX.Element => {
    return (
        <Fragment>
            { user? (
                <Fragment>
                
                    <p>Hola: {user.email}</p>    
            
                    <ButtonLink 
                        bgColor={true}
                        onClick={()=>console.log('logout')}
                    >Logout</ButtonLink>
    
                </Fragment>       
            ) : (
                <Fragment>
                
                    <Link href="/login"><ButtonLink bgColor={true}>
                        Login
                    </ButtonLink></Link>
            
                    <Link href="/new-account"><ButtonLink>
                        Sign In
                    </ButtonLink></Link>
                    
                </Fragment>
            ) }
        </Fragment>
    );
}
 
export default Administration;