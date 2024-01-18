import './App.css';

import KeyboardPage from "./KeyboardPage";
import Navbar from "./Navbar";
import {useState} from "react";
import Home from "./Home";
import Contacts from "./Contacts";


function App() {
    const [page, setPage] = useState("Home")

    console.log((page))


    return (
        <div>
            <Navbar page={page} setPage={setPage} />
            {page==="Home"&&<Home/>}
            {page==="Demo"&&<KeyboardPage/>}
            {page==="Contact"&&<Contacts/>}
        </div>

    )

}

export default App;
