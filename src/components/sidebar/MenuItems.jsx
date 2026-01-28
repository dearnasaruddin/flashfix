import { Link, useLocation } from "react-router-dom"
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
                            <span className=" text-white flex items-center justify-center ">
                                {item.icon}
                            </span>

                        {/* ============ Text ============ */}
                            <span className="font-inter font-medium text-base leading-[150%] text-white whitespace-nowrap">
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