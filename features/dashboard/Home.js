import React from 'react'
import { db } from '../../firebase';
import Main from "./Components/main/Main";
import Nav from "./Components/nav/Nav";
import  "./Home.css"

function Home() {
    
    return (
        <React.Fragment>
            <div className='home flex'>
                <Nav />
                <Main/>
            </div>
        </React.Fragment>


    );
}

export default Home;