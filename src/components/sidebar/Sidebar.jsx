import {Link} from 'react-router-dom'
import LogoutIcon from "../../assets/icons/LogoutIcon"
import MenuItems from "./MenuItems"

const Sidebar = () => {

    return (
        <div className='h-full flex flex-col bg-primary pt-9.5 pb-13 border border-borderColor sticky top-0 left-0 z-50'>
            <div className="w-fit mx-auto max-md:max-w-10">
                <Link to={'/'}><img src="./logo.png" alt="logo" /></Link>
            </div>
            {/* ============ Menu Items ============ */}
            <MenuItems />

            {/* ============ Log Out button ============ */}
            <button type="button" className="flex items-center gap-4 ml-4 mt-auto cursor-pointer"><LogoutIcon /><span className="max-md:hidden font-medium text-base leading-[150%] text-[#FF1100]">Log Out</span></button>
        </div>
    )
}

export default Sidebar