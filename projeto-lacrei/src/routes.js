import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Personuser from './Pages/Personuser';


function MainRoutes() {

    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people' element={<Personuser />} />

        </Routes>
    )
}

export default MainRoutes;