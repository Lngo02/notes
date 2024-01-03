import { Card, TextArea, Title, Text, Header } from "./styles";
import { useRef, useEffect } from "react";

interface IProps {
  openNote: boolean;
  setOpenNote: React.Dispatch<React.SetStateAction<boolean>>;
  noteHeight: number;
  setNoteHeight: React.Dispatch<React.SetStateAction<number>>;
  noteTitle: string;
  noteBody: string;
  folder: string;
}

const Note: React.FC<IProps> = ({ openNote, setOpenNote, setNoteHeight, noteTitle, noteBody, folder }) => {
  const noteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setNoteHeight(
      noteRef.current ? (openNote ? noteRef.current.scrollHeight : 100) : 100
    );
  }, [openNote, setNoteHeight]);

  const handleToggle = () => {
    setOpenNote(!openNote);
  };

  return (
    <>
      <Card data-testid="note" ref={noteRef} onClick={handleToggle}>
        <Header>
          <Title>{folder}</Title>
        </Header>
        <Text>{noteTitle}</Text>
        <TextArea>
          {noteBody}
        </TextArea>
      </Card>
    </>
  );
};

export default Note;