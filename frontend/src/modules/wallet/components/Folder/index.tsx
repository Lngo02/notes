import Note from "../Note";
import AddNote from "../AddNote";
import { useState, useRef, useEffect } from "react";
import { FolderStyle, Title, Container } from "./styles";
import { useSpring } from '@react-spring/web';

interface IProps {
  title: string;
}

const Folder: React.FC<IProps> = ({ title }) => {
  const [openFolder, setOpenFolder] = useState(false);
  const [openNote, setOpenNote] = useState(false);
  const [folderHeight, setFolderHeight] = useState(50);
  const [noteHeight, setNoteHeight] = useState(100);
  const [openAddNote, setOpenAddNote] = useState(false);

  const [noteIsAdded, setNoteIsAdded] = useState(false);

  const folderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setFolderHeight(openFolder ? folderRef.current!.scrollHeight + 50: 75);
  }, [openFolder, openNote, openAddNote]);

  const handleToggle = () => {
    setOpenFolder(!openFolder);
  };

  const folderProps = useSpring({
    maxHeight: folderHeight,
    config: {duration: 300, tension: 10, friction: 10},
  });

  return (
    <>
      <FolderStyle
        ref={folderRef}
        aria-expanded={openFolder}
        aria-label={title + " folder"}
        style={folderProps}
      >
        <Container>
          <Title onClick={handleToggle} aria-label={`Toggle ${title} folder`}>
            {title}
          </Title>
          <AddNote 
            openAddNote={openAddNote}
            setOpenAddNote={setOpenAddNote}
            folder={title}
            setNoteIsAdded={setNoteIsAdded}
          />
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