import React, { ReactElement, useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import styled from 'styled-components';

import { Text } from '../../shared/Text/Text';
import { TextField } from '../../shared/TextField/TextField';
const StyledFormContainer = styled.div`
  display: block;
  padding: 20px;
  background-color: red;

  h1 {
    text-align: center;
  }
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;

  button {
    margin: 25px auto 20px auto;
  }
`;

const StyledMessage = styled.div`
  text-align: center;
`;

interface FormTypeProps {
  onSubmitHandler: (email: string) => void;
  changeFormHandler: React.Dispatch<
    React.SetStateAction<'SIGNIN' | 'SIGNUP' | 'RECOVER_PASSWORD'>
  >;
}

export const RecoverPassword: React.FunctionComponent<FormTypeProps> = ({
  onSubmitHandler,
  changeFormHandler
}: FormTypeProps): ReactElement => {
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const validateFormValues = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required')
  });

  return (
    <StyledFormContainer>
      {!isEmailSent ? (
        <>
          <Text
            as="h1"
            color="GREY2"
            textAlign="center"
            fontSize="TEXT_DEFAULT"
            fontWeight={700}
          />
          <Formik
            initialValues={{
              email: ''
            }}
            validationSchema={validateFormValues}
            onSubmit={({ email }) => {
              onSubmitHandler(email);
              setIsEmailSent(true);
              setTimeout((): void => {
                changeFormHandler('SIGNIN');
              }, 5000);
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
                    name="email"
                    type="text"
                    placeholder="name@email.com"
                  />
                  {/*<Button type="submit">{t('buttons.restorePassword')}</Button>*/}
                  <p>button xd</p>
                </Form>
              </StyledForm>
            )}
          </Formik>
        </>
      ) : (
        <StyledMessage>
          <Text as="h1" />
        </StyledMessage>
      )}
    </StyledFormContainer>
  );
};
