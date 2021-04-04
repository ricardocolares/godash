import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text color="gray.300" fontSize="small">
          Ricardo Colares
        </Text>
        <Text color="gray.300" fontSize="small">
          ricardoccolares@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Ricardo Colares"
        src="https://github.com/ricardocolares.png"
      />
    </Flex>
  );
}
