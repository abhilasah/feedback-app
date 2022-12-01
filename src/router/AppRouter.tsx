import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Questions from '../pages/questions/Questions';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/questions" index element={<Questions />} />
        </Routes>
    );
};

export default AppRouter;
