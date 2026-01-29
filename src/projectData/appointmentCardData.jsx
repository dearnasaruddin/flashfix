import CalenderSmallIcon from "@/assets/icons/CalenderSmallIcon";
import CheckedIcon from "@/assets/icons/CheckedIcon";
import WarningIcon from "@/assets/icons/WarningIcon";

export const appointmentsCardData = [
    {
      icon: <CalenderSmallIcon />,
      title: 'Total Booked',
      value: '34',
      percent: '+8 this week',
    },
    { 
      icon: <CheckedIcon />,
      title: 'AI Booked',
      value: '28',
      percent: '82% of total',
    },
    {
      icon: <WarningIcon />,
      title: 'Pending',
      value: '3',
      percent: 'Awaiting confirmation',
    }
]