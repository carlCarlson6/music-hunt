import {AppProps} from 'next/app';
import { MainContainer } from '../components/styles/MainContainer';


const App = ({Component, pageProps}: AppProps) => {
    return (
            <Component {...pageProps} />
    );
}

export default App;