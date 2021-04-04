import Icon from "@chakra-ui/icon";
import { Box, Link, Stack, Text } from "@chakra-ui/layout";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuarios</NavLink>
        </NavSection>
        <NavSection title="AUTOMACAO">
          <NavLink icon={RiInputMethodLine}>Formularios</NavLink>
          <NavLink icon={RiGitMergeLine}>Automacao</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
