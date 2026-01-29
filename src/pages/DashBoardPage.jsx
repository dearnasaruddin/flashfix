import RecentActivity from '@/components/activity/RecentActivity'
import Request from '../components/requests/Request'
import Graph from '../components/graph/Graph'
import DashboardCards from '@/components/dashboardCards/DashboardCards'

const DashBoardPage = () => {
  return (
    <div className='pr-1.5'>
      <div className='pt-6'>
        <DashboardCards/>
      </div>
      <div className='py-6'>
        <Graph/>
      </div>
      <div className='flex max-md:flex-wrap gap-6 w-full'>
        <RecentActivity />
        <Request />
      </div>
    </div>
  )
}

export default DashBoardPage