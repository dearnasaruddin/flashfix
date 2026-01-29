import { profileForm } from "@/projectData/profileData";
import profileImage from "../assets/images/profileImg.png";
import EditIcon from "@/assets/icons/EditIcon";


const EditProfilePage = () => {
  return (
    <div className="pt-6 max-w-250">
      <div className="font-inter font-normal md:text-2xl md:leading-9 text-white flex gap-x-16 ml-3 border-b border-[#192D71] pb-2">
        <button className={"border-b-2 -mb-2 px-3 border-b-[#87A2FF]"}>
          Profile
        </button>
        <button>Password Settings</button>
      </div>

      <div className="mt-10">
        <h3 className="font-inter font-normal text-[20px] leading-[150%] text-white mb-2">
          Profile Image
        </h3>

        <div className="flex relative ">
          <div className="size-25.5">
            <img src={profileImage} alt="profileImage" className="w-full" />
          </div>
          <div className="size-7 md:size-10 absolute top-17 left-18 md:left-16">
            <EditIcon />
          </div>
        </div>

        {/* ===================== profile form ===================== */}
        <div className="grid md:grid-cols-2 md:gap-y-6 md:gap-x-14 mt-14">
          {profileForm.map((field, index) => (
            <div key={index} className="flex flex-col gap-2">
              <label className="font-inter font-medium text-base md:text-lg leading-[150%] text-white">
                {field.label}
              </label>

              <input
                type={field.type}
                placeholder={field.placeholder}
                className="font-inter font-normal text-base leading-6 text-white
                   bg-[#0A0A0F50] border border-[#00FF8820]
                   py-3 px-4 rounded-[14px]"
              />
            </div>
          ))}
        </div>
             {/* ===================== profile button ===================== */}

        <div className="mt-6 md:mt-20 flex items-center justify-center cursor-pointer">
          <button className="py-2 max-md:w-full md:px-39 bg-[#00C950] font-inter font-bold text-[20px] leading-[150%] text-white rounded-[12px]">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage