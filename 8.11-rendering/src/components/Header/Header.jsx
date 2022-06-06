import { memo, useEffect } from "react";
import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    overflow: hidden;
    background: #252932;
    margin-bottom: 20px;
`;
const Wrapper = styled.div`
    margin-left: 50px;
    overflow: hidden;
`;

const Logo = styled.div`
    color:#f2f2f2;
    font-size:50px;
    line-height:100px;
`;

const TopHeader = ({ title }) => {
  useEffect(() => console.log('<Header />'))

  return <Header>
    <Wrapper>
      <Logo>{ title }</Logo>
    </Wrapper>
  </Header>;
}

export default memo(TopHeader);