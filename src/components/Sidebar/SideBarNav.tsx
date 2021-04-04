import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuarios
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMACAO">
        <NavLink href="/forms" icon={RiInputMethodLine}>
          Formularios
        </NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine}>
          Automacao
        </NavLink>
      </NavSection>
    </Stack>
  );
}
