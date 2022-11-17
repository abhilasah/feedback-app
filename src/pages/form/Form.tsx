import { Link } from 'react-router-dom';

const Form = () => {
    return (
        <div className="grid place-content-center">
            <h1 className="text-black dark:text-white">FORMS</h1>
            <nav>
                <Link
                    className="text-blue-500 background-transparent font-bold uppercase  py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    to="/"
                >
                    Navigate to Home
                </Link>
            </nav>
        </div>
    );
};

export default Form;
