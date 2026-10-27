import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SuccessGirlIcon from "@/assets/icons/avatar/success-girl.svg?react";
import Modal from "@/components/Modal";

export default function RegistraionSuccessModal() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const shouldShow =
      sessionStorage.getItem("showRegistrationSuccess") === "true";

    if (shouldShow) {
      setIsOpen(true);

      // Remove immediately so refresh won't show it again
      sessionStorage.removeItem("showRegistrationSuccess");
    }
  }, []);

  if (!open) return null;

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Modal title="" open={isOpen} close={handleClose}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: 600,
          color: "#287C74",
        }}
      >
        {t("success.registion.label")}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          justifySelf: "center",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#969696",
          maxWidth: 440,
        }}
      >
        {t("success.registion.description")}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <SuccessGirlIcon />
      </Box>
    </Modal>
  );
}
