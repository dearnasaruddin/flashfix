import { Badge } from "@/components/ui/badge";
import PhoneIconWithBG from "@/assets/icons/PhoneIconWithBG";
import ClockLite from "@/assets/icons/ClockLite";
import TickIcon from "@/assets/icons/TickIcon";
import { callLogsData } from "@/projectData/callLogsData";

const CallList = ({ active, setActive }) => {
    return (
        <div className="rounded-[12px] color-card grow">
            <h3 className="font-inter font-normal text-xl leading-7 text-white mb-4 cursor-pointer p-4 border-b border-borderColor ">
                Call list
            </h3>

            {callLogsData.map((item) => (
                <div className={`relative md:flex justify-between p-4 ${item.id === active.id ? 'border-b-3 border-[#2B7FFF]' : 'border border-[#2B7FFF10]  cursor-pointer '} `} key={item.id} onClick={() => setActive(item)} >

                    <div className="flex flex-col gap-5">

                        {/* ============== Call Icon, Number, Date & Time ============== */}
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


                        <div className="flex items-center max-md:gap-2 md:gap-4.5 max-sm:text-[10px] max-md:text-xs">

                            {/* ============== Call Duration ============== */}
                            <div className="flex items-center gap-1 text-gray">
                                <div>
                                    <ClockLite />
                                </div>
                                <time>{item.duration}</time>
                            </div>

                            {/* ============== Call Outcome ============== */}
                            <div className="flex items-center gap-1 text-gray">
                                <div>
                                    <TickIcon className={'size-4'} />
                                </div>
                                <p>{item.outcome}</p>
                            </div>

                            {/* ============== Issue Type Badge ============== */}
                            <div>
                                <Badge className="bg-borderColor text-info rounded-[4px] py-0.5 px-1 md:px-4 font-inter leading-5 text-xs md:text-sm ">
                                    {item.issueType}
                                </Badge>
                            </div>
                        </div>
                    </div>


                    {/* ============== Call Type Badge ============== */}
                    <div className="min-[380px]:absolute max-[380px]:mt-1.5 top-2 lg:top-4 right-2 lg:right-4">
                        <Badge
                            className={`rounded-sm md:rounded-[10px] py-1 px-1 md:px-2 font-inter leading-5 text-[10px] md:text-xs 
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