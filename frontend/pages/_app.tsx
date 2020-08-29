import {AppProps} from 'next/app';
import { MainContainer } from '../components/styles/MainContainer';
import AuthState from '../context/auth/AuthState';


const App = ({Component, pageProps}: AppProps) => {
    return (
        <AuthState>
            <Component {...pageProps} />
        </AuthState>    
    );
}

export default App;