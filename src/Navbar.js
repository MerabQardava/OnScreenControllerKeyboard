import React from 'react';
import "./Navbar.css"
function Navbar({setPage,page}) {
console.log(page)
    function changePage(sus){
        setPage(sus.target.textContent)
    }



    return (
        <div>
            <nav>
                <img id="logo" src="Character%20Wheele.svg" alt=""/>
                <div id="pages">
                    <p className={page==="Home"?"current":""} onClick={changePage}>Home</p>
                    <p className={page==="Demo"?"current":""} onClick={changePage}>Demo</p>
                    <p className={page==="Contact"?"current":""} onClick={changePage}>Contact</p>

                </div>

             </nav>

        </div>
    );
}

export default Navbar;