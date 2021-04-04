import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationNav() {
  return (
    <HStack
      spacing="8"
      mx="8"
      pr="8"
      py="1"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}
