import './App.css';

import KeyboardPage from "./KeyboardPage";
import Navbar from "./Navbar";
import {useState} from "react";
import Home from "./Home";


function App() {
    const [page, setPage] = useState("Home")


    return (
        <div>
            <Navbar page={page} setPage={setPage} />
            {page==="Home"&&<Home/>}
            {page==="Demo"&&<KeyboardPage/>}
        </div>

    )

}

export default App;
