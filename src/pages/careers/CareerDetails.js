import { Link, useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();
  console.log(useParams())
  console.log({id})

  return (
    <div className="career_details">
      <h2>Career details for {career.title}</h2>
      <p>Starting salary: {career.salary}$</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi?
        </p>
      </div>
      <Link to="/careers">Back</Link>
    </div>
  );
};

export default CareerDetails;

export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/careers/${id}`);

  if(!res.ok) {
    throw Error("Couldn't find that job")
  }else {
    return res.json();
  }
};
