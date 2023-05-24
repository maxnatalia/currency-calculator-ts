interface LoaderProps {
  content: string;
}

const Loader = ({ content }: LoaderProps) => {
  return (
    <div className="loader">
      <div className="loader__wrapper">
        <h3 className="loader__title">Loading...</h3>
        <div className="loader__img" />
      </div>
      <p className="loader__content">{content}</p>
    </div>
  );
};

export default Loader;
