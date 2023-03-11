import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();
  return (
    <>
      <div className="careers">
        {careers.map((job) => {
          return (
            <Link to={`${job.id}`} key={job.id}>
          
              <p>{job.title}</p>
              <p>Based in {job.location}</p>
              <span className="careers_details_hint">Click to see details</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Careers;

export const careersLoader = async () => {
  const res = await fetch("http://localhost:5000/careers");

  if(!res.ok) {
    throw Error("Couldn't fetch careers")
  }else {
    return res.json();
  }
};
