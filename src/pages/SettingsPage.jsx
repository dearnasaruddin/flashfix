import { profileData } from "@/projectData/profileData";


const SettingsPage = () => {

  return (
    <div className="pt-6 ">
      {/* ============== Profile Info ============== */}
      {profileData.map((item, id) => (
        <div
          key={id}
          className="flex items-center  py-4 border-b border-[#192D71] last:border-transparent"
        >
          <p className="w-24 xs:w-30 md:w-51.5 whitespace-nowrap font-inter font-medium text-xs xs:text-sm md:text-xl leading-[150%] text-white  ">
            {item.text}
          </p>
          <p className="max-xxs:max-w-34 xxs:max-xs:max-w-40 xs:max-md:max-w-50 font-inter font-normal text-xs xs:text-sm md:text-xl leading-[150%] text-white">
            {item.para}
          </p>
        </div>
      ))}
    </div>
  )
}

export default SettingsPage