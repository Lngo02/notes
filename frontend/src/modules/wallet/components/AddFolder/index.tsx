import { FolderStyle, Title} from "./styles";
import { useState } from "react";

const AddFolder = () => {
  const [openAddFolder, setOpenAddFolder] = useState(false);

  const handleToggle = () => {
    setOpenAddFolder(!openAddFolder);
  };

  return (
    <>
      <FolderStyle>
        <Title onClick={handleToggle}>+ Add folder</Title>
      </FolderStyle>
    </>
  );
};

export default AddFolder;