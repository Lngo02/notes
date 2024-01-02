import { FolderContainer } from './styles'
import Folder from '../Folder'
import AddFolder from '../AddFolder'
import { useEffect, useState } from 'react';
import { IFolder } from '../../interfaces';

const Wallet:React.FC = ( ) => {

  const [folders, setFolders] = useState<IFolder[]>([]);
  const [folderIsAdded, setFolderIsAdded] = useState(false);

  useEffect(() => {
    console.log(localStorage);
    const folderList: string[] = Object.keys({...localStorage});
    if (folderList) {
      console.log(folderList);
      const folderObjects: IFolder[] = folderList.map((folderName) => ({
        name: folderName
      }));
      setFolders(folderObjects);
    }
  }, [folderIsAdded])

  return (
    <>
      <FolderContainer>
        {folders!.map((folder: IFolder, index: number) => (
          <Folder key={folder.name} title={folder.name}/>
        ))}
        <AddFolder setFolderIsAdded={setFolderIsAdded}/>
      </FolderContainer>
    </>
  )
}

export default Wallet