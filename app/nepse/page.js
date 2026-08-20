import fs from "fs";
import path from "path";
import NepseSignals from "@/components/NepseSignals";

function parseCSV(csv) {
  // Handle records that were accidentally concatenated together
  // before an ISO date such as 2026-07-28.
  const normalizedCSV = csv
    .replace(
      /([A-Z0-9]+)(\d{4}-\d{2}-\d{2}),(BUY|EARLY BUY|HOLD|WATCH SELL),/g,
      "$1\n$2,$3,"
    );

  return normalizedCSV
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(",");

      if (parts.length < 3) {
        return null;
      }

      const date = parts[0].trim();
      const signal = parts[1].trim();

      const symbols = parts
        .slice(2)
        .join(",")
        .replace(/^"|"$/g, "")
        .split(";")
        .map((symbol) => symbol.trim())
        .filter(Boolean);

      return {
        date,
        signal,
        symbols,
      };
    })
    .filter(Boolean);
}

export const metadata = {
  title: "NEPSE Signals — Khem Raj Yatri",
  description:
    "NEPSE technical-analysis signal history and market screening output by Khem Raj Yatri.",
};

export default function NepsePage() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "signal_history.csv"
  );

  const csv = fs.readFileSync(filePath, "utf8");

  const rows = parseCSV(csv);

  return <NepseSignals rows={rows} />;
}