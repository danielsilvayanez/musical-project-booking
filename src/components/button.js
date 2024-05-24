import styled from 'styled-components';

const Button = styled.button`
  background-color: #f1c40f;
  color: #2c3e50;
  font-size: 1.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f39c12;
  }
`;

const handleButtonClick = () => {
  const contactEmail = 'danielsilvayanez@gmail.com';
  const subject = 'Ich habe Interesse an einem Auftritt';
  const body =
    'Hallo Daniel, ich habe Interesse an einem Auftritt und möchte mehr Informationen erhalten.';
  window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`);
};

export const ContactButton = () => {
  return <Button onClick={handleButtonClick}>Tritt ans Mikro</Button>;
};
