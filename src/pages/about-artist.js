import data from '../utils/information';
import { StyledSection } from '../styles/general-styles';
import styled from 'styled-components';
import ImageDaniel from '../images/daniel-portrait.jpeg';

const images = {
  daniel: ImageDaniel,
};

const StyledAboutMe = styled.div`
  gap: 20px;
  align-items: center;
  margin-bottom: 40px;
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

const StyledArtistSection = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const AboutArtist = () => {
  return (
    <StyledSection id="Hinter den Noten">
      <StyledArtistSection>
        {data.artistInformation.map((artist) => {
          return (
            <div>
              <h3> {artist.name}</h3>
              <StyledAboutMe>
                <img
                  src={images[artist.image]}
                  height="250px"
                  alt="Portrait of Artist"
                />
                <p>{artist.description}</p>
              </StyledAboutMe>
            </div>
          );
        })}
      </StyledArtistSection>
    </StyledSection>
  );
};
