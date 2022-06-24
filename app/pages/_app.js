import { SnipcartProvider } from 'use-snipcart';
import Header from '../components/Header/Header.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SnipcartProvider>
      <Header />
      <Component {...pageProps} />
    </SnipcartProvider>
  )
}

export default MyApp
