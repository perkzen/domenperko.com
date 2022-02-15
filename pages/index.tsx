import type { NextPage } from 'next';
import Introduction from '../components/Introduction/Introduction';
import LayoutProvider from '../components/LayoutProvider/LayoutProvider';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

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
