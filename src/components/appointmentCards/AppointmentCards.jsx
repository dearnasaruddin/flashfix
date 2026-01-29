
import { appointmentsCardData } from "@/projectData/appointmentCardData"
import CardItem from "../shared/CardItem"

const AppointmentCards = () => {
    return (
        <div className="flex items-center justify-between gap-10 flex-wrap">
            {
                appointmentsCardData.map((card, index) =>
                    <div key={index} className="w-[29.5%] grow">
                        <CardItem title={card.title} value={card.value} percent={card.percent} preIcon={card.icon} />
                    </div>
                )
            }
        </div>
    )
}

export default AppointmentCards