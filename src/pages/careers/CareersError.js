import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <div className="careers_error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default CareersError;
