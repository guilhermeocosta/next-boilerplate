import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/Global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Custom Boilerplate</title>
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
