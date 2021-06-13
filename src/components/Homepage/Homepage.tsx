import React from 'react';

import { RecipesCategoriesList } from './RecipesCategoriesList/RecipesCategoriesList';
import { recipesCategories } from '../../consts/recipes';
import { HomepageHero } from './HomepageHero/HomepageHero';
import { Text } from '../shared/Text/Text';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styled from 'styled-components';
import { THEME_COLORS } from '../../styles/themeStyles';
import { Button } from '../shared/Button/Button';
import { useHistory } from 'react-router';

export const Homepage: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <>
      <HomepageHero />
      <Text
        as="h2"
        color="GREY2"
        textAlign="center"
        fontSize="HEADER_BIG"
        fontWeight={700}
        style={{ marginBottom: '20px' }}
      >
        Szukaj przepisów po najpopularniejszych kategoriach!
      </Text>
      <RecipesCategoriesList recipes={recipesCategories} />

      <StyledArrowIcon>
        <ArrowDownwardIcon />
      </StyledArrowIcon>

      <Text
        as="h3"
        color="GREY2"
        textAlign="center"
        fontSize="HEADER_DEFAULT"
        fontWeight={700}
        style={{ marginBottom: '20px' }}
      >
        Lub przejdź do wszystkich przepisów
      </Text>

      <Button
        color={THEME_COLORS.SECONDARY}
        onClick={() =>
          history.push({
            pathname: '/recipes'
          })
        }
      >
        Wszystkie przepisy
      </Button>
    </>
  );
};

const StyledArrowIcon = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  svg {
    color: ${THEME_COLORS.SECONDARY};
    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: ${THEME_COLORS.LIGHTGREY};
    border-radius: 50%;
  }
`;
