import { createContext } from "react";

export type SidebarMenuContextType = {
  openMenu: boolean;
  isRendered: boolean;
  hamburgerClicked: boolean;
  handleSidebarMenuToggle: (hamburgerBtn: boolean) => void;
  clickedItemIndex: number | null;
  handleMenuItemClick: (index: number) => void;
};

export const SidebarMenuContext = createContext<SidebarMenuContextType>({
  openMenu: false,
  isRendered: false,
  hamburgerClicked: false,
  handleSidebarMenuToggle: () => {},
  clickedItemIndex: null,
  handleMenuItemClick: () => {},
});
