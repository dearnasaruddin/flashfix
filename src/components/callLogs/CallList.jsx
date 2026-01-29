import { Badge } from "@/components/ui/badge";
import PhoneIconWithBG from "@/assets/icons/PhoneIconWithBG";
import ClockLite from "@/assets/icons/ClockLite";
import TickIcon from "@/assets/icons/TickIcon";
import { callLogsData } from "@/projectData/callLogsData";

const CallList = ({ active, setActive }) => {
    return (
        <div className="rounded-[12px] color-card grow md:max-w-1/2 ">
            <h3 className="font-inter font-normal text-[20px] leading-7 text-white mb-4 cursor-pointer p-4 border-b border-borderColor ">
                Call list
            </h3>
            {callLogsData.map((item) => (
                <div className={`max-md:relative md:flex justify-between p-4 ${item.id === active.id ? 'border-b-3 border-[#2B7FFF]' : 'border border-[#2B7FFF10]  cursor-pointer '} `} key={item.id} onClick={() => setActive(item)} >
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2 md:gap-4 ">
                            <div className="icon size size-10">
                                <PhoneIconWithBG />
                            </div>
                            <div className="font-inter font-normal">
                                <p className="text-white text-sm md:text-base md:leading-6 ">{item.phoneNumber}</p>
                                <small className="text-gray text-xs leading-5 ">
                                    {item.dateTime[0] + ' • ' + item.dateTime[1]}
                                </small>
                            </div>
                        </div>

                        <div className="flex items-center max-md:gap-2 md:gap-4.5 max-md:text-xs">
                            <div className="flex items-center gap-1 text-gray">
                                <div className="">
                                    <ClockLite />
                                </div>
                                <time>{item.duration}</time>
                            </div>
                            <div className="flex items-center gap-1 text-gray">
                                <div className="">
                                    <TickIcon className={'size-4'} />
                                </div>
                                <p>{item.outcome}</p>
                            </div>
                            <div className="">
                                <Badge className="bg-borderColor text-info rounded-sm py-0.5 px-4 font-inter leading-5 text-xs md:text-sm ">
                                    {item.issueType}
                                </Badge>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-2 right-2">
                        <Badge
                            className={` rounded-[10px] py-1 px-2 font-inter leading-5 text-[10px] md:text-xs 
                                ${item.callType === "AI Resolved" && "text-green bg-[#00C95020] border border-[#00C95030] "}
                                ${item.callType === "Warm Transfer" && "text-orange bg-[#FF690020] border border-[#FF690030] "}
                                ${item.callType === "Appointment" && "text-info bg-borderColor border border-[#2B7FFF30] "}
                                ${item.callType === "Dropped" && "text-coral-red bg-[#FF150020] border border-[#FF690030] "} `}
                        >
                            {item.callType}
                        </Badge>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CallList