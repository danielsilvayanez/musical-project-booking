import { aboutMeDescription } from '../utils/information';
import { StyledSection } from '../styles/general-styles';

export const AboutMe = () => {
  return (
    <StyledSection>
      <h1>Hinter den Noten</h1>
      <p>{aboutMeDescription}</p>
    </StyledSection>
  );
};
