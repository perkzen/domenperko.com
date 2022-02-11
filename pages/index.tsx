import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Domen Perko</title>
        <meta name="description" content="Portfolio website of Domen Perko." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="title" content="Domen Perko" />
        <meta
          name="keywords"
          content="domen,pekro,Domen Perko,web developer,software developer,personal portfolio,portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Domen Perko" />
        <link rel="icon" href="/pd.png" />
      </Head>

      <main>
        <h1>Hello world</h1>
      </main>
    </div>
  );
};

export default Home;
