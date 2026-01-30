import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { callLogsData, issueArray, callType, dateArray } from "@/projectData/callLogsData";
import SearchBar from "@/components/callLogsHistory/SearchBar";
import CallList from "@/components/callLogsHistory/CallList";
import DropdownButton from "@/components/shared/DropdownButton";
import CallDetails from "@/components/callLogsHistory/CallDetails";


const CallLogHistoryPage = () => {

  const [active, setActive] = useState(callLogsData[0])

  return (
    <div className="pr-2 md:pr-4 pt-6">

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">

        {/* ============== Dropdowns ============== */}
        <div className="grow max-h-12.5">
          <SearchBar
            icon={<SearchIcon />}
            className={"color-card pl-4 h-12.5  "}
          />
        </div>


        {/* ============== Dropdowns ============== */}
        <div className="flex max-xs:flex-wrap gap-1 lg:gap-6 xxs:max-xs:justify-between md:justify-end">
          <DropdownButton className={'bg-card-bg h-12.5 lg:max-[1070px]:text-sm min-[1360px]:w-39.5'} items={callType} />
          <DropdownButton className={'bg-card-bg h-12.5 lg:max-[1070px]:text-sm min-[1360px]:w-39.5'} items={issueArray} />
          <DropdownButton className={'bg-card-bg h-12.5 lg:max-[1070px]:text-sm min-[1360px]:w-39.5'} items={dateArray} />
        </div>


        {/* ============== Call list & Call Details ============== */}
        <div>
          <CallList active={active} setActive={setActive} />
        </div>
        <CallDetails data={active} />

      </div>

    </div>
  );
}

export default CallLogHistoryPage