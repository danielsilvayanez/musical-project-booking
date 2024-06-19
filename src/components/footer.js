import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  color: white;
  text-align: left;
  padding: 10px;
  margin-top: 20px;
  gap: 20px;
  a {
    color: white;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>Kontakt</p>
        <hr></hr>
        <p>E-Mail: test@test.de</p>
        <p>Telefon: 0123456789</p>
      </div>
      <div>
        <p>Impressum</p>
        <p>Datenschutz</p>
      </div>
    </StyledFooter>
  );
};
