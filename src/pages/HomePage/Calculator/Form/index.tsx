import { FormEvent, ChangeEvent, MouseEvent } from "react";
import Field from "./Field";
import { FetchData } from "../useFetchCurrencies";
import { ResultProps } from "../useResult";

interface FormProps {
  data: FetchData;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleClear: (e: MouseEvent<HTMLButtonElement>) => void;
  localCurrency: string;
  externalCurrency: string;
  handleLocalCurrencyChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleExternalCurrencyChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  amount: string;
  result: ResultProps | null;
}

const Form = ({
  data,
  onFormSubmit,
  handleClear,
  localCurrency,
  externalCurrency,
  handleLocalCurrencyChange,
  amount,
  handleAmountChange,
  handleExternalCurrencyChange,
  result,
}: FormProps) => {
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency Calculator</legend>
        <Field
          heading="Local Currency:"
          extraContent={`Rate: ${(data?.rates[localCurrency]).toFixed(
            5
          )} ${localCurrency}`}
          fieldProps={{
            name: "localCurrency",
            options: data?.rates,
            defaultValue: localCurrency,
            onChange: handleLocalCurrencyChange,
            readOnly: !!result,
          }}
        />
        <Field
          heading="Amount*"
          fieldProps={{
            type: "number",
            name: "amount",
            value: amount,
            onChange: handleAmountChange,
            step: "0.01",
            min: "0",
            placeholder: "Enter amount...",
            required: true,
            readOnly: !!result,
          }}
        />
        <Field
          heading="Foreign Currency:"
          extraContent={`Rate: ${(data?.rates[externalCurrency]).toFixed(
            5
          )} ${externalCurrency}`}
          fieldProps={{
            name: "externalCurrency",
            options: data?.rates,
            defaultValue: externalCurrency,
            onChange: handleExternalCurrencyChange,
            readOnly: !!result,
          }}
        />
        <div className="form__buttonsBox">
          {!result && (
            <button className="form__button" type="submit">
              Count now!
            </button>
          )}
          <button className="form__button" type="reset" onClick={handleClear}>
            Clear
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
