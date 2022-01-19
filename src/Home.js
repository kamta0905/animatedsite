import React from 'react'
import "./Home.css"
import { useContext, createContext } from 'react';
import App from './App';
const UserContext = createContext();

const Home = () => {
    const theme = useContext(UserContext);
    return (

        <div className='c-lesPJm-iOCrvT-css'>
            Home Page
        </div >
    )
}

export default Home
