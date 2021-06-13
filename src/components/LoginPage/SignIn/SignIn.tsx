import React, { ReactElement } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import { TextField } from '../../shared/Formik/TextField/TextField';
import { Text } from '../../shared/Text/Text';

import PersonIcon from '@material-ui/icons/Person';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Button } from '../../shared/Button/Button';
import { THEME_COLORS } from '../../../styles/themeStyles';
import { UserCredentials } from '../../../store/features/user/userTypes';

interface FormTypeProps {
  changeFormHandler: React.Dispatch<
    React.SetStateAction<'SIGNIN' | 'SIGNUP' | 'RECOVER_PASSWORD'>
  >;
  onSubmitHandler: (credentials: UserCredentials) => void;
}

export const SignIn: React.FunctionComponent<FormTypeProps> = ({
  changeFormHandler,
  onSubmitHandler
}: FormTypeProps): ReactElement => {
  const validateFormValues = Yup.object({
    username: Yup.string().required('Nazwa użytkownika jest wymagana!'),
    password: Yup.string().required('Hasło jest wymagane!')
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
        Zaloguj się
      </Text>

      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={validateFormValues}
        onSubmit={(values) => {
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
      <div className="additional-container">
        <Text as="p" fontSize="TEXT_DEFAULT">
          Nie masz konta?
        </Text>

        <Text
          className="cta-button"
          onClick={() => changeFormHandler('SIGNUP')}
          as="span"
          fontSize="TEXT_DEFAULT"
          fontWeight={700}
        >
          Zarejestruj się.
        </Text>
      </div>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  display: block;
  padding: 20px;
  background-color: ${THEME_COLORS.SECONDARY};
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
  background-color: ${THEME_COLORS.SECONDARY};

  button {
    margin: 25px auto 20px auto;
  }

  span {
    text-align: center;
  }
`;
