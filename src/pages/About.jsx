import { useState } from "react";
import { Navigate } from "react-router";


const About = () => {
    const [user, setUser] = useState('mario');

    if (!user){
        return (
            <Navigate to='/' replace={true}/>
        )
    }
    return ( 
        <div className="about">
            <h2> About US</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r
                 eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.</p>
                

        
        <button onClick={()=> setUser(null)}> Logout </button>
        </div>
     );
}
 


export default About;