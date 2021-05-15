import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AccountCircle } from '@material-ui/icons';
import { THEME_COLORS } from '../../styles/themeStyles';
import { NavigationList } from './NavigationList/NavigationList';
import { navMock } from '../../consts/navigation';
import LogoImage from '../../assets/photos/logo.jpg';

// todo set proper avatar with text
export const Navbar: React.FunctionComponent = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <StyledLogo src={LogoImage} />
      </Link>
      <NavigationList navigationData={navMock} />
      <AccountCircle />
    </StyledNavbar>
  );
};

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  background-color: ${THEME_COLORS.PRIMARY};

  svg {
    color: white;
  }
`;

export const StyledLogo = styled.img`
  width: 50px;
  height: 50px;
`;
