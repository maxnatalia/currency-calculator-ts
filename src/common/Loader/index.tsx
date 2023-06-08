interface LoaderProps {
  content?: string;
  title?: string;
  isPreviousData?: boolean;
}

const Loader = ({ content, title, isPreviousData }: LoaderProps) => {
  return (
    <div className={`${isPreviousData ? "loader loader--previous" : "loader"}`}>
      <div className="loader__img" />
      <div className="loader__wrapper">
        <h3 className="loader__title">{title}</h3>
        <p className="loader__content">{content}</p>
      </div>
    </div>
  );
};

export default Loader;
