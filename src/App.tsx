import { Header, Input, Cards } from 'components';
import { Box } from '@chakra-ui/react';
import fakeCardsData from 'test/fakeCardsData';

function App() {
  return (
    <Box maxW="960px" m="auto">
      <Header />
      <Input />
      <Cards data={fakeCardsData} />
    </Box>
  );
}

export default App;
