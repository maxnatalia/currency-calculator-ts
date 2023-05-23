import { useQuery } from "@tanstack/react-query";
import { wait } from "./wait";

interface FetchData {
  rates: {
    [key: string]: number;
  };
  date: string;
}

export const useFetchCurrencies = () => {
  const fetchCurrencies = async () => {
    await wait(500);
    const response = await fetch(`https://api.exchangerate.host/latest`);
    return (await response.json()) as FetchData;
  };

  const { isLoading, error, data } = useQuery(["currencies"], fetchCurrencies);

  return { isLoading, error, data };
};
