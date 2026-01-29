import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"
import Header from "../header/Header"


const CommonLayout = () => {
    return (
        <div className="flex bg-[linear-gradient(118.53deg,#020618_-34.38%,#162456_54.59%,#0F172B_143.57%)] ">
            <Sidebar />
            <div className="grow">
                <Header />
                <div className="ml-2 md:ml-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default CommonLayout