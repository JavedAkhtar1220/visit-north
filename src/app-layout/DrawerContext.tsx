import { useMediaQuery } from "@mui/material";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface DrawerContextProps {
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const DrawerContext = createContext<DrawerContextProps | undefined>(
  undefined,
);

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const isDesktopScreen = useMediaQuery((theme) => theme.breakpoints.up("md"), {
    noSsr: true,
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(isDesktopScreen);

  useEffect(() => {
    setIsDrawerOpen(isDesktopScreen);
  }, [isDesktopScreen]);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};
