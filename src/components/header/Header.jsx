import { useLocation } from "react-router-dom"
import profileImg from '../../assets/images/profileImg.png'
import BellIcon from "@/assets/icons/BellIcon"

const Header = () => {
    const { pathname } = useLocation()
    return (
        <header className="sticky top-0 left-0 z-50 bg-primary w-full flex items-center justify-between px-6 py-2">

            {/* ========== Header Text ========== */}
            <h1 className=" font-inter font-normal text-xl lg:text-[32px] lg:leading-9 text-white">
                {pathname == '/' && 'Dashboard Overview'}
                {pathname == '/call-log' && 'Call Logs & History'}
                {pathname == '/appointments' && 'Appointments'}
                {pathname.includes('/settings') && 'Settings'}
            </h1>

            {/* ========== Bell Icon & Profile Image ========== */}
            <div className="flex items-center justify-center space-x-2 lg:space-x-10">
                <BellIcon />
                <div className="max-lg:w-10">
                    <img src={profileImg} alt="profileImg" />
                </div>
            </div>
        </header>
    )
}

export default Header