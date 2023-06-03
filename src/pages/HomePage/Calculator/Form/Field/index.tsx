import { ChangeEvent } from "react";

interface FieldProps<T> {
  heading: string;
  extraContent?: string;
  fieldProps: T;
}

interface SelectProps {
  options: { [key: string]: number };
  name: string;
  defaultValue: string;
  readOnly: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface InputProps {
  type: string;
  value: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  step?: string;
  min?: string;
  placeholder?: string;
  required: boolean;
  readOnly: boolean;
}

const Field = <T extends SelectProps | InputProps>({
  heading,
  extraContent,
  fieldProps,
}: FieldProps<T>) => {
  return (
    <label className="form__labelField">
      <div className="form__labelContent">
        <h3>{heading}</h3>
        <p>{extraContent}</p>
      </div>
      {"options" in fieldProps ? (
        <select
          className="form__select"
          disabled={fieldProps.readOnly}
          {...(fieldProps as SelectProps)}
        >
          {Object.keys(fieldProps.options).map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="form__input"
          disabled={fieldProps.readOnly}
          {...(fieldProps as InputProps)}
        />
      )}
    </label>
  );
};

export default Field;
