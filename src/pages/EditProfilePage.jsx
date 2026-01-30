import { profileForm } from "@/projectData/profileData";

const EditProfilePage = () => {
  return (
    <div>
      {/* ===================== profile form ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-md:space-y-2 md:gap-y-6 md:gap-x-14 md:max-xl:mr-2 mt-8 md:mt-14">
        {profileForm.map((field, index) => (
          <div key={index} className="flex flex-col gap-1 md:gap-2">
            
            {/* ===================== form label ===================== */}
            <label className="font-inter font-medium text-xs xs:text-sm md:text-lg leading-[150%] max-md:ml-1 text-white">
              {field.label}
            </label>

            {/* ===================== form input ===================== */}
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="font-inter font-normal text-sm md:text-base leading-6 text-white bg-[#0A0A0F50] border border-[#00FF8820] py-1.5 xs:py-2 md:py-3 px-4 rounded-[14px]"
            />
          </div>
        ))}
      </div>
      
      {/* ===================== save button ===================== */}
      <div className="mt-5 md:mt-20 flex items-center justify-center cursor-pointer">
        <button className="py-1.5 xs:py-2 md:py-2 max-md:w-full md:px-39 bg-[#00C950] font-inter font-bold text-sm md:text-xl leading-[150%] text-white rounded-[12px]">
          Save
        </button>
      </div>
    </div>
  )
}

export default EditProfilePage