import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { useState } from "react";
import DropdownButton from "../shared/DropdownButton";
import { chartData, dropdownData,chartConfig  } from "@/projectData/graphData";


const Graph = () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [range, setRange] = useState("This Week");
  return (
    <Card className={"md:min-w-292.5 max-h-106.5 bg-[#0F172B50] border border-borderColor "}>
      <CardHeader>
        <div className="flex justify-between">
          {/* ========= Graph Heading & subHeading ========= */}
          <div>
            <CardTitle className={"mb-1 text-white max-md:leading-[150%]"}>Call Trends - This Week</CardTitle>
            <CardDescription className={'text-sm leading-5 text-[#90A1B9]'}>Total: 472 calls</CardDescription>
          </div>

          {/* ========= Graph Dropdown ========= */}
          <div>
            <DropdownButton items={dropdownData} backgroundColor="#1D293D" height='40' />
          </div>
        </div>
      </CardHeader>


      <CardContent className={"w-full max-h-75 "}>
        <ChartContainer
          className={"w-full max-h-75 "}
          config={chartConfig}
        >
          <AreaChart
            data={chartData}
            responsive
            margin={{ left: -20, right: 12 }}
          >
            <CartesianGrid strokeOpacity={0.2} strokeDasharray="4 4" />

            <XAxis
              dataKey="day"
              tickLine={true}
              tickMargin={8}
              tick={{ fill: "#fff", opacity: 1 }}
              axisLine={{ stroke: "#64748B" }}
            />

            <YAxis
              tickLine={true}
              tickMargin={8}
              tickCount={5}
              tick={{ fill: "#fff", opacity: 1 }}
              axisLine={{ stroke: "#64748B" }}
            />

            <ChartTooltip
              className="text-primary"
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <defs>
              <linearGradient id="fillBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={1} />
                <stop offset="95%" stopColor="#3b82f600" stopOpacity={1} />
              </linearGradient>
            </defs>

            <Area
              dataKey="value"
              type="natural"
              fill="url(#fillBlue)"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Graph;