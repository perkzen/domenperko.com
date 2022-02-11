import type { NextPage } from 'next';
import Introduction from '../components/Introduction/Introduction';

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Introduction />
      </main>
    </div>
  );
};

export default Home;
