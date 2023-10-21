import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useState } from "react";


const Root = () => {

    const [theme, setTheme] = useState(true);
    return (
        <div data-theme={theme ? "emerald" : "business"}>
            <Navbar theme={theme} setTheme={setTheme}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;