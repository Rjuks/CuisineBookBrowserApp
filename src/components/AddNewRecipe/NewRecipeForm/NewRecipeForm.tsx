import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import TimerIcon from '@material-ui/icons/Timer';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CategoryIcon from '@material-ui/icons/Category';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import PhotoIcon from '@material-ui/icons/Photo';

import { Text } from '../../shared/Text/Text';
import { TextField } from '../../shared/Formik/TextField/TextField';
import { Button } from '../../shared/Button/Button';
import { THEME_COLORS } from '../../../styles/themeStyles';
import { SelectInputFormik } from '../../shared/Formik/SelectInput/SelectInput';
import {
  recipesCategoriesOptions,
  recipesDifficultyOptions,
  recipesPreparationTimeOptions
} from '../../../consts/recipes';
import { TextArea } from '../../shared/Formik/TextArea/TextArea';
import { Recipe } from '../../../store/features/recipe/recipeTypes';

interface NewRecipeFormProps {
  onSubmitHandler: (recipe: Recipe) => void;
}

export const NewRecipeForm: React.FunctionComponent<NewRecipeFormProps> = ({
  onSubmitHandler
}: NewRecipeFormProps) => {
  const validateFormValues = Yup.object({
    title: Yup.string().required('Podaj tytuł przepisu!'),
    ingredients: Yup.string().required('Podaj składniki!'),
    imageLink: Yup.string().required('Podaj ścieżkę!'),
    difficulty: Yup.string().required('Podaj poziom trudności!'),
    preparationTime: Yup.string().required('Podaj czas przygotowania!'),
    calorificValue: Yup.number().required('Podaj ilość kalorii!'),
    preparingMethod: Yup.string().required(
      'Metoda przygotowania jest wymagana!'
    ),
    cathegory: Yup.string().required('Wybierz kategorie!')
  });
  return (
    <StyledFormContainer>
      <Text
        as="h1"
        color="GREY2"
        textAlign="center"
        fontSize="TEXT_BIG"
        fontWeight={700}
      >
        Stwórz nowy przepis
      </Text>

      <Formik
        initialValues={{
          title: '',
          ingredients: '',
          imageLink: '',
          difficulty: 'Latwy',
          preparationTime: '',
          calorificValue: 0,
          preparingMethod: '',
          cathegory: ''
        }}
        validationSchema={validateFormValues}
        onSubmit={(values: Recipe) => {
          onSubmitHandler(values);
        }}
      >
        {() => (
          <StyledForm>
            <Form>
              <TextField
                labelProps={{
                  fontSize: 'TEXT_DEFAULT',
                  fontWeight: 700,
                  color: 'GREY2'
                }}
                name="title"
                type="text"
                icon={<AssignmentIcon />}
                placeholder="Tytuł przepisu"
              />

              <TextField
                labelProps={{
                  fontSize: 'TEXT_DEFAULT',
                  fontWeight: 700,
                  color: 'GREY2'
                }}
                name="ingredients"
                type="text"
                icon={<FastfoodIcon />}
                placeholder="Składniki"
              />

              <TextField
                labelProps={{
                  fontSize: 'TEXT_DEFAULT',
                  fontWeight: 700,
                  color: 'GREY2'
                }}
                name="imageLink"
                type="text"
                icon={<PhotoIcon />}
                placeholder="Link URL do zdjęcia"
              />

              <SelectInputFormik
                name="difficulty"
                icon={<ChildCareIcon />}
                options={recipesDifficultyOptions}
              />

              <SelectInputFormik
                name="preparationTime"
                icon={<TimerIcon />}
                options={recipesPreparationTimeOptions}
              />

              <TextField
                labelProps={{
                  fontSize: 'TEXT_DEFAULT',
                  fontWeight: 700,
                  color: 'GREY2'
                }}
                name="calorificValue"
                type="number"
                icon={<ChatBubbleIcon />}
                placeholder="Kalorie"
              />

              <TextArea
                labelProps={{
                  fontSize: 'TEXT_DEFAULT',
                  fontWeight: 700,
                  color: 'GREY2'
                }}
                name="preparingMethod"
                type="text"
                icon={<LocalDiningIcon />}
                placeholder="Sposób przygotowania"
              />
              <SelectInputFormik
                name="cathegory"
                icon={<CategoryIcon />}
                options={recipesCategoriesOptions}
              />
              <div className="buttons_wrapper">
                <Button type="submit">Dodaj przepis</Button>
                <Button type="reset">Wyczyść</Button>
              </div>
            </Form>
          </StyledForm>
        )}
      </Formik>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  display: block;
  padding: 20px;
  background-color: ${THEME_COLORS.SECONDARY};
  border-radius: 20px;

  .additional-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .cta-button {
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${THEME_COLORS.SECONDARY};

  .buttons_wrapper {
    display: flex;
    margin: 25px auto 20px auto;
  }

  span {
    text-align: center;
  }
`;
