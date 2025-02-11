import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 3rem;
  width: 100%;
`;

const Header = styled.div`
  background-color: purple;
  width: 50rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.div`
  background-color: tomato;
  width: 50rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  background-color: green;
  width: 40rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Aside = styled.div`
  background-color: lightgreen;
  width: 10rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div`
  background-color: coral;
  width: 50rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Mission1() {
  return (
    <Container>
      <Header>Header</Header>
      <Nav>Nav</Nav>
      <div style={{ display: "flex" }}>
        <Section>Section</Section>
        <Aside>Aside</Aside>
      </div>
      <Footer>Footer</Footer>
    </Container>
  );
}
