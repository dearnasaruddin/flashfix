import AppointmentCards from '@/components/appointmentCards/AppointmentCards'
import BookingLink from '@/components/appointmentCards/BookingLink'
import AppointmentTable from '@/components/appointmentTable/AppointmentTable'

const AppointmentsPage = () => {
  return (
    <div className='pr-2 md:pr-6'>
      <div className='pt-6'>
        <AppointmentCards />
      </div>
      <div className='pt-6'>
        <BookingLink/>
      </div>
      <div>
        <AppointmentTable />
      </div>
    </div>
  )
}

export default AppointmentsPage