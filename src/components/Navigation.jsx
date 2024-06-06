import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box>
      <Flex as="nav" bg="gray.800" color="white" p={4}>
        <Button as={Link} to="/" mr={4} colorScheme="teal">
          Home
        </Button>
        <Button as={Link} to="/sales" colorScheme="teal">
          Sales
        </Button>
      </Flex>
      <Box p={4}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Navigation;
