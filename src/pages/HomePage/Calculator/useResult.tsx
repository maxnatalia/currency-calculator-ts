import { useState, ChangeEvent, FormEvent } from "react";
import { useFetchCurrencies } from "./useFetchCurrencies";

export interface ResultProps {
  endResult: string;
  amountValue: string;
  localCurrency: string;
  externalCurrency: string;
}

export const useResult = () => {
  const [amount, setAmount] = useState("");
  const [localCurrency, setLocalCurrency] = useState("PLN");
  const [externalCurrency, setExternalCurrency] = useState("PLN");
  const [result, setResult] = useState<ResultProps | null>(null);
  const { data } = useFetchCurrencies(localCurrency);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleLocalCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLocalCurrency(e.target.value);
  };

  const handleExternalCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setExternalCurrency(e.target.value);
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateResult(localCurrency, externalCurrency, amount);
  };

  const handleClear = () => {
    setAmount("");
    setExternalCurrency(externalCurrency);
    setLocalCurrency(localCurrency);
    setResult(null);
  };

  const calculateResult = (
    localCurrency: string,
    externalCurrency: string,
    amount: string
  ): void => {
    const rateLocal: number = data?.rates[localCurrency] || 0;
    const rateExternal: number = data?.rates[externalCurrency] || 0;

    const endResult = ((parseFloat(amount) / rateLocal) * rateExternal).toFixed(
      5
    );
    const amountValue = parseFloat(amount).toFixed(5);

    setResult({
      endResult,
      amountValue,
      localCurrency,
      externalCurrency,
    });
  };

  return {
    handleAmountChange,
    amount,
    handleLocalCurrencyChange,
    localCurrency,
    handleExternalCurrencyChange,
    externalCurrency,
    result,
    onFormSubmit,
    handleClear,
  };
};
