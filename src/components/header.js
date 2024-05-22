import { navigationArray } from '../utils/information';
import styled from 'styled-components';
import HeaderBackgroundImage from '../images/wes-hicks-MEL-jJnm7RQ-unsplash.jpg';
import { BsBorderWidth } from 'react-icons/bs';
import { ContactButton } from '../components/button';

const HeaderContainer = styled.header`
  height: 600px;
  background-image: url(${HeaderBackgroundImage});
  background-size: cover;
  background-position: center;
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

const StyledBandName = styled.h1`
  display: flex;
  justify-content: center;
  align-items: bottom;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledNav>
          {navigationArray.map((navItem, index) => {
            if (index === navigationArray.length - 1) {
              return (
                <p>
                  <ContactButton key={index} />
                </p>
              );
            } else {
              return (
                <p>
                  <nav key={index}>{navItem}</nav>
                </p>
              );
            }
          })}
        </StyledNav>
        <StyledNavMenu>
          <StyledIcon />
        </StyledNavMenu>
        <StyledBandName>Band Name</StyledBandName>
      </HeaderContent>
    </HeaderContainer>
  );
};
