"use client";

import { useMemo, useState } from "react";

const SIGNAL_ORDER = ["BUY", "EARLY BUY", "HOLD", "WATCH SELL"];

const SIGNAL_META = {
  BUY: {
    label: "BUY",
    className: "signal-buy",
  },
  "EARLY BUY": {
    label: "EARLY BUY",
    className: "signal-early-buy",
  },
  HOLD: {
    label: "HOLD",
    className: "signal-hold",
  },
  "WATCH SELL": {
    label: "WATCH SELL",
    className: "signal-watch-sell",
  },
};

function parseDate(dateString) {
  if (!dateString) return null;

  // YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    const [year, month, day] = dateString.split("-");

    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    );
  }

  // MM/DD/YYYY
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
    const [month, day, year] = dateString.split("/");

    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    );
  }

  return null;
}

function formatDate(dateString) {
  const date = parseDate(dateString);

  if (!date || Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function normalizeRows(rows) {
  const grouped = {};

  rows.forEach((row) => {
    if (!row.date || !row.signal) return;

    if (!grouped[row.date]) {
      grouped[row.date] = {};
    }

    grouped[row.date][row.signal] = row.symbols;
  });

  return Object.entries(grouped)
    .map(([date, signals]) => ({
      date,
      signals,
    }))
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      return dateB - dateA;

     
    });
}

export default function NepseSignals({ rows }) {
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const groupedRows = useMemo(
    () => normalizeRows(rows),
    [rows]
  );

  const signalStats = useMemo(() => {
    const stats = {
      BUY: 0,
      "EARLY BUY": 0,
      HOLD: 0,
      "WATCH SELL": 0,
    };

    rows.forEach((row) => {
      if (stats[row.signal] !== undefined) {
        stats[row.signal] += row.symbols.length;
      }
    });

    return stats;
  }, [rows]);

  const filteredRows = useMemo(() => {
    return groupedRows
      .map((day) => {
        const filteredSignals = {};

        Object.entries(day.signals).forEach(
          ([signal, symbols]) => {
            if (filter !== "ALL" && signal !== filter) {
              return;
            }

            const filteredSymbols = symbols.filter((symbol) =>
              symbol.toLowerCase().includes(search.toLowerCase())
            );

            if (filteredSymbols.length > 0) {
              filteredSignals[signal] = filteredSymbols;
            }
          }
        );

        return {
          ...day,
          signals: filteredSignals,
        };
      })
      .filter(
        (day) => Object.keys(day.signals).length > 0
      );
  }, [groupedRows, filter, search]);

  const latestDate = groupedRows[0]?.date;

  return (
    <section className="nepse-section">     
      <div className="nepse-container">
        {/* HEADER */}
            <div className="nepse-label">
              <span className="nepse">NEPSE</span>
              <span className="world"> WORLD</span>
            </div>
            <div className="nepse-label-subhead">
              Data driven NEPSE Trading System.
            </div>
            <div className="nepse-eyebrow">           
              *Do your own research before making any investment decisions.
            </div>
        <div className="nepse-header">
          <div>
            {/* <h1 className="nepse-title">
              Data-driven 
              <span>market signals.</span>
            </h1> */}

            <p className="nepse-description">
              Signal history generated from my NEPSE
              technical-analysis screening system.
            </p>
          </div>

          <div className="nepse-updated">
            <span>LAST UPDATED</span>
            <strong>
              {latestDate ? formatDate(latestDate) : "—"}
            </strong>
          </div>
        </div>

        {/* STAT CARDS */}

        <div className="nepse-stats">
          {SIGNAL_ORDER.map((signal) => {
            const meta = SIGNAL_META[signal];

            return (
              <div
                key={signal}
                className={`nepse-stat ${meta.className}`}
              >
                <span>{meta.label}</span>
                <strong>{signalStats[signal]}</strong>
              </div>
            );
          })}
        </div>

        {/* FILTERS */}

        <div className="nepse-controls">

          <div className="nepse-filters">
            <button
              className={filter === "ALL" ? "active" : ""}
              onClick={() => setFilter("ALL")}
            >
              ALL
            </button>

            {SIGNAL_ORDER.map((signal) => (
              <button
                key={signal}
                className={
                  filter === signal ? "active" : ""
                }
                onClick={() => setFilter(signal)}
              >
                {signal}
              </button>
            ))}
          </div>

          <input
            type="search"
            placeholder="Search symbol..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="nepse-search"
          />
        </div>

        {/* SIGNAL HISTORY */}

        <div className="nepse-history">

          <div className="nepse-history-heading">
            <span>SIGNAL HISTORY</span>
            <span>{filteredRows.length} DAYS</span>
          </div>

          {filteredRows.length === 0 ? (
            <div className="nepse-empty">
              No matching signals found.
            </div>
          ) : (
            filteredRows.map((day) => (
              <article
                className="nepse-day"
                key={day.date}
              >

                <div className="nepse-day-header">
                  <h2>{formatDate(day.date)}</h2>

                  <span>
                    {Object.values(day.signals).reduce(
                      (total, symbols) =>
                        total + symbols.length,
                      0
                    )}{" "}
                    SIGNALS
                  </span>
                </div>

                <div className="nepse-day-signals">

                  {SIGNAL_ORDER.map((signal) => {
                    const symbols =
                      day.signals[signal];

                    if (!symbols?.length) return null;

                    const meta =
                      SIGNAL_META[signal];

                    return (
                      <div
                        className="nepse-signal-row"
                        key={signal}
                      >

                        <div
                          className={`nepse-signal-label ${meta.className}`}
                        >
                          <span />
                          {meta.label}
                        </div>

                        <div className="nepse-symbols">
                          {symbols.map((symbol) => (
                            <span
                              key={`${day.date}-${signal}-${symbol}`}
                              className="nepse-symbol"
                            >
                              {symbol}
                            </span>
                          ))}
                        </div>

                      </div>
                    );
                  })}

                </div>

              </article>
            ))
          )}

        </div>

        <div className="nepse-note">
          <span>*Disclaimer:</span>
          Signals are generated by my technical-analysis
          system and are presented for informational and
          portfolio-project purposes only.
        </div>

      </div>
    </section>
  );
}