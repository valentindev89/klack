import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { ButtonPrimary } from 'components/UI/Button/Button';
import { Input } from 'components/UI/Input';
import { UserContext } from 'context/UserContext';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component';
import { LOGIN } from 'apis/User';
import * as S from './styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Login = () => {
  const { signin } = useContext(UserContext);
  const onCompleted = data => {
    // Store the token in cookie 30 days
    signin(data.login.token);
  };

  const [login, { error }] = useMutation(LOGIN, { onCompleted });

  const onSuccessTwitter = response => {
    response.json().then(body => {
      // Store the token in cookie
      login({
        variables: {
          email: body.profile.emails[0].value,
          password: '',
          social: JSON.stringify(body.profile),
        },
      });
    });
  };

  const onFailed = err => {
    alert(err);
  };

  const onSubmit = ({ email, password }, { setSubmitting }) => {
    setSubmitting(true);
    login({
      variables: {
        email,
        password,
        social: '',
      },
    });
    setSubmitting(false);
  };

  return (
    <S.Container>
      <S.Form>
        <div />
        <div style={{ marginTop: -150 }}>
          <S.Heading>Sign In</S.Heading>
          <S.Paragraph style={{ marginBottom: 10 }}>To continue, log in to klack</S.Paragraph>
          <TwitterLogin
            loginUrl={`${process.env.BACKEND_URL}/api/v1/auth/twitter`}
            onFailure={onFailed}
            onSuccess={onSuccessTwitter}
            requestTokenUrl={`${process.env.BACKEND_URL}/api/v1/auth/twitter/reverse`}
            showIcon
            forceLogin
            style={{ padding: 0 }}
          >
            <ButtonPrimary
              style={{
                marginTop: 18,
                width: 250,
                height: 50,
              }}
            >
              <svg viewBox="0 0 24 24" fill="white" style={{ margin: '-2px 4px 0 0', width: 16 }}>
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </g>
              </svg>
              Continue with Twitter
            </ButtonPrimary>
          </TwitterLogin>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="example@example.com"
                  component={Input}
                />
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="********"
                  component={Input}
                />
                <S.Footer>
                  <ButtonPrimary
                    type="submit"
                    name="button"
                    disabled={isSubmitting}
                    style={{ marginLeft: 0 }}
                  >
                    {isSubmitting ? 'Log in...' : 'Log in'}
                  </ButtonPrimary>
                </S.Footer>
              </Form>
            )}
          </Formik>
          {error && <p className="error">{error.graphQLErrors[0].message}</p>}

          <p />
        </div>
        <i />
      </S.Form>
      <S.Image />
    </S.Container>
  );
};

export default Login;
