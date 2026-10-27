import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Box, Collapse, ListItemButton, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import { getSidebarListConfig, type SidebarItemConfig } from "./SidebarConfig";

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const sidebarList = useMemo(() => getSidebarListConfig(), []);

  return (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        width: "100%",
        minWidth: 0,
        px: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {sidebarList.map((item) => (
        <SidebarListItem
          key={item.path ?? item.label}
          item={item}
          pathname={pathname}
          onNavigate={navigate}
        />
      ))}
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

  const childSelected = Boolean(
    item.children?.some(
      (child) => child.path && isPathSelected(pathname, child.path),
    ),
  );

  const isActive = selected || childSelected;

  const [expanded, setExpanded] = useState(childSelected);

  useEffect(() => {
    if (childSelected) {
      setExpanded(true);
    }
  }, [childSelected]);

  const handleClick = () => {
    if (hasChildren) {
      setExpanded((previous) => !previous);
      return;
    }

    if (item.path) {
      onNavigate(item.path);
    }
  };

  const Icon = item.Icon;

  return (
    <Box sx={{ width: "100%", minWidth: 0 }}>
      <ListItemButton
        selected={isActive}
        onClick={handleClick}
        aria-current={selected && !hasChildren ? "page" : undefined}
        aria-expanded={hasChildren ? expanded : undefined}
        sx={(theme) => ({
          width: "100%",
          minWidth: 0,
          minHeight: 44,
          px: "8px",
          gap: 1.5,
          borderRadius: "8px",

          transition: theme.transitions.create(["background-color", "color"], {
            duration: 250,
            easing: theme.transitions.easing.easeInOut,
          }),

          "&:hover": {
            bgcolor: isActive
              ? "transparent"
              : alpha(theme.palette.primary.main, 0.1),
          },

          "&.Mui-selected": {
            bgcolor: theme.palette.primary.main,
            color: "white",
          },

          "&.Mui-selected:hover": {
            bgcolor: theme.palette.primary.main,
          },

          "& svg": {
            color: "inherit",
            flexShrink: 0,
            transition: theme.transitions.create(["color", "stroke"], {
              duration: 250,
            }),
          },

          "& svg [stroke]:not([stroke='none'])": {
            stroke: "currentColor",
          },
        })}
      >
        {Icon && (
          <Box
            sx={{
              width: 24,
              height: 24,
              minWidth: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "inherit",
            }}
          >
            <Icon fontSize="small" />
          </Box>
        )}

        <Typography
          variant="body2"
          dir="auto"
          sx={{
            flex: 1,
            minWidth: 0,
            width: "100%",

            fontSize: 14,
            fontWeight: isActive ? 600 : 500,

            color: "inherit",

            // Support Urdu, Arabic, English, etc.
            textAlign: "start",
            whiteSpace: "normal",
            overflowWrap: "anywhere",
            wordBreak: "normal",
            overflow: "visible",
            textOverflow: "clip",
          }}
        >
          {t(item.label, {
            defaultValue: item.label,
          })}
        </Typography>

        {hasChildren && (
          <ExpandMoreRoundedIcon
            fontSize="small"
            sx={(theme) => ({
              color: "inherit",
              flexShrink: 0,
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: theme.transitions.create("transform", {
                duration: 250,
                easing: theme.transitions.easing.easeInOut,
              }),
            })}
          />
        )}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={expanded} timeout={300} unmountOnExit>
          <Box
            sx={{
              position: "relative",
              ml: 1,
              pl: 1,
              mt: 0.5,

              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "1.5px",
                borderRadius: "2px",
                background: (theme) =>
                  `linear-gradient(
                    to bottom,
                    ${alpha(theme.palette.primary.main, 0.1)} 0%,
                    ${alpha(theme.palette.primary.main, 0.6)} 50%,
                    ${alpha(theme.palette.primary.main, 0.1)} 100%
                  )`,
              },
            }}
          >
            {item.children?.map((child) => (
              <SidebarChildItem
                key={child.path ?? child.label}
                item={child}
                pathname={pathname}
                onNavigate={onNavigate}
              />
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
}

interface SidebarChildItemProps {
  item: SidebarItemConfig;
  pathname: string;
  onNavigate: (path: string) => void;
}

function SidebarChildItem({
  item,
  pathname,
  onNavigate,
}: SidebarChildItemProps) {
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
      aria-current={selected ? "page" : undefined}
      sx={(theme) => ({
        width: "100%",
        minWidth: 0,
        minHeight: 36,
        mb: 0.5,
        px: 1.5,
        py: 0.75,
        gap: 1,
        borderRadius: "8px",
        justifyContent: "flex-start",

        transition: theme.transitions.create(["background-color", "color"], {
          duration: 250,
          easing: theme.transitions.easing.easeInOut,
        }),

        "&:hover": {
          bgcolor: alpha(theme.palette.primary.main, 0.08),
        },

        "&.Mui-selected": {
          bgcolor: theme.palette.primary.main,
          color: "white",
        },

        "&.Mui-selected:hover": {
          bgcolor: theme.palette.primary.main,
        },
      })}
    >
      <Typography
        variant="body2"
        noWrap
        sx={{
          flex: 1,
          minWidth: 0,
          textAlign: "left",
          fontSize: 14,
          fontWeight: selected ? 600 : 400,
          color: "inherit",
        }}
      >
        {t(item.label, {
          defaultValue: item.label,
        })}
      </Typography>
    </ListItemButton>
  );
}

function isPathSelected(pathname: string, path: string): boolean {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/+$/, "");

  const normalizedPathname =
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  if (normalizedPath === "/") {
    return normalizedPathname === "/";
  }

  return (
    normalizedPathname === normalizedPath ||
    normalizedPathname.startsWith(`${normalizedPath}/`)
  );
}
