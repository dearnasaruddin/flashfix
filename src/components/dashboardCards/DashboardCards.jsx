import { dashboardCardsData } from "../../projectData/dashboardCardsData"
import CardItem from "../shared/CardItem"

const DashboardCards = () => {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-6">
            {
                dashboardCardsData.map((card, index) =>
                    <div key={index}>
                        <CardItem title={card.title} value={card.value} percent={card.percent} posIcon={card.icon} failed={card.failed} />
                    </div>
                )
            }
        </div>
    )
}

export default DashboardCards