import { FolderStyle, Input, Title, Form, Button} from "./styles";
import React, { useState } from "react";
import { Formik, FormikHelpers } from 'formik';
import { useSpring } from "@react-spring/web";

interface IProps {
  setFolderIsAdded: React.Dispatch<React.SetStateAction<boolean>>
}

const AddFolder = ({setFolderIsAdded}:IProps) => {
  const [openAddFolder, setOpenAddFolder] = useState(false);

  const addFolderProps = useSpring({
    maxHeight: openAddFolder ? 1000 : 70,
    config: openAddFolder
      ? {duration: 300, tension: 10, friction: 10}
      : {duration: 400, tension: 10, friction: 10},
  });

  const handleToggle = () => {
    setOpenAddFolder(!openAddFolder);
  };

  interface FormValues {
    title: string;
  }

  const handleSubmit = (
    values: FormValues, 
    {setSubmitting, resetForm}: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      setSubmitting(false);
      handleToggle();
      localStorage.setItem(values.title, JSON.stringify([]));
      setFolderIsAdded(true);
      resetForm();
    }, 400);
  }

  return (
    <>
      <FolderStyle style={addFolderProps}>
        <Title onClick={handleToggle}>+ Add folder</Title>
        <Formik
          initialValues={{ title: '' }}
          validate={values => {
            const errors: Partial<FormValues> = {};
            if (!values.title) {
              errors.title = 'Title is required';
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="title"
                onChange={handleChange}
                value={values.title}
                placeholder="folder title"
              />
              <Button type="submit"/>
            </Form>
          )}
        </Formik>
      </FolderStyle>
    </>
  );
};

export default AddFolder;