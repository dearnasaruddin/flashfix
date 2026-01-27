import LogoutIcon from "../../assets/icons/LogoutIcon"
import MenuItems from "./MenuItems"

const Sidebar = () => {

    return (
        <div className='2xl:grow h-full flex flex-col bg-primary pt-9.5 pb-13 border border-borderColor'>
            <div className="w-fit mx-auto">
                <img src="./logo.svg" alt="logo" />
            </div>
            {/* ============ Menu Items ============ */}
            <MenuItems />

            {/* ============ Log Out button ============ */}
            <button type="button" className="flex items-center gap-4 ml-4 mt-auto cursor-pointer"><LogoutIcon /><span className="font-medium text-base leading-[150%] text-[#FF1100]">Log Out</span></button>
        </div>
    )
}

export default Sidebar