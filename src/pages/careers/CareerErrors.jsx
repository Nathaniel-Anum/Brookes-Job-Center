
import { useRouteError } from 'react-router';
import { Link } from 'react-router-dom';

const CareerErrors = () => {
    const error = useRouteError()
    return (
        <div>
            <div className="career-erros">
                <h2>Error</h2>
                <p> {error.message} </p>
                <p>Go to the <Link to='/'> Homepage</Link></p>
            </div>
        </div>
    );
};

export default CareerErrors;