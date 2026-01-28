import CalenderIcon from "@/assets/icons/CalenderIcon"
import HomeIcon from "@/assets/icons/HomeIcon"
import PhoneIcon from "@/assets/icons/PhoneIcon"
import SettingsIcon from "@/assets/icons/SettingsIcon"


const menuItemsData = [
    {
        icon: <HomeIcon/>,
        text: 'Dashboard Overview',
        routeName: '/'
    },
    {
        icon: <PhoneIcon/>,
        text: 'Call Logs',
        routeName: '/call-log'
    },
    {
        icon: <CalenderIcon/>,
        text: 'Appointments',
        routeName: '/appointments'
    },
    {
        icon: <SettingsIcon/>,
        text: 'Settings',
        routeName: '/settings'
    },
]
export default menuItemsData