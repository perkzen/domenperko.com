import type { NextPage } from 'next';
import Introduction from '../components/Introduction/Introduction';
import LayoutProvider from '../components/LayoutProvider/LayoutProvider';

const Home: NextPage = () => {
  // TODO add footer

  return (
    <LayoutProvider>
      <Introduction />
    </LayoutProvider>
  );
};

export default Home;
