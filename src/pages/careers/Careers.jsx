import { Link, useLoaderData } from "react-router-dom"
import axios from "axios"

export default function Careers() {
  const careers = useLoaderData()
 

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()}key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
  const res = await axios.get('http://localhost:8000/careers')
  return res.data
}