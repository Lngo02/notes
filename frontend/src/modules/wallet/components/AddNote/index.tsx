import React, { useEffect, useRef, useState } from "react";
import { Add, BodyInput, Title, TitleInput, Form, Button } from "./styles";
import { Formik, FormikHelpers } from "formik";
import { useSpring } from "@react-spring/web";

interface IProps {
  openAddNote: boolean;
  setOpenAddNote: React.Dispatch<React.SetStateAction<boolean>>;
  folder: string;
  setNoteIsAdded: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNote = ({openAddNote, setOpenAddNote, folder, setNoteIsAdded}:IProps) => {
  const newNoteRef = useRef<HTMLDivElement | null>(null);
  const [noteHeight, setNoteHeight] = useState(50); // Set height on default

  // useEffect to set height
  useEffect(() => {
    setNoteHeight(
      newNoteRef.current
        ? openAddNote
          ? newNoteRef.current.scrollHeight
          : 40
        :40
    );
  }, [openAddNote]);

  // Animation Props
  const addNoteProps = useSpring({
    maxHeight: noteHeight,
    config: openAddNote
      ? {duration: 300, tension: 10, friction: 10}
      : {duration: 400, tension: 10, friction: 10}
  });

  // Toggle
  const handleToggle = () => {
    setOpenAddNote(!openAddNote);
  }

  // Types
  interface FormValues {
    title: string;
    body: string;
  }

  // Submit
  // Place notes into a folder
  const handleSubmit = (values: FormValues, {setSubmitting, resetForm}: FormikHelpers<FormValues>) => {
    setTimeout(() => {
      setSubmitting(false);
      // Grab the locally stored item
      const currentFolder = localStorage.getItem(folder);
      // Get the notes in the current folder
      const notes = currentFolder ? JSON.parse(currentFolder): [];
      // Add the new note to the notes
      const newNoteAdded = [values.title, values.body];
      notes.push(newNoteAdded);
      // Update the notes in folder
      const updatedNotes = JSON.stringify(notes);
      localStorage.setItem(folder, updatedNotes);
      handleToggle();
      setNoteIsAdded(true);
      // reset form
      resetForm();
    }, 400)
  }

  return (
    <>
      <Add ref={newNoteRef} style={addNoteProps}>
        <Title onClick={handleToggle}>+ Add note</Title>
        {/* Only show if open add note is clicked */}
        {openAddNote && (
          <Formik
            initialValues={{title: '', body: ''}}
            validate={(values: FormValues) => {
              const errors: Partial<FormValues> = {};
              if (!values.title) {
                errors.title = "Title is required";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({values, handleChange, handleSubmit}) => (
              <Form onSubmit={handleSubmit}>
                <TitleInput
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={values.title}
                  placeholder="Note title"  
                />
                <BodyInput
                  type="textarea"
                  name="body"
                  onChange={handleChange}
                  value={values.body}
                  placeholder="Type something..."
                />
                <Button type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
        )}
      </Add>
    </>
  );
};

export default AddNote;