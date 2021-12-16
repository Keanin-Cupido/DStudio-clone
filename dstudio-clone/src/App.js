import { VStack } from '@chakra-ui/react';
import Banner from './components/Banner';
import Header from './components/Header';
import MainSection from './components/MainSection';

function App() {
  return (
        <VStack backgroundColor="white" width="100vw">
          <Header />
          <Banner />
          <MainSection />
        </VStack>
  );
}

export default App;
