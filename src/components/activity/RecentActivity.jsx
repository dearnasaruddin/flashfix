import activitiesData from '@/projectData/activitiesData'
import Subheading from '../shared/Subheading'

const RecentActivity = () => {
  return (
    <div className="grow md:max-w-1/2 p-3 xs:p-6 rounded-[12px] bg-card-bg border border-borderColor">

      <Subheading content='Recent Activity' className={'max-xs:ml-3 font-arimo'} />

      <div className="flex flex-col gap-y-3 mt-4">
        {activitiesData.map((activity, index) => (
          <div key={index} className="rounded-[10px] p-3 flex gap-x-3 bg-[#1D293D50] cursor-pointer">

            {/* ======== Dot ======== */}
            <div className={`size-2 rounded-full mt-2 ${activity.dotColor}`}> </div>

            <div>
            {/* ======== Activity Text ======== */}
              <p className="font-inter font-normal text-sm leading-5 text-white mb-1">
                {activity.text}
              </p>
              
              {/* ======== Activity Time ======== */}
              <p className="font-inter font-normal text-xs leading-4 text-light-gray">
                {activity.time}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity