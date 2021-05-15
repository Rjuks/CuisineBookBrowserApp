import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { THEME_COLORS } from '../../../styles/themeStyles';

interface NavigationListProps {
  to: string;
  name: string;
}

interface Data {
  navigationData: NavigationListProps[];
}

export const NavigationList: React.FunctionComponent<Data> = ({
  navigationData
}: Data) => {
  return (
    <StyledNavigationList>
      {navigationData.map((navigation: NavigationListProps) => (
        <Link to={navigation.to} key={`navItem_${navigation.name}`}>
          <li>{navigation.name}</li>
        </Link>
      ))}
    </StyledNavigationList>
  );
};

export const StyledNavigationList = styled.ul`
  display: flex;
  list-style-type: none;
  background-color: ${THEME_COLORS.PRIMARY};

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  li {
    padding: 1rem 1rem;
    color: white;
    background-color: ${THEME_COLORS.SECONDARY};
    transition: all 0.5s ease;

    &:hover {
      color: ${THEME_COLORS.SECONDARY};
      background-color: white;
    }
  }
`;
