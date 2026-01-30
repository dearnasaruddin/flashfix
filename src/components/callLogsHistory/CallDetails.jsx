import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PlayIcon from "@/assets/icons/PlayIcon";
import Conversation from "./Conversation";

const CallDetails = ({ data }) => {
  return (
    <div className="rounded-[12px] color-card grow">
      <h3 className="font-inter font-normal text-xl leading-7 text-white cursor-pointer p-4 border-b border-borderColor ">
        Call Details
      </h3>
      {/* ============== Call Details ============== */}
      <div className="flex flex-col gap-6 p-6 ">
        <div className="flex flex-wrap gap-4 font-inter font-normal justify-between ">
          <div className="w-[48%]">
            <span className="text-gray text-sm leading-5 ">Phone Number</span>
            <p className="text-white max-md:whitespace-nowrap max-md:mt-1 text-sm md:text-base md:leading-6 ">
              {data.phoneNumber}
            </p>
          </div>

          <div className="w-[48%]">
            <span className="text-gray text-sm leading-5 ">Duration</span>
            <p className="text-white max-md:whitespace-nowrap max-md:mt-1 text-sm md:text-base md:leading-6 ">{data.duration}</p>
          </div>

          <div className="w-[48%]">
            <span className="text-gray text-sm leading-5 ">Date & Time</span>
            <p className="text-white max-md:whitespace-nowrap max-md:mt-1 text-sm md:text-base md:leading-6 ">{data.dateTime}</p>
          </div>

          <div className="w-[48%]">
            <span className="text-gray text-sm leading-5 ">Issue Type</span>
            <p className="text-white max-md:whitespace-nowrap max-md:mt-1 text-sm md:text-base md:leading-6 ">{data.issueType}</p>
          </div>
        </div>

        {/* =========== Call Type Badge =========== */}
        <div>
          <p className="text-gray text-sm leading-5 mb-1 ">Call Type</p>
          <Badge
            className={` rounded-[10px] py-1 px-2 font-inter leading-5 text-xs 
                ${data.callType === "AI Resolved" && "text-green bg-[#00C95020] border border-[#00C95030] "}
                ${data.callType === "Warm Transfer" && "text-orange bg-[#FF690020] border border-[#FF690030] "}
                ${data.callType === "Appointment" && "text-info bg-borderColor border border-[#2B7FFF30] "}
                ${data.callType === "Dropped" && "text-coral-red bg-[#FF150020] border border-[#FF690030] "} `}
          >
            {data.callType}
          </Badge>
        </div>

        {/* =========== Outcome & audio btn =========== */}
        <div>
          <span className="text-gray text-sm leading-5 ">Outcome</span>
          <p className="text-white max-md:whitespace-nowrap max-md:mt-1 text-sm md:text-base md:leading-6 ">{data.outcome}</p>
        </div>
        <Button className="audio-gradient flex justify-center w-full rounded-[14px] border md:h-12.5 border-[#AD46FF30] ">
          <PlayIcon />
          <p className="text-[#C27AFF]">Play Audio Recording</p>
        </Button>

        {/* =========== Conversation Transcript =========== */}
        <Conversation data={data} />

      </div>
    </div>
  )
}

export default CallDetails