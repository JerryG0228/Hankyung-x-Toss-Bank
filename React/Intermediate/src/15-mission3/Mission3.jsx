import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(229, 229, 229);
  width: 100vw;
  height: 100vh;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  padding: 2rem 3rem;
`;
const Logo = styled.div`
  color: royalblue;
  font-size: 3rem;
  font-weight: 800;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;
const Nav = styled.div`
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 3rem 0 3rem 4rem;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 4rem;

  @media screen and (max-width: 1356px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const CardBox = styled.div`
  background-color: white;
  height: 18vh;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #cdcdcd;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`;

const ProdHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.6rem;
`;
const ProdName = styled.div`
  color: royalblue;
  font-weight: 700;
`;
const Price = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;
const Detail = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;
const ProdFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 2rem;
`;
const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  color: royalblue;
  background-color: aliceblue;
  border-radius: 10px;

  width: 6rem;
  height: 3rem;
`;
const Btn = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  color: white;
  background-color: royalblue;
  border-radius: 10px;

  width: 8rem;
  height: 3rem;

  &:hover {
    opacity: 0.9;
    transition: 0.5s;
  }
`;

export default function Mission3() {
  return (
    <Container>
      <Header>
        <Logo>TechStore</Logo>
        <Navbar>
          <Nav>제품</Nav>
          <Nav>서비스</Nav>
          <Nav>회사소개</Nav>
        </Navbar>
      </Header>

      <Title>추천 제품</Title>
      <CardContainer>
        <CardBox>
          <ProdHeader>
            <ProdName>프리미엄 노트북</ProdName>
            <Price>1,599,000원</Price>
          </ProdHeader>
          <Detail>최신 사양의 고성능 노트북</Detail>
          <ProdFooter>
            <Category>전자기기</Category>
            <Btn>장바구니 담기</Btn>
          </ProdFooter>
        </CardBox>

        <CardBox>
          <ProdHeader>
            <ProdName>프리미엄 노트북</ProdName>
            <Price>1,599,000원</Price>
          </ProdHeader>
          <Detail>최신 사양의 고성능 노트북</Detail>
          <ProdFooter>
            <Category>전자기기</Category>
            <Btn>장바구니 담기</Btn>
          </ProdFooter>
        </CardBox>

        <CardBox>
          <ProdHeader>
            <ProdName>프리미엄 노트북</ProdName>
            <Price>1,599,000원</Price>
          </ProdHeader>
          <Detail>최신 사양의 고성능 노트북</Detail>
          <ProdFooter>
            <Category>전자기기</Category>
            <Btn>장바구니 담기</Btn>
          </ProdFooter>
        </CardBox>
      </CardContainer>
    </Container>
  );
}
