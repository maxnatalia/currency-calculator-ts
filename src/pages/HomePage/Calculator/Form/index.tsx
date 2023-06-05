import { FormEvent, ChangeEvent } from "react";
import Field from "./Field";
import { FetchData } from "../useFetchCurrencies";
import { ResultProps } from "../useResult";

interface FormProps {
  data: FetchData;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
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
          fieldProps={{
            name: "localCurrency",
            options: data?.rates,
            value: localCurrency,
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
          fieldProps={{
            name: "externalCurrency",
            options: data?.rates,
            value: externalCurrency,
            onChange: handleExternalCurrencyChange,
            readOnly: !!result,
          }}
        />
        <div className="form__buttonBox">
          {!result && (
            <button className="form__button" type="submit">
              Count now!
            </button>
          )}
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
