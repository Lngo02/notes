import { FolderContainer } from './styles'
import Folder from '../Folder'
import AddFolder from '../AddFolder'
import { useState } from 'react';
import { IFolder } from '../../interfaces';

const Wallet:React.FC = ( ) => {

  const [folders, setFolders] = useState<IFolder[]>([]);

  return (
    <>
      <FolderContainer>
        <Folder title="Folder one"/>
        <Folder title="Folder two"/>
        <AddFolder />
      </FolderContainer>
    </>
  )
}

export default Wallet