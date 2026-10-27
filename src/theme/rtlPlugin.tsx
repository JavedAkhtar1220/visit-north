import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { useTranslation } from "react-i18next";
import { prefixer } from "stylis";

// Create rtl cache
const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
  key: "mui",
});

export default function RtlProvider(props: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const isRtl =
    i18n.language == "ar" || i18n.language == "ur" || i18n.language == "ar-MA";

  return (
    <CacheProvider value={isRtl ? rtlCache : ltrCache}>
      {props.children}
    </CacheProvider>
  );
}
