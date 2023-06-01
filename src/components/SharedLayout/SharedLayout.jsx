import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import styled from "styled-components";
import { Box } from "../Box/Box";

const Link = styled(NavLink)`
  color: black;
  margin: 10px;
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <Box as="header" pt={4} pb={4} borderBottom="normal" bg="lightgrey">
        <Box as="nav" pl={5} fontSize={20}>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/cart">Cart</Link>
          <Link to="/history">History</Link>
        </Box>
      </Box>
      <Box pr={4} pl={4} height="100%">
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
