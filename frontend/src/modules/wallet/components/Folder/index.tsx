import Note from "../Note";
import AddNote from "../AddNote";
import { useState, useRef, useEffect } from "react";
import { FolderStyle, Title, Container } from "./styles";

interface IProps {
  title: string;
}

const Folder: React.FC<IProps> = ({ title }) => {
  const [openFolder, setOpenFolder] = useState(false);
  const [openNote, setOpenNote] = useState(false);
  const [folderHeight, setFolderHeight] = useState(50);
  const [noteHeight, setNoteHeight] = useState(100);

  const folderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setFolderHeight(openFolder ? folderRef.current!.scrollHeight : 75);
  }, [openFolder, openNote]);

  const handleToggle = () => {
    setOpenFolder(!openFolder);
  };

  return (
    <>
      <FolderStyle
        ref={folderRef}
        aria-expanded={openFolder}
        aria-label={title + " folder"}
        style={{ height: folderHeight}}
      >
        <Container>
          <Title onClick={handleToggle} aria-label={`Toggle ${title} folder`}>
            {title}
          </Title>
          <AddNote />
          <Note
            openNote={openNote}
            setOpenNote={setOpenNote}
            noteHeight={noteHeight}
            setNoteHeight={setNoteHeight}
          />
        </Container>
      </FolderStyle>
    </>
  );
};

export default Folder;