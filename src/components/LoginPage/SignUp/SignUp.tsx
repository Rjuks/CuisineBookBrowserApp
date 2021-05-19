import React, { ReactElement } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { TextField } from '../../shared/TextField/TextField';
import { Text } from '../../shared/Text/Text';
import { THEME_COLORS } from '../../../styles/themeStyles';
import { Button } from '../../shared/Button/Button';
import PersonIcon from '@material-ui/icons/Person';

interface FormTypeProps {
  changeFormHandler: React.Dispatch<
    React.SetStateAction<'SIGNIN' | 'SIGNUP' | 'RECOVER_PASSWORD'>
  >;
  onSubmitHandler: (credentials: any) => void;
}

export const SignUp: React.FunctionComponent<FormTypeProps> = ({
  changeFormHandler,
  onSubmitHandler
}: FormTypeProps): ReactElement => {
  const validateFormValues = Yup.object({
    email: Yup.string()
      .email('Email jest niepoprawny')
      .required('Email jest wymagany!'),
    password: Yup.string().required('Hasło jest wymagane!'),
    username: Yup.string().required('Nazwa użytkownika jest wymagana!')
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
        Rejestracja
      </Text>
      <Formik
        initialValues={{
          username: '',
          password: '',
          email: ''
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
                  color: 'GREY1'
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
                  color: 'GREY1'
                }}
                name="email"
                type="text"
                icon={<EmailIcon />}
                placeholder="name@email.com"
              />

              <TextField
                labelProps={{
                  fontSize: 'TEXT_DEFAULT',
                  fontWeight: 700,
                  color: 'GREY1'
                }}
                name="password"
                type="password"
                icon={<CheckCircleIcon />}
                placeholder="Hasło"
              />
              <Button type="submit">Zarejestruj się</Button>
            </Form>
          </StyledForm>
        )}
      </Formik>
      <div className="additional-container">
        <Text as="span" fontSize="TEXT_DEFAULT">
          Masz już konto?
        </Text>
        <Text
          className="cta-button"
          onClick={() => changeFormHandler('SIGNIN')}
          as="span"
          fontSize="TEXT_DEFAULT"
          fontWeight={700}
        >
          Zaloguj się
        </Text>
      </div>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  display: block;
  padding: 20px;
  background-color: ${THEME_COLORS.PRIMARY};

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
`;
