import Wallet from "../src/modules/wallet/components/Wallet";
import Nav from "../src/modules/wallet/components/Nav";
import {
  Container,
  WalletContainer,
  GlobalStyle,
} from "../src/modules/common/styles";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const GlobalStyleProxy: any = GlobalStyle;

  return (
    <>
      <GlobalStyleProxy />
      <Container>
        <Nav />
        <WalletContainer>
          <Wallet />
        </WalletContainer>
      </Container>
    </>
  );
}

export default App;