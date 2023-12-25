import { H1, Title, NavContainer, NameContainer } from "./styles";

const Nav: React.FC = () => {
  return (
    <>
      <NavContainer aria-label="Main Navigation">
        <Title>Notes</Title>
        <H1>Welcome,</H1>
        <NameContainer>
          <H1>person</H1>
        </NameContainer>
      </NavContainer>
    </>
  );
};

export default Nav;