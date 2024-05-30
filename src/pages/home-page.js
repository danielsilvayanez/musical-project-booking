import { Header } from '../components/header';
import styled from 'styled-components';
import { AboutMe } from './about-daniel';
import { SongLibrary } from '../components/song-library';

const HomeGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'header' 'main' 'footer';
`;

const StyledMain = styled.main`
  grid-area: main;
  padding: 20px 3.5em;
  text-align: left;
`;

export const HomePage = () => {
  return (
    <HomeGridContainer>
      <Header />
      <StyledMain>
        <AboutMe />
        <SongLibrary />
      </StyledMain>

      <footer>
        <p>footer content</p>
      </footer>
    </HomeGridContainer>
  );
};
