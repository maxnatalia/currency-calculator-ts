import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error">
      <h2>Error</h2>
      <p className="error__paragraph">Sorry, something went wrong...😒</p>
      <Link to="/" className="error__button">
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
