import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { THEME_COLORS } from '../../../styles/themeStyles';
import { NavigationListProps } from '../../../types/navigation';

interface Data {
  navigationData: NavigationListProps[];
}

export const NavigationList: React.FunctionComponent<Data> = ({
  navigationData
}: Data) => {
  return (
    <StyledNavigationList>
      {navigationData.map((navigation: NavigationListProps) => (
        <Link to={navigation.path} key={`navItem_${navigation.name}`}>
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
    text-decoration: none;
  }

  li {
    padding: 1rem 1rem;
    color: white;
    background-color: ${THEME_COLORS.PRIMARY};
    transition: all 0.5s ease;

    &:hover {
      color: ${THEME_COLORS.SECONDARY};
      background-color: white;
    }
  }
`;
