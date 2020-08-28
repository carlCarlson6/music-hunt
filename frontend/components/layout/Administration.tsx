import React, { Fragment } from 'react';
import { ButtonLink } from '../styles/ButtonLink';
import Link from 'next/link';
import { IAdministration } from '../../common/models/IAdministration';
 
const Administration: React.FC<IAdministration> = ({user}): JSX.Element => {
    return (
        <Fragment>
            { user? (
                <Fragment>
                
                    <p>hello: {user.email}</p>    
            
                    <ButtonLink 
                        bgColor={true}
                        onClick={()=>console.log('logout')}
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