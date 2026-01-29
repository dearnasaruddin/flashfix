import { Link, useLocation } from "react-router-dom"
import profileImg from '../../assets/images/profileImg.png'
import BellIcon from "@/assets/icons/BellIcon"

const Header = () => {
    const { pathname } = useLocation()
    return (
        <header className="sticky top-0 left-0 z-50 bg-primary w-full flex items-center justify-between px-6 py-3.5 md:py-2">
            <h1 className=" font-inter font-normal md:text-[32px] md:leading-9 text-white">
                {pathname == '/' && 'Dashboard Overview'}
                {pathname == '/call-log' && 'Call Logs & History'}
                {pathname == '/appointments' && 'Appointments'}
                {pathname.includes('/settings') && 'Settings'}
            </h1>

            <div className="flex items-center justify-center space-x-3 md:space-x-10">
                <BellIcon />
                <div className="max-md:w-8">
                    <img src={profileImg} alt="profileImg" />
                </div>
            </div>
        </header>
    )
}

export default Header