import {AppProps} from 'next/app';
import AuthState from '../context/auth/AuthState';
import AlbumState from '../context/album/AlbumState';


const App = ({Component, pageProps}: AppProps) => {
    return (
        <AuthState>
            <AlbumState>
                <Component {...pageProps} />
            </AlbumState>
        </AuthState>    
    );
}

export default App;