import { Header } from '../components/header';
import styled from 'styled-components';
import { AboutArtist } from './about-artist';
import { SongLibrary } from '../components/song-library';
import { ContactForm } from '../components/contact-form';

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
        <AboutArtist />
        <SongLibrary />
        <ContactForm />
      </StyledMain>

      <footer>
        <p>footer content</p>
      </footer>
    </HomeGridContainer>
  );
};
