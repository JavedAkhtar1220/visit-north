import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import LogoutRounded from "@mui/icons-material/LogoutRounded";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ProfileMenu() {
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mx: 1, mt: 1 }}>
      <ButtonBase
        id={buttonId}
        onClick={handleClick}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="menu"
        aria-expanded={open ? "true" : undefined}
        sx={{
          display: "flex",
          width: "100%",
          minWidth: 0,
          minHeight: 56,
          justifyContent: "flex-start",
          gap: 1.5,
          px: 1.5,
          py: 1,
          borderRadius: 1.5,
          textAlign: "left",
          transition: "background-color 150ms ease",

          "&:hover": {
            bgcolor: "action.hover",
          },

          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.main",
            outlineOffset: -2,
          },

          '&[aria-expanded="true"]': {
            bgcolor: "action.selected",
          },
        }}
      >
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "action.selected",
            color: "text.secondary",
            fontSize: 14,
            flexShrink: 0,
          }}
        >
          JA
        </Avatar>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              lineHeight: 1.5,
            }}
          >
            Javed Akhtar
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: "block",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              lineHeight: 1.4,
            }}
          >
            j.akhtar1220@gmail.com
          </Typography>
        </Box>

        <ExpandMoreRounded
          sx={{
            color: "text.secondary",
            fontSize: 18,
            flexShrink: 0,
            transition: "transform 150ms ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </ButtonBase>

      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          list: {
            "aria-labelledby": buttonId,
            dense: true,
          },
          paper: {
            elevation: 4,
            sx: {
              mt: 0.5,
              minWidth: 240,
              borderRadius: 1,
              border: 1,
              borderColor: "divider",
            },
          },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Javed Akhtar
          </Typography>
          <Typography variant="caption" color="text.secondary">
            j.akhtar1220@gmail.com
          </Typography>
        </Box>

        <Divider />

        <MenuItem onClick={handleClose} sx={{ gap: 1 }}>
          <ListItemIcon>
            <LogoutRounded fontSize="small" />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </Box>
  );
}
