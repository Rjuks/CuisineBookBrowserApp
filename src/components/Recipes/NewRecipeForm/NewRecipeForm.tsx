import React from 'react';
import { Text } from '../../shared/Text/Text';
import { Form, Formik } from 'formik';
import { TextField } from '../../shared/TextField/TextField';
import PersonIcon from '@material-ui/icons/Person';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Button } from '../../shared/Button/Button';
import * as Yup from 'yup';
import styled from 'styled-components';
import { THEME_COLORS } from '../../../styles/themeStyles';

export const NewRecipeForm = () => {
  const validateFormValues = Yup.object({
    username: Yup.string().required('Nazwa użytkownika jest wymagana!'),
    password: Yup.string().required('Hasło jest wymagane!')
  });
  return (
    <StyledFormContainer>
      <p>dwadwa</p>
      <Text
        as="h1"
        color="GREY2"
        textAlign="center"
        fontSize="TEXT_BIG"
        fontWeight={700}
      >
        Zaloguj się
      </Text>

      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={validateFormValues}
        onSubmit={(values) => {
          // onSubmitHandler(values);
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
                name="username"
                type="text"
                icon={<PersonIcon />}
                placeholder="Nazwa użytkownika"
              />

              <TextField
                labelProps={{
                  fontSize: 'TEXT_DEFAULT',
                  fontWeight: 700,
                  color: 'GREY2'
                }}
                name="password"
                type="password"
                icon={<CheckCircleIcon />}
                placeholder="Hasło"
              />

              {/*<div className="additional-container">*/}
              {/*  <Text as="span" fontSize="TEXT_DEFAULT">*/}
              {/*    Zapomniałeś hasła?*/}
              {/*  </Text>*/}
              {/*  <Text*/}
              {/*    className="cta-button"*/}
              {/*    onClick={() => changeFormHandler('RECOVER_PASSWORD')}*/}
              {/*    as="span"*/}
              {/*    fontSize="TEXT_DEFAULT"*/}
              {/*  >*/}
              {/*    Zresetuj hasło*/}
              {/*  </Text>*/}
              {/*</div>*/}
              <Button type="submit">Zaloguj się</Button>
            </Form>
          </StyledForm>
        )}
      </Formik>
    </StyledFormContainer>
  );
};

{
  /*<p>title</p>*/
}
{
  /*<p>ingredients</p>*/
}
{
  /*<p>imagelink</p>*/
}
{
  /*<p>difficulty</p>*/
}
{
  /*<p>preparationTime</p>*/
}
{
  /*<p>calorificValue</p>*/
}
{
  /*<p>preparingMethod</p>*/
}
{
  /*<p>cathegory</p>*/
}

const StyledFormContainer = styled.div`
  display: block;
  padding: 20px;
  max-width: 500px;
  background-color: ${THEME_COLORS.PRIMARY};
  border-radius: 0 0 20px 20px;

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
  background-color: ${THEME_COLORS.PRIMARY};

  button {
    margin: 25px auto 20px auto;
  }

  span {
    text-align: center;
  }
`;
