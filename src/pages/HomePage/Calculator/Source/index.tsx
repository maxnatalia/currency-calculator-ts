import { FetchData } from "../useFetchCurrencies";
interface SourceProps {
  data: FetchData;
}

const Source = ({ data }: SourceProps) => {
  return (
    <p className="source">
      The currency exchange rates were fetched from{" "}
      <a
        className="source__link"
        href="https://exchangerate.host/"
        target="_blank"
        rel="noopener noreferrer"
      >
        exchangerate.host
      </a>{" "}
      on {data.date}
    </p>
  );
};

export default Source;
