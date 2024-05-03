import { Header } from '../components/header';
import styled from 'styled-components';

const HomeGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr aut 1fr;
`;

export const HomePage = () => {
  return (
    <HomeGridContainer>
      <Header />
      <main>
        <p>main content</p>
      </main>

      <footer>
        <p>footer content</p>
      </footer>
    </HomeGridContainer>
  );
};
