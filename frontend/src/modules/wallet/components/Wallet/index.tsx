import { FolderContainer } from './styles'
import Folder from '../Folder'
import AddFolder from '../AddFolder'

const Wallet:React.FC = ( ) => {

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