import { Link, useLocation } from "react-router-dom"
import HomeIcon from "../../assets/icons/HomeIcon"
import PhoneIcon from "../../assets/icons/PhoneIcon"
import CalenderIcon from "../../assets/icons/CalenderIcon"
import SettingsIcon from "../../assets/icons/SettingsIcon"
import menuItemsData from '../../projectData/menuItemsData'

const MenuItems = () => {
    
    const { pathname } = useLocation()

    return (
        <ul className='mt-18 font-medium text-base leading-[150%] text-white px-2 space-y-7'>
            {
                menuItemsData.map((item, index) => (
                    <li key={index}>
                        <Link to={item.routeName} className={`py-1 px-2 flex items-center gap-4 rounded-xl ${pathname == item.routeName ? 'inset-shadow border-b border-[rgba(255,255,255,0.50)]' : ''}`}>
                        {/* ============ Icons ============ */}
                            <span className="  text-white flex items-center justify-center ">
                                {item.icon == 'HomeIcon' && <HomeIcon />}
                                {item.icon == 'PhoneIcon' && <PhoneIcon />}
                                {item.icon == 'CalenderIcon' && <CalenderIcon />}
                                {item.icon == 'SettingsIcon' && <SettingsIcon />}
                            </span>

                        {/* ============ Text ============ */}
                            <span className="font-inter font-medium text-base leading-[150%] text-white">
                                {item.text}
                            </span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuItems