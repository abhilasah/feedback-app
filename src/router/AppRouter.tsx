import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Questions from '../pages/questions/Questions';
import Qrcode from '../pages/Qrcode';

const AppRouter = (props:any) => {
    return (
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/questions" index element={<Questions {...props}/>} />
            {/* for temp */}
            <Route path="/qrcode" index element={<Qrcode />} /> 
        </Routes>
    );
};

export default AppRouter;
