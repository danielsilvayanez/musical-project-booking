import data from '../utils/information.json';
import styled from 'styled-components';
import HeaderBackgroundImage from '../images/background-header.jpeg';
import { BsBorderWidth } from 'react-icons/bs';
import { ContactButton } from '../components/button';

const HeaderContainer = styled.header`
  grid-area: header;
  height: 600px;
  background-image: url(${HeaderBackgroundImage});
  background-size: cover;
  background-position: center 80%;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  nav {
    margin-right: 10px;
  }
`;

const StyledNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border: 2px solid white;
  margin: 30px 10px 150px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledIcon = styled(BsBorderWidth)`
  border: 2px solid gold;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

const StyledNavMenu = styled.div`
  display: flex;
  justify-content: right;
  margin: 30px 10px 150px 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavItems = styled.nav`
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 1.5rem;

  a {
    text-decoration: none;
    /* tbc */
    color: gold;
    cursor: pointer;
  }
`;

const StyledBandName = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  align-items: bottom;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledNav>
          {data.headerNavigation.map((navItem, index) => {
            if (index === data.length - 1) {
              return <ContactButton key={index} />;
            } else {
              return (
                <StyledNavItems key={index}>
                  <a href={`#${navItem.id}`}>{navItem.label}</a>
                </StyledNavItems>
              );
            }
          })}
        </StyledNav>
        <StyledNavMenu>
          <StyledIcon />
        </StyledNavMenu>
        <StyledBandName>Daniel Silva Yañez</StyledBandName>
      </HeaderContent>
    </HeaderContainer>
  );
};
