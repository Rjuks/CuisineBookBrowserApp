import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AccountCircle } from '@material-ui/icons';
import { THEME_COLORS } from '../../styles/themeStyles';
import { NavigationList } from './NavigationList/NavigationList';
import { navigation, submenu } from '../../consts/navigation';
import LogoImage from '../../assets/photos/logo.jpg';
import { Submenu } from './Submenu/Submenu';

export const Navbar: React.FunctionComponent = () => {
  const [isAvatarClicked, setIsAvatarClicked] = useState<boolean>();

  return (
    <StyledNavbar>
      <div>
        <Link to="/homepage">
          <StyledLogo src={LogoImage} />
        </Link>
        <NavigationList navigationData={navigation} />
      </div>
      <AccountCircle onClick={() => setIsAvatarClicked(!isAvatarClicked)} />
      {isAvatarClicked && <Submenu submenuData={submenu} />}
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  align-items: center;
  background-color: ${THEME_COLORS.PRIMARY};
  z-index: 5;

  div {
    display: flex;

    a {
      margin: auto;
    }
  }

  svg {
    width: 30px;
    height: 30px;
    color: white;
    transition: all 0.4s ease-in 0s;
    cursor: pointer;
  }
`;

export const StyledLogo = styled.img`
  width: 36px;
  height: 36px;
  vertical-align: middle;
  margin-right: 25px;
`;
