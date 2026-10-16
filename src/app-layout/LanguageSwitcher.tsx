import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <FormControl size="small" sx={{ minWidth: 100 }}>
      <Select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        sx={{ borderRadius: 30 }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ar">العربية</MenuItem>
        <MenuItem value="ar-MA">الدارجة</MenuItem>
        <MenuItem value="es">Español</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
        <MenuItem value="de">Deutsch</MenuItem>
        <MenuItem value="ur">اردو</MenuItem>
        <MenuItem value="hi">हिन्दी</MenuItem>
        <MenuItem value="it">Italiano</MenuItem>
        <MenuItem value="ru">Русский</MenuItem>
        <MenuItem value="zh">中文</MenuItem>
        <MenuItem value="ja">日本語</MenuItem>
        <MenuItem value="ko">한국어</MenuItem>
        <MenuItem value="tr">Türkçe</MenuItem>
      </Select>
    </FormControl>
  );
}
