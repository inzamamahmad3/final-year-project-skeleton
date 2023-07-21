import React from "react";
import styled from "styled-components";
import aws from "../img/aws.png";
// import { AssuredWorkloadSharp } from "@mui/icons-material";
import inzi from "../img/pic.png";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  border-color: #999;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link>
      <Container>
        <Image src={aws} />
        <Details>
          <ChannelImage src={inzi} />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Inzamam Ahmad</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
