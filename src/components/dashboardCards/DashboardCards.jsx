import { dashboardCardsData } from "../../projectData/dashboardCardsData"
import CardItem from "../shared/CardItem"

const DashboardCards = () => {

    return (
        <div className="flex items-center justify-between gap-6 flex-wrap">
            {
                dashboardCardsData.map((card, index) =>
                    <div key={index} className="w-[31.2%] grow">
                        <CardItem title={card.title} value={card.value} percent={card.percent} posIcon={card.icon} failed={card.failed} />
                    </div>
                )
            }
        </div>
    )
}

export default DashboardCards