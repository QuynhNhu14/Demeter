import { NavLink, NavLinkProps } from "@mantine/core";
import { NavLink as ReactLink, NavLinkProps as ReactLinkProps } from "react-router-dom";

export function Link(props: NavLinkProps & ReactLinkProps) {
  return <NavLink {...props} component="ReactLink"/>
}