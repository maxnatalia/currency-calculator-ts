import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="sectionError">
      <h2>ErrorPage</h2>
      <p className="sectionError__paragraph">Sorry, something went wrong...</p>
      <Link to="/" className="sectionError__button">
        Back Home
      </Link>
    </section>
  );
};

export default ErrorPage;
