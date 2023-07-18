import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Navbar = () => {
  return <div>Navbar</div>;
};

export default Navbar;
