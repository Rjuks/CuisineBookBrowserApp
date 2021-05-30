import React from 'react';
import styled from 'styled-components';
import { Text } from '../../shared/Text/Text';

export const HomepageHero: React.FunctionComponent = () => {
  return (
    <StyledHero>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffb37d"
          fillOpacity="1"
          d="M0,64L1440,256L1440,0L0,0Z"
        ></path>
      </svg>
      <StyledHeroContent>
        <img src="https://image.flaticon.com/icons/png/512/526/526194.png" />

        <div>
          <Text as="h1" textAlign="left" fontSize="HEADER_BIG" fontWeight={700}>
            Witaj na naszej książke kucharskiej
          </Text>
          <Text
            as="p"
            textAlign="left"
            fontSize="TEXT_DEFAULT"
            fontWeight={700}
          >
            Znajdziesz tutaj przepisy bla bla bla.... Możesz stworzyć przepis
            bla bla... mozesz także użyc kalkulatora którego nie ma
          </Text>
        </div>
      </StyledHeroContent>
    </StyledHero>
  );
};

export const StyledHero = styled.section`
  position: relative;
`;

export const StyledHeroContent = styled.div`
  position: absolute;
  left: 45%;
  top: 30%;
  transform: translate(-30%, -45%);
  display: flex;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    transform: rotate(-20deg);
  }

  div {
    max-width: 600px;
    margin-left: 40px;

    h1,
    p {
      color: #fff;
    }
  }
`;
