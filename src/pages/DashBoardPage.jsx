import Request from '../components/requests/Request'

const DashBoardPage = () => {
  return (
    <div>
        <div className='flex gap-6 w-full'>
            <Request/>
            <Request/>
        </div>
    </div>
  )
}

export default DashBoardPage