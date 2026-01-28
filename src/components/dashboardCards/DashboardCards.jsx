import { cardsData } from "../../projectData/cardsData"
import CardItem from "./CardItem"

const DashboardCards = () => {

    return (
        <div className="flex items-center justify-between gap-6 flex-wrap">
            {
                cardsData.map((card, index) =>
                    <div key={index} className="w-[31.2%] grow">
                        <CardItem title={card.title} value={card.value} percent={card.percent} posIcon={card.icon} failed={card.failed} />
                    </div>
                )
            }
        </div>
    )
}

export default DashboardCards