import { aboutMeDescription } from '../utils/information';
import { StyledSection } from '../styles/general-styles';
import styled from 'styled-components';
import Portrait from '../images/daniel-portrait.jpeg';

const StyledAboutMe = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  img {
    border-radius: 30%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const AboutMe = () => {
  return (
    <StyledSection>
      <h1>Hinter den Noten</h1>
      <StyledAboutMe>
        <img src={Portrait} height="250px" alt="Portrait of Daniel" />
        <p>{aboutMeDescription}</p>
      </StyledAboutMe>
    </StyledSection>
  );
};
