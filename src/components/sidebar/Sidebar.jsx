import { Link } from 'react-router-dom'
import LogoutIcon from "../../assets/icons/LogoutIcon"
import MenuItems from "./MenuItems"
import logoImage from '@/assets/images/logo.png'

const Sidebar = () => {

    return (
        <div className='h-dvh flex flex-col bg-primary pt-9.5 pb-13 border border-borderColor sticky top-0 left-0 z-50'>

            {/* ============ Logo ============ */}
            <div className="w-fit mx-auto max-lg:max-w-10">
                <Link to={'/'}><img src={logoImage} alt="logo" /></Link>
            </div>

            {/* ============ Menu Items ============ */}
            <MenuItems />

            {/* ============ Log Out button ============ */}
            <button type="button" className="flex items-center gap-4 ml-4 mt-auto cursor-pointer group"><LogoutIcon  className={'size-7 md:size-8 max-lg:fill-[#FF1100] group-hover:fill-[#FF1100] duration-200'}/><span className="max-lg:hidden font-medium text-base leading-[150%] text-[#FF1100]">Log Out</span></button>
        </div>
    )
}

export default Sidebar