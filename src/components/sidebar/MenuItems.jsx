import menuItemsData from '../../projectData/menuItemsData'
import ButtonMain from "../shared/ButtonMain"

const MenuItems = () => {

    return (
        <ul className='mt-18 font-medium text-base leading-[150%] text-white px-2 space-y-7'>
            {
                menuItemsData.map((item, index) => (
                    <li key={index}>
                        <ButtonMain icon={item.icon} text={item.text} routeName={item.routeName}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuItems