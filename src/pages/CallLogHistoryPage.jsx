import { useState } from "react";
import { SearchIcon } from "lucide-react";

import { callLogsData, issueArray, callType, dateArray } from "@/projectData/callLogsData";
import SearchBar from "@/components/callLogs/SearchBar";
import CallList from "@/components/callLogs/CallList";
import DropdownButton from "@/components/shared/DropdownButton";
import CallDetails from "@/components/callLogs/CallDetails";


const CallLogHistoryPage = () => {

  const [active, setActive] = useState(callLogsData[0])

  return (
    <div className="pr-4 pt-6">
      <div className="w-full flex max-md:flex-wrap justify-between gap-6 mb-5.5">
        <div className="md:max-w-1/2 grow lg:pr-6">
          <SearchBar
            icon={<SearchIcon />}
            className={"color-card pl-4 h-12.5   "}
          />
        </div>
        <div className="md:max-w-1/2 flex gap-1 md:gap-6 justify-end">
          <DropdownButton items={callType} />
          <DropdownButton items={issueArray} />
          <DropdownButton items={dateArray} />
        </div>
      </div>
      <div className="flex max-md:flex-wrap justify-between gap-6 ">

        <div className="flex max-md:flex-wrap gap-6 grow">

          <CallList active={active} setActive={setActive} />

          <CallDetails data={active} />
        </div>
      </div>
    </div>
  );
}

export default CallLogHistoryPage