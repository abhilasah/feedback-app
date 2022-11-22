import { Link } from 'react-router-dom';

const Form = () => {
    return (
        <div className="grid place-content-center">
            <h1 className="text-black dark:text-white">FORMS</h1>
            <nav>
                <Link
                    className="text-white-500 background-transparent font-bold uppercase  py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    to="/"
                >
                    Navigate to Home
                </Link>
            </nav>

            <main className="p-5">
                <p className="text-bold text-gray-400 dark:text-gray-50">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Praesentium nesciunt repellendus laborum reprehenderit iure
                    vero sed repudiandae illo itaque cum commodi expedita hic
                    esse fugit beatae magni, dolor sit nihil voluptates tempora!
                    Quod voluptas ducimus voluptates, laboriosam quia possimus
                    temporibus delectus. Facere maiores doloremque, vero
                    reiciendis nostrum ut a expedita. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Impedit magnam
                    praesentium corporis, molestiae soluta beatae reprehenderit
                    quasi, voluptas eos perspiciatis natus quis suscipit placeat
                    eaque assumenda itaque fugiat quo vero, sint commodi harum.
                    Quod, molestias. Cumque facilis tempora ex incidunt
                    nesciunt, sint eligendi culpa ut maiores doloremque nam
                    soluta ullam voluptate, repellendus excepturi aliquam quas
                    illum assumenda, minus quos? Nam nesciunt quam minima a
                    neque provident, assumenda aspernatur aperiam nihil?
                    Deserunt eum possimus libero consequatur, saepe, ex quis
                    dolorem dolorum aliquam porro vero aliquid repudiandae
                    laudantium minima accusantium nostrum reiciendis ducimus,
                    dicta fuga fugit quod. Recusandae unde quaerat adipisci
                    nisi!
                </p>
            </main>
        </div>
    );
};

export default Form;
