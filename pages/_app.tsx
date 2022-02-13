import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Domen Perko</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="icon" href="/pd.png" />
        <meta name="description" content="Portfolio website of Domen Perko." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Domen Perko" />
        <meta name="title" content="Domen Perko" />
        <meta
          name="keywords"
          content="domen,perko, Domen Perko, web developer, 
          software developer, personal portfolio, portfolio, react, javascript, typescript, programming, website"
        />
        <meta content="Domen Perko | Software Developer" property="og:title" />
        <meta
          content=" Hi, there I'm Domen. I'm a software developer from Slovenia.
          I've started programming in 2020, since then I've build a
          lot of interesting project, by building them I've added a lot of
          new skills to my repertoire. The best thing I find amazing in software
          developing is that you can make your life much easier by automating
          boring tasks that you normally don't want to do."
          property="og:description"
        />
        <meta property="og:image" content="/pd_square.png" />
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
