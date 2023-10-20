
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

const RootLayouts = () => {
    return ( 
        <div className="root-layout ">
               <header>
      <nav>
        <h1>Brookes Job Center</h1>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/about'> About </NavLink>
        <NavLink to='/help'> Help </NavLink>
        <NavLink to='/careers'> Careers </NavLink>
      </nav>

      <Breadcrumb/>
    </header>
    <main>
        <Outlet/>
    </main>
        </div>
     );
}
 
export default RootLayouts;