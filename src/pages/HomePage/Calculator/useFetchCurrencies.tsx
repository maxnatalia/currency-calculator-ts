import { useQuery } from "@tanstack/react-query";
import { wait } from "./wait";
export interface FetchData {
  rates: {
    [key: string]: number;
  };
  date: string;
}

export const useFetchCurrencies = (base: string) => {
  const fetchCurrencies = async () => {
    await wait(1000);
    const response = await fetch(
      `https://api.exchangerate.host/latest?base=${base}&`
    );
    return (await response.json()) as FetchData;
  };

  const { isLoading, error, isPreviousData, data } = useQuery(
    ["currencies", base],
    fetchCurrencies
  );

  return { isLoading, error, isPreviousData, data };
};
