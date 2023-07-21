import React from "react";
import styled from "styled-components";
import aws from "../img/aws.png";
import { AssuredWorkloadSharp } from "@mui/icons-material";

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

const Card = () => {
  return (
    <Container>
      <Image src={aws} />
    </Container>
  );
};

export default Card;
