import { useRef } from "react";
import { Add, Title } from "./styles";

const AddNote = () => {
  const newNoteRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Add ref={newNoteRef}>
        <Title >+ Add note</Title>
      </Add>
    </>
  );
};

export default AddNote;