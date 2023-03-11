import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404 Page not found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, saepe!
      </p>
      <p>Go to {<Link to="/">home</Link>}</p>
    </>
  );
};

export default NotFound;
