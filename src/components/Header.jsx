import { Link, useLocation } from "react-router-dom"
import BellIcon from '../assets/icons/BellIcon'
import profileImg from '../assets/images/profileImg.png'

const Header = () => {
    const { pathname } = useLocation()
    return (
        <header className="sticky top-0 left-0 bg-primary w-full flex items-center justify-between px-6 py-2">
            <h1 className=" font-inter font-normal text-[32px] leading-9 text-white">
                {pathname == '/' && 'Dashboard Overview'}
                {pathname == '/call-log' && 'Call Logs & History'}
                {pathname == '/appointments' && 'Appointments'}
                {pathname.includes('/settings') && 'Settings'}
            </h1>

            <div className="flex items-center justify-center space-x-10">
                <BellIcon />
                <img src={profileImg} alt="profileImg" />
            </div>
        </header>
    )
}

export default Header