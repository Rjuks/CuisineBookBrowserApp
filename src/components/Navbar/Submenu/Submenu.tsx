import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { NavigationListProps } from '../../../types/navigation';
import { THEME_COLORS } from '../../../styles/themeStyles';

interface SubmenuProps {
  submenuData: NavigationListProps[];
}

export const Submenu: React.FunctionComponent<SubmenuProps> = ({
  submenuData
}: SubmenuProps): JSX.Element => (
  <>
    <StyledSubmenu>
      {submenuData.map((submenuItem: NavigationListProps, index: number) => (
        <li key={`submenu_item_${index + 1}`}>
          <Link to={submenuItem.path}>{submenuItem.name}</Link>
        </li>
      ))}
    </StyledSubmenu>
  </>
);

const SlideIn = keyframes`
  0% {
  top: 10px;
  opacity: 0;
  z-index: -1;
  }
  70% {
  top: 52px;
  opacity: 1;
  z-index: 5;
  }
  100% {
   z-index: 50;
  }
`;

export const StyledSubmenu = styled.ul`
  position: absolute;
  background-color: ${THEME_COLORS.SECONDARY};
  list-style-type: none;
  top: 52px;
  right: 0;
  min-width: 160px;
  box-shadow: 0px 13px 28px -24px rgba(0, 0, 0, 0.75);
  border-radius: 0 0 0 20px;
  padding: 12px 16px;  
   z-index: 5;
   animation: ${SlideIn} 0.8s;

  a {
    display: block;
    padding: 5px 20px;
    line-height: var(--font-paragraph-line-height-big);
    text-decoration: none;
    border-radius 20px;
    color: #fff;
    text-shadow: none;
  }

  a:hover {
    background-color: ${THEME_COLORS.PRIMARY};
  }
`;
