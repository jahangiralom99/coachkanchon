import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-black">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;