import { Typography, type TypographyProps } from "@mui/material";
import { NumericFormat } from "react-number-format";

interface NumberTypograhyProps extends Omit<TypographyProps, "children"> {
  value: number | string | null | undefined;
  currency?: string;
  locale?: string;
  thousandSeparator?: boolean;
  decimalScale?: number;
  fixedDecimalScale?: boolean;
  prefix?: string;
  suffix?: string;
  currencyDisplay?: "symbol" | "code" | "narrowSymbol";
  showZero?: boolean;
}

export function NumberTypograhy({
  value,
  currency,
  locale = "en-US",
  thousandSeparator = true,
  decimalScale,
  fixedDecimalScale = false,
  prefix,
  suffix,
  currencyDisplay = "symbol",
  showZero = true,
  ...typographyProps
}: NumberTypograhyProps) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  const numericValue = typeof value === "string" ? Number(value) : value;

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  if (!showZero && numericValue === 0) {
    return null;
  }

  const currencyParts = currency
    ? new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        currencyDisplay,
        minimumFractionDigits: decimalScale ?? 0,
        maximumFractionDigits: decimalScale ?? 2,
      }).formatToParts(1)
    : [];

  const integerIndex = currencyParts.findIndex(
    (part) => part.type === "integer",
  );

  const currencyIndex = currencyParts.findIndex(
    (part) => part.type === "currency",
  );

  const currencyText = currencyParts
    .filter((part) => part.type === "currency" || part.type === "literal")
    .map((part) => part.value)
    .join("");

  const currencyBeforeNumber =
    currencyIndex !== -1 && currencyIndex < integerIndex;

  const currencyPrefix = currency && currencyBeforeNumber ? currencyText : "";

  const currencySuffix = currency && !currencyBeforeNumber ? currencyText : "";

  return (
    <NumericFormat
      value={numericValue}
      displayType="text"
      thousandSeparator={thousandSeparator ? "," : false}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
      prefix={prefix ?? currencyPrefix}
      suffix={suffix ?? currencySuffix}
      renderText={(formattedValue) => (
        <Typography
          component="span"
          {...typographyProps}
          sx={{
            fontFamily: "Space Grotesk",
            fontVariantNumeric: "tabular-nums",
            ...typographyProps.sx,
          }}
        >
          {formattedValue}
        </Typography>
      )}
    />
  );
}
