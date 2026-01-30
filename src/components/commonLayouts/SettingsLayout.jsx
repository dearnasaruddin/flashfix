import { useLocation, Outlet } from "react-router-dom"
import ButtonMain from "@/components/shared/ButtonMain";
import profileImage from "@/assets/images/profileImg.png"
import EditIcon from "@/assets/icons/EditIcon";

const SettingsLayout = () => {
    const { pathname } = useLocation()
    return (
        <section>
            <div className={`pt-6 font-inter font-normal text-sm md:text-2xl text-center md:leading-9 text-white flex gap-x-5 md:gap-x-9.5 border-b ${pathname == '/settings/profile' || pathname == '/settings/password' ? 'border-b-[#192D71]' : 'border-b-transparent'}`}>
                <button className={`px-3 pb-2 border-b-2 cursor-pointer ${pathname == '/settings/profile' ? 'border-b-[#87A2FF]' : 'border-b-transparent'}`}>Profile</button>
                <button className={`px-3 pb-2 border-b-2 cursor-pointer ${pathname == '/settings/password' ? 'border-b-[#87A2FF]' : 'border-b-transparent'}`}>Password Settings</button>
            </div>
            <div className={`mt-10 max-md:pr-2 ${pathname == '/settings' ? 'max-w-137.5' : 'max-w-250'}`}>
                <div>
                    <h3 className="font-inter font-normal md:text-xl leading-[150%] text-white mb-2">
                        Profile Image
                    </h3>
                    
                    <div className={pathname == '/settings' ? 'flex gap-x-2' : 'relative w-fit'}>
                        {/* ======== profile image ======== */}
                        <div className="size-25.5">
                            <img
                                src={profileImage}
                                alt="profileImage"
                                className="w-full"
                            />
                        </div>

                        {/* ======== profile edit btn ======== */}
                        {pathname == '/settings' &&
                            <div className="mb-2 place-self-end">
                                <ButtonMain
                                    text="Edit Profile"
                                    routeName={'/settings/profile'}
                                    profile={true}
                                    className={'text-xs inset-shadow border-b border-[rgba(255,255,255,0.50)] px-2.5 py-1.5'
                                    }
                                />
                            </div>
                        }


                        {/* ======== profile image edit btn ======== */}
                        {pathname == '/settings/profile' &&
                            <div className="size-7 md:size-10 absolute -bottom-0.5 md:-bottom-2 right-0.5 md:-right-2">
                                <EditIcon />
                            </div>
                        }
                    </div>


                    {/* ======== inner components ======== */}
                    <Outlet />

                </div>
            </div >
        </section>
    )
}

export default SettingsLayout