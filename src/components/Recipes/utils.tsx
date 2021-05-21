import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

import { difficultyStars } from '../../consts/recipes';

export const showProperNumberOfStars = (
  difficulty: keyof typeof difficultyStars
) => {
  const starsNumber: number = difficultyStars[difficulty];
  const tempArray = [0, 0, 0];

  const filterArrayByDifficultyStars = [...Array(starsNumber)].filter(
    (numberType: number, index: number) => (tempArray[index] = 1)
  );

  return tempArray.map((star: number, index: number) => (
    <React.Fragment key={`starIcon_${index}`}>
      {star === 1 ? <StarIcon /> : <StarOutlineIcon />}
    </React.Fragment>
  ));
};
