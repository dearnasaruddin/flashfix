import { dashboardCardsData } from "../../projectData/dashboardCardsData"
import CardItem from "../shared/CardItem"

const DashboardCards = () => {

    return (
        <div className="flex items-center justify-center md:justify-between gap-2.5 md:gap-6 flex-wrap">
            {
                dashboardCardsData.map((card, index) =>
                    <div key={index} className="min-w-36 max-w-[48%] max-md:h-37.5 md:w-[31.2%] md:grow">
                        <CardItem title={card.title} value={card.value} percent={card.percent} posIcon={card.icon} failed={card.failed} />
                    </div>
                )
            }
        </div>
    )
}

export default DashboardCards