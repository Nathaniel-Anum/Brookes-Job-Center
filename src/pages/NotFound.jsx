import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Page Not Found</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ullam numquam beatae quasi adipisci dignissimos quaerat 
                commodi facere voluptatem hic dolor?</p>
            <p>Go to the <Link to='/'>HomePage</Link></p>
        </div>
        );
};

export default NotFound;