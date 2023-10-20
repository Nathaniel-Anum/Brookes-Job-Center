import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const HelpLayout = () => {
    return ( 
        <div className="help-layout ">
        <h2>Website Help</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Error quasi eaque iusto repellendus, 
             sint ea harum ratione facere atque doloribus nobis,
              pariatur molestiae nisi quia assumenda distinctio modi. 
              Reiciendis unde soluta repellendus maxime quam temporibus, 
              eos laboriosam quia hic, voluptate sit nam cupiditate deserunt
               illum assumenda alias repudiandae, cum ullam.</p>


<nav>
    <NavLink to='faq'> View the FAQ</NavLink>
    <NavLink to='contact'> Contact US</NavLink>
</nav>
               <Outlet/>
        </div>
     );
}
 
export default HelpLayout;