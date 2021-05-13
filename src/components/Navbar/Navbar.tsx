import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { THEME_COLORS } from '../../styles/themeStyles';
import { AccountCircle } from '@material-ui/icons';
import { NavigationList } from './NavigationList/NavigationList';
import { navMock } from '../../consts/navigation';

export const Navbar: React.FunctionComponent = () => {
  return (
    <StyledNavbar>
      <MenuIcon />
      <NavigationList navigationData={navMock} />
      <AccountCircle />
    </StyledNavbar>
  );
};

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 1rem;
  background-color: ${THEME_COLORS.PRIMARY};
`;
