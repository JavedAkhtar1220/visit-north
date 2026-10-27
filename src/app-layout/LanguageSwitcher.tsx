import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <FormControl size="small" sx={{ minWidth: 100 }}>
      <Select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        sx={{ borderRadius: "8px" }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ur">اردو</MenuItem>
      </Select>
    </FormControl>
  );
}
