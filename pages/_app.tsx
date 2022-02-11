import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Domen Perko</title>
        <link rel="icon" href="/pd.png" />
        <meta name="description" content="Portfolio website of Domen Perko." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="title" content="Domen Perko" />
        <meta
          name="keywords"
          content="domen,perko, Domen Perko, web developer, software developer, personal portfolio, portfolio, react, javascript, typescript, programming"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Domen Perko" />
        <meta content="Domen Perko | Software Developer" property="og:title" />
        <meta
          content="Hi my name is Domen. I'm a software developer from Slovenia. I love to work on interesting projects."
          property="og:description"
        />
      </Head>
      <Component {...pageProps} />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`}
      />
      <Script strategy="lazyOnload" id={'google_analytics'}>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
    </>
  );
}

export default MyApp;
