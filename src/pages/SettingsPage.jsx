import profileImage from "@/assets/images/profileImg.png"
import { profileData } from "@/projectData/profileData";
import ButtonMain from "@/components/shared/ButtonMain";

const SettingsPage = () => {
  return (
    <>
      <div className="pt-6 max-w-137.5">
        <div className="font-inter font-normal md:text-2xl md:leading-9 text-white flex gap-x-16 ml-3">
          <button>Profile</button>
          <button>Password Settings</button>
        </div>
        <div className="mt-10">
          <h3 className="font-inter font-normal text-xl leading-[150%] text-white mb-2">
            Profile Image
          </h3>
          <div className="flex gap-x-2">
            <div className="size-25.5">

              <img
                src={profileImage}
                alt="profileImage"
                className="w-full"
              />
            </div>
            <div className="mb-2 place-self-end">
              <ButtonMain
                text="Edit Profile"
                routeName={'/settings/profile'}
                profile={true}
                className={'text-xs inset-shadow border-b border-[rgba(255,255,255,0.50)] px-2.5 py-1.5'
                }
              />
            </div>
          </div>
          <div className="pt-6 ">
            {profileData.map((item, id) => (
              <div
                key={id}
                className="flex items-center  py-4 border-b border-[#192D71] last:border-transparent"
              >
                <p className="w-30 md:w-51.5 font-inter font-medium text-sm md:text-xl leading-[150%] text-white  ">
                  {item.text}
                </p>
                <p className="max-md:max-w-50 font-inter font-normal text-sm md:text-xl leading-[150%] text-white">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsPage