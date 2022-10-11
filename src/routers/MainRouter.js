import {Navigate, Route, Routes} from "react-router-dom";
import Todo from "../components/todolist/Todo";
import Exemple1 from "../components/exemple/Exemple1";
import Exemple2 from "../components/exemple/Exemple2";
import Exemple3 from "../components/exemple/Exemple3";
import Exemple4 from "../components/exemple/Exemple4";
import Home from "../components/Home";

const MainRouter = () => {
    return(
        <Routes>
            <Route path='/404' element={<div>404 t'as cru aller où comme ça</div>}/>
            <Route
                path='/'
                element={<Home/>}/>
            <Route
                path='/todolist'
                element={<Todo/>}
            />
            <Route
                path={'/exemple-1'}
                element={<Exemple1/>}/>
            <Route
                path={'/exemple-2'}
                element={<Exemple2/>}/>
            <Route
                path={'/exemple-3'}
                element={<Exemple3/>}/>
            <Route
                path={'/exemple-4'}
                element={<Exemple4/>}/>
            <Route path='*' element={<Navigate to='/404'/>}/>
        </Routes>
    )
}

export default MainRouter;