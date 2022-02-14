import type { NextPage } from 'next';
import Introduction from '../components/Introduction/Introduction';
import LayoutProvider from '../components/LayoutProvider/LayoutProvider';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

const Home: NextPage = () => {
  // TODO add footer

  return (
    <LayoutProvider>
      <Introduction />
      <About />
      <Projects />
    </LayoutProvider>
  );
};

export default Home;
