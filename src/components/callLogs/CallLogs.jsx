import { useState } from "react";
import { SearchIcon } from "lucide-react";

import {callLogsData, issueArray, callType, dateArray} from "@/projectData/callLogsData";
import SearchBar from "./SearchBar";
import CallList from "./CallList";
import DropdownButton from "../shared/DropdownButton";
import CallDetails from "./CallDetails";


const CallLogs = () => {
  const [active, setActive] = useState(callLogsData[0])

 
  return (
    <div className="pr-4 pt-6">
      <div className="flex justify-between gap-6 ">
        
        <div className="flex flex-col gap-6 grow max-w-1/2 ">
          <SearchBar
          icon={<SearchIcon />}
          className={"color-card pl-4 h-12.5   "}
          />
          
          <CallList active={active} setActive={setActive} />

        </div>

        <div className="flex flex-col gap-6 grow max-w-1/2 ">
          <div className="flex gap-6 justify-end">
            <DropdownButton items={callType} />
            <DropdownButton items={issueArray} />
            <DropdownButton items={dateArray} />
          </div>

          <CallDetails data={active} />
        </div>
      </div>
    </div>
  );
}

export default CallLogs