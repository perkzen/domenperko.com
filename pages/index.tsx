import type { NextPage } from 'next';
import Introduction from '../components/Introduction/Introduction';
import LayoutProvider from '../components/LayoutProvider/LayoutProvider';
import About from '../components/About/About';

const Home: NextPage = () => {
  return (
    <LayoutProvider>
      <Introduction />
      <About />
    </LayoutProvider>
  );
};

export default Home;
