import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import { useColorMode } from "@/theme/ThemeWrapper";
import { type SidebarItemConfig, sidebarListConfig } from "./SidebarListConfig";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Box sx={{ px: 1, py: 1 }}>
      <List component="nav" aria-label="Main navigation" disablePadding>
        {sidebarListConfig.map((item) => (
          <SidebarListItem
            key={item.label}
            item={item}
            pathname={location.pathname}
            onNavigate={navigate}
          />
        ))}
      </List>

      <Divider sx={{ my: 1 }} />

      <ListItemButton
        onClick={toggleColorMode}
        aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        sx={{ minHeight: 42, borderRadius: 1, px: 1.5 }}
      >
        <ListItemIcon sx={{ minWidth: 36, color: "text.secondary" }}>
          {mode === "light" ? (
            <DarkModeRoundedIcon fontSize="small" />
          ) : (
            <LightModeRoundedIcon fontSize="small" />
          )}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {mode === "light" ? "Dark mode" : "Light mode"}
            </Typography>
          }
        />
      </ListItemButton>
    </Box>
  );
}

interface SidebarListItemProps {
  item: SidebarItemConfig;
  pathname: string;
  onNavigate: (path: string) => void;
}

function SidebarListItem({ item, pathname, onNavigate }: SidebarListItemProps) {
  const { t } = useTranslation();
  const hasChildren = Boolean(item.children?.length);
  const selected = item.path ? isPathSelected(pathname, item.path) : false;
  const childSelected = item.children?.some(
    (child) => child.path && isPathSelected(pathname, child.path),
  );
  const [expanded, setExpanded] = useState(Boolean(childSelected));

  useEffect(() => {
    if (childSelected) {
      setExpanded(true);
    }
  }, [childSelected]);

  const handleClick = () => {
    if (hasChildren) {
      setExpanded((previous) => !previous);
    } else if (item.path) {
      onNavigate(item.path);
    }
  };

  const Icon = item.Icon;

  return (
    <Box>
      <ListItemButton
        selected={selected || Boolean(childSelected)}
        onClick={handleClick}
        aria-expanded={hasChildren ? expanded : undefined}
        sx={{
          minHeight: 42,
          mb: 0.5,
          borderRadius: 1,
          px: 1.5,
          color: "text.primary",
          "&.Mui-selected": {
            bgcolor: "action.selected",
            color: "primary.main",
          },
          "&.Mui-selected:hover": {
            bgcolor: "action.selected",
          },
        }}
      >
        {Icon && (
          <ListItemIcon
            sx={{
              minWidth: 36,
              color: selected || childSelected ? "primary.main" : "inherit",
            }}
          >
            <Icon fontSize="small" />
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography
              variant="body2"
              sx={{ fontWeight: selected || childSelected ? 600 : 500 }}
              noWrap
            >
              {t(item.label, { defaultValue: item.label })}
            </Typography>
          }
        />
        {hasChildren &&
          (expanded ? (
            <ExpandLessRoundedIcon fontSize="small" />
          ) : (
            <ExpandMoreRoundedIcon fontSize="small" />
          ))}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 2 }}>
            {item.children?.map((child) => (
              <SidebarChildItem
                key={child.path ?? child.label}
                item={child}
                pathname={pathname}
                onNavigate={onNavigate}
              />
            ))}
          </List>
        </Collapse>
      )}
    </Box>
  );
}

function SidebarChildItem({
  item,
  pathname,
  onNavigate,
}: SidebarListItemProps) {
  const { t } = useTranslation();
  const selected = item.path ? isPathSelected(pathname, item.path) : false;

  return (
    <ListItemButton
      selected={selected}
      disabled={!item.path}
      onClick={() => {
        if (item.path) {
          onNavigate(item.path);
        }
      }}
      sx={{
        minHeight: 36,
        mb: 0.5,
        borderRadius: 1,
        pl: 1.5,
        "&.Mui-selected": {
          bgcolor: "action.selected",
          color: "primary.main",
        },
        "&.Mui-selected:hover": {
          bgcolor: "action.selected",
        },
      }}
    >
      <ListItemText
        primary={
          <Typography
            variant="body2"
            sx={{ fontWeight: selected ? 600 : 400 }}
            noWrap
          >
            {t(item.label, { defaultValue: item.label })}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

function isPathSelected(pathname: string, path: string): boolean {
  if (path === "/") {
    return pathname === "/";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}
