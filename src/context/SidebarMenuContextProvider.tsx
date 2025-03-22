import { useState, useEffect, ReactNode } from "react";
import { SidebarMenuContext } from "./SidebarMenuContext";

const SidebarMenuContextProvider = ({
  children,
}: {
  children?: ReactNode | ReactNode[];
}) => {
  const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [clickedItemIndex, setClickedItemIndex] = useState<number | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleSidebarMenuToggle = (hamburgerBtn: boolean) => {
    if (hamburgerBtn) {
      // Setting state to true triggers transition on hamburger button when it's clicked
      setHamburgerClicked(true);
      // Resetting state to false after 150ms (transition duration is 150ms)
      setTimeout(() => setHamburgerClicked(false), 150);
    }

    // Clear the existing timeout if it's active
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (openMenu) {
      closeWithDelay();
    } else {
      openWithDelay();
    }
  };

  const openWithDelay = () => {
    setIsRendered(true); // Render SidebarMenu in the DOM
    // Set new timeout that waits 10ms so SidebarMenu is rendered
    // SidebarMenu opening transition is triggered with setting openMenu state to true
    const newTimeoutId = setTimeout(() => setOpenMenu(true), 10);
    setTimeoutId(newTimeoutId);
  };

  const closeWithDelay = () => {
    setOpenMenu(false); // Trigger SidebarMenu closing transition with setting openMenu state to false
    // Set new timeout that waits 585ms so SidebarMenu can go offscreen, then unmounts it
    const newTimeoutId = setTimeout(() => setIsRendered(false), 585);
    setTimeoutId(newTimeoutId);
  };

  const handleMenuItemClick = (index: number) => {
    // Clicked menu item is selected (it also starts clicked item text animation)
    setClickedItemIndex(index);

    // Clear the existing timeout if it's active
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set timeout (325ms) so user can see clicked item text animation
    // Because of this timeout SidebarMenu doesn't start closing transition immediately
    setTimeout(() => {
      // Trigger SidebarMenu closing transition
      setOpenMenu(false);
      // Reset index so clicked item text animation doesn't go off every time SidebarMenu is opened
      setClickedItemIndex(null);

      // Set new timeout that waits 585ms so SidebarMenu can go offscreen, then unmounts it
      const newTimeoutId = setTimeout(() => setIsRendered(false), 585);
      setTimeoutId(newTimeoutId);
    }, 325);
  };

  // Cleanup on unmount to clear any active timeouts
  useEffect(() => {
    if (timeoutId) {
      return () => clearTimeout(timeoutId);
    }
  }, [timeoutId]);

  return (
    <SidebarMenuContext.Provider
      value={{
        openMenu,
        isRendered,
        hamburgerClicked,
        handleSidebarMenuToggle,
        clickedItemIndex,
        handleMenuItemClick,
      }}
    >
      {children}
    </SidebarMenuContext.Provider>
  );
};

export default SidebarMenuContextProvider;
