import data from '../utils/information';
import { StyledSection } from '../styles/general-styles';
import styled from 'styled-components';
import ImageDaniel from '../images/daniel-portrait.jpeg';

const images = {
  daniel: ImageDaniel,
};

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

export const AboutArtist = () => {
  return (
    <StyledSection id="Hinter den Noten">
      <h1>Hinter den Noten</h1>
      {data.artistInformation.map((artist) => {
        console.log(artist.image);
        return (
          <>
            <h2> {artist.name}</h2>
            <StyledAboutMe>
              <img
                src={images[artist.image]}
                height="250px"
                alt="Portrait of Artist"
              />
              <p>{artist.description}</p>
            </StyledAboutMe>
            <hr />
          </>
        );
      })}
    </StyledSection>
  );
};
