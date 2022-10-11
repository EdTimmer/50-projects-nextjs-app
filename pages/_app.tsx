import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar/NavBar';
import GlobalStyle from '../styles/globalstyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
