import Loader from "../../../common/Loader";
import ErrorPage from "../../ErrorPage";
import Clock from "./Clock";
import Form from "./Form";
import Result from "./Result";
import Source from "./Source";
import { useFetchCurrencies } from "./useFetchCurrencies";
import { useResult } from "./useResult";

const Calculator = () => {
  const {
    handleAmountChange,
    amount,
    handleLocalCurrencyChange,
    localCurrency,
    handleExternalCurrencyChange,
    externalCurrency,
    onFormSubmit,
    handleClear,
    result,
  } = useResult();
  const { isLoading, error, isPreviousData, data } =
    useFetchCurrencies(localCurrency);

  return (
    <>
      {error && <ErrorPage />}
      {isPreviousData && <Loader isPreviousData />}
      {isLoading && (
        <Loader title="Loading..." content="Data download in progress..." />
      )}
      {data && (
        <>
          <Clock />
          <Form
            data={data}
            handleAmountChange={handleAmountChange}
            amount={amount}
            handleLocalCurrencyChange={handleLocalCurrencyChange}
            localCurrency={localCurrency}
            handleExternalCurrencyChange={handleExternalCurrencyChange}
            externalCurrency={externalCurrency}
            onFormSubmit={onFormSubmit}
            result={result}
          />
          {result && (
            <Result
              data={data}
              handleClear={handleClear}
              endResult={result.endResult}
              amountValue={result.amountValue}
              localCurrency={result.localCurrency}
              externalCurrency={result.externalCurrency}
            />
          )}
          <Source data={data} />
        </>
      )}
    </>
  );
};

export default Calculator;
