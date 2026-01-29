import BotIconWithBG from "@/assets/icons/BotIconWithBG";
import CalenderIconWithBG from "@/assets/icons/CalenderIconWithBG";
import ClockIconWithBG from "@/assets/icons/ClockIconWithBG";
import CrossIconWithBG from "@/assets/icons/CrossIconWithBG";
import PhoneIconWithBG from "@/assets/icons/PhoneIconWithBG";
import TransferIconWithBG from "@/assets/icons/TransferIconWithBG";

export const dashboardCardsData = [
    {
      title: 'Total Calls Today',
      value: '127',
      percent: '+12%',
      icon: <PhoneIconWithBG />
    },
    { 
      title: 'AI-Handled Calls',
      value: '98',
      percent: '+77%',
      icon: <BotIconWithBG />
    },
    {
      title: 'Warm Transfer',
      value: '23',
      percent: '+18%',
      icon: <TransferIconWithBG />
    },
    {
      title: 'Appointments Booked',
      value: '34',
      percent: '+8%',
      icon: <CalenderIconWithBG />
    },
    {
      title: 'Missed/Failed Calls',
      value: '6',
      percent: '-3%',
      failed: true,
      icon: <CrossIconWithBG />
    },
    {
      title: 'Avg Call Duration',
      value: '3:42',
      percent: '+15%',
      icon: <ClockIconWithBG />
    }
]