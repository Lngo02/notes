import { FolderStyle, Title} from "./styles";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSpring } from "@react-spring/web";

const AddFolder = () => {
  const [openAddFolder, setOpenAddFolder] = useState(false);

  const handleToggle = () => {
    setOpenAddFolder(!openAddFolder);
  };

  const addFolderProps = useSpring({
    maxHeight: openAddFolder ? 1000 : 70,
    config: openAddFolder
      ? {duration: 300, tension: 10, friction: 10}
      : {duration: 400, tension: 10, friction: 10},
  });

  return (
    <>
      <FolderStyle style={addFolderProps}>
        <Title onClick={handleToggle}>+ Add folder</Title>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </FolderStyle>
    </>
  );
};

export default AddFolder;