import { useEffect, useState } from "react";
import { ResultProps } from "../useResult";
import Loader from "../../../../common/Loader";
import { FetchData } from "../useFetchCurrencies";

interface ResultPropsWithData extends ResultProps {
  data: FetchData;
  handleClear: () => void;
}

const Result = ({
  data,
  handleClear,
  endResult,
  amountValue,
  localCurrency,
  externalCurrency,
}: ResultPropsWithData) => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, [endResult]);

  return (
    <div className="result">
      {loader ? (
        <Loader title="Calculations in progress..." />
      ) : (
        <div className="result__box">
          <h3 className="result__title">Result:</h3>
          <p className="result__content">
            {`${amountValue} ${localCurrency} equals ${endResult} ${externalCurrency}`}
          </p>
          <p className="result__rates">{`Rate: ${(data?.rates[
            localCurrency
          ]).toFixed(5)} ${localCurrency} - ${(data?.rates[
            externalCurrency
          ]).toFixed(5)} ${externalCurrency}`}</p>
          <button className="result__closeButton" onClick={handleClear}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Result;
