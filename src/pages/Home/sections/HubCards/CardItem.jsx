import "./CardItem.css";
import SpotlightCard from "../../../../components/SpotlightCard/SpotlightCard";
import CardTitles from "./CardTitles";

const CardItem = ({ title, description }) => {
  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <CardTitles title={title} description={description} />
    </SpotlightCard>
  );
};

export default CardItem;
