import data from '../utils/information';
import { StyledSection } from '../styles/general-styles';
import styled from 'styled-components';

const StyledUl = styled.ul`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style-type: none;

  li {
    width: 100%;
    border: 2px solid gold;
  }
`;

export const SongLibrary = () => {
  return (
    <StyledSection>
      <h1>Songbibliothek</h1>
      <p>
        Hier findet ihr eine Übersicht über Songs, die ich im Center Parcs
        Bispinger Heide singe. Es ist ein lebendes Dokument, weil immer wieder
        neue Lieder dazukommen, oder auch rausfliegen Wichtig zu wissen ist,
        dass ich gerne auch Lieder einstudiere für spezielle Vernstaltungen.
        Anfragen könnt ihr gerne jederzeit schicken!
      </p>
      <StyledUl>
        {data.songLibrary.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </StyledUl>
    </StyledSection>
  );
};
