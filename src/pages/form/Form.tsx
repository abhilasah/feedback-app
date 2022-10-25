import { Link } from 'react-router-dom';

const Form = () => {
    return (
        <div>
            <h1>FORMS</h1>
            <input type="text" name="test" id="test" />
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
};

export default Form;
