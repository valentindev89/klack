import { useContext, useState } from 'react';
import { UserContext } from 'context/UserContext';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { useEscapeToClose } from 'hooks';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import withAuth from 'utils/apollo/withAuth';
import { awsUrl } from 'utils/helper';
import { GET_COMMUNITIES, CREATE_COMMUNITY } from 'apis/Community';
import { UPLOAD_FILE } from 'apis/File';
import { COMPANY_NAME } from 'utils/config';

import { ButtonPrimary } from 'components/UI/Button/Button';
import { Input, FileInput } from 'components/UI/Input';
import { BackIcon } from 'components/UI/Icons';

import * as S from './CommunityCreate.styled';

const CreateCommunity = () => {
  const [communityImage, setCommunityImage] = useState(null);
  const { getMe } = useContext(UserContext);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createCommunity] = useMutation(CREATE_COMMUNITY, {
    update(cache, { data: { createCommunity: community } }) {
      const { communities } = cache.readQuery({ query: GET_COMMUNITIES });
      cache.writeQuery({
        query: GET_COMMUNITIES,
        data: { communities: communities.concat([community]) },
      });
    },
  });

  const router = useRouter();
  useEscapeToClose(router.back);

  const initialValues = {
    name: '',
    description: '',
    image: '',
    url: '',
    isPrivate: false,
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(22, 'Must be shorter than 22 characters')
      .matches(/^\S+$/, 'Must contain no spaces')
      .matches(/^[^.]+$/, 'Must contain no dots')
      .required('Name is required'),
    // url: yup
    //   .string()
    //   .matches(/^([a-zA-Z0-9.-]+)$/, 'Must not contain special characters')
    //   .required('Url is required'),
    // image: yup.string().required('Image is required'),
  });

  const handleImageInput = async e => {
    if (e.target.validity.valid) {
      const file = e.target.files[0];

      setCommunityImage(file);
    }
  };

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    let image = 'http://ec2-3-20-204-242.us-east-2.compute.amazonaws.com:3000/favicon.svg';

    const url = values.name.toLowerCase().replace(' ', '-');

    if (communityImage) {
      const {
        data: {
          uploadFile: { Key },
        },
      } = await uploadFile({ variables: { file: communityImage } });
      image = `${awsUrl}${Key}`;
    }

    const { data } = await createCommunity({
      variables: {
        ...values,
        url,
        image,
      },
      errorPolicy: 'all',
    });

    setSubmitting(false);
    if (!data) {
      setErrors({ name: 'Community with this name or url already exists' });
    } else {
      await getMe();
      const {
        createCommunity: { url: communityUrl },
      } = data;
      router.push(
        `/[company]/[community]/[channel]`,
        `/${COMPANY_NAME()}/${communityUrl}/general`,
        { shallow: true }
      );
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <BackIcon onClick={() => router.back()} />
          <span style={{ marginTop: 3 }}>Create community</span>
        </S.Title>
      </S.Header>
      <S.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnChange={false}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="file"
                name="image"
                accept="image/*"
                label="Choose an avatar"
                tip="You can choose or create your own avatar 320x320 px"
                onChange={handleImageInput}
                component={FileInput}
              />
              <Field
                type="text"
                name="name"
                label="Name"
                tip="Names must be without spaces or periods and shorter than 22 characters."
                placeholder="Blogging"
                component={Input}
                autoFocus
              />
              <Field
                type="text"
                name="description"
                label="Description"
                tip="What’s this community about?"
                placeholder="Why UX and UI should remain separate"
                component={Input}
              />
              {/*
              <Field
                type="text"
                name="url"
                label="Workspace URL"
                placeholder="community"
                component={Input}
                validate={() => {}}
              />
              */}
              <ButtonPrimary
                type="submit"
                name="button"
                disabled={isSubmitting}
                style={{
                  position: 'absolute',
                  right: 22,
                  marginTop: 12,
                  marginBottom: 16,
                }}
              >
                Create
              </ButtonPrimary>
            </Form>
          )}
        </Formik>
      </S.Body>
    </S.Container>
  );
};

export default withAuth(CreateCommunity);
