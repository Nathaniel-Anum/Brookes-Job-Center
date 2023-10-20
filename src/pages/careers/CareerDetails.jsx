import React from "react";
import { useParams, useLoaderData } from "react-router";
import axios from "axios";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      {/* <h2>{id}</h2> */}
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>

      <div className="details">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          laborum iure et ut qui. Molestiae sequi, eum fugiat cum voluptates
          deleniti doloribus ratione, nemo facere exercitationem optio, autem
          incidunt iusto?
        </p>
      </div>
    </div>
  );
};

// loader function
export const CareerDetailsLoader = async ({ params }) => {
  const {id} = params
    
  const res = await axios.get("http://localhost:8000/careers/" + id);
  return res.data;
};
export default CareerDetails;
