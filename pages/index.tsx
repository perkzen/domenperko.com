import type { NextPage } from 'next';
import classes from '../styles/Home.module.scss';
import Introduction from '../components/Introduction/Introduction';

const Home: NextPage = () => {
  // TODO add footer

  return (
    <div className={classes.Container}>
      <main>
        <Introduction />
      </main>
    </div>
  );
};

export default Home;
