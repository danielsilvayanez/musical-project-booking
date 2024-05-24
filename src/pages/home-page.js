import { Header } from '../components/header';
import styled from 'styled-components';
import { aboutMeDescription } from '../utils/information';

const HomeGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr aut 1fr;
`;

const AboutMeSection = styled.section`
  margin: 20px 30px;
`;

const AboutMeContainer = styled.section`
  padding: 20px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const HomePage = () => {
  return (
    <HomeGridContainer>
      <Header />
      <main>
        <AboutMeSection>
          <AboutMeContainer>
            <h1>Hinter den Noten</h1>
            <p>{aboutMeDescription}</p>
          </AboutMeContainer>
        </AboutMeSection>
      </main>

      <footer>
        <p>footer content</p>
      </footer>
    </HomeGridContainer>
  );
};
