// src/hooks/useDataFetching.js
import { useEffect, useState } from "react";
import { MOCK_EVENTS, MOCK_TRIPS } from "../data/mockData.js";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function useDataFetching(kind = "events") {
  const [data, setData] = useState([]);
  const [usingMockData, setUsingMockData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        await sleep(120);
        if (!alive) return;

        if (kind === "events") setData(MOCK_EVENTS);
        else if (kind === "trips") setData(MOCK_TRIPS);
        else setData([]);

        setUsingMockData(true);
      } catch (e) {
        if (!alive) return;
        setError(e instanceof Error ? e : new Error("Unknown error"));
        setData([]);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => { alive = false; };
  }, [kind]);

  return { data, loading, error, usingMockData };
}

export default useDataFetching;
