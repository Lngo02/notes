import { Card, TextArea, Title, Text, Header } from "./styles";
import { useRef, useEffect } from "react";

interface IProps {
  openNote: boolean;
  setOpenNote: React.Dispatch<React.SetStateAction<boolean>>;
  noteHeight: number;
  setNoteHeight: React.Dispatch<React.SetStateAction<number>>;
}

const Note: React.FC<IProps> = ({ openNote, setOpenNote, setNoteHeight }) => {
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
          <Title>Note title</Title>
        </Header>
        <Text>Note body text</Text>
        <TextArea>
          "Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
        </TextArea>
      </Card>
    </>
  );
};

export default Note;