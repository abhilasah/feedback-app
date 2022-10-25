import { Route, Routes } from 'react-router-dom';
import Form from '../pages/form/Form';
import Home from '../pages/home/Home';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/forms" index element={<Form />} />
        </Routes>
    );
};

export default AppRouter;
