import "./CardItem.css";
import SpotlightCard from "../../../../components/SpotlightCard/SpotlightCard";
import CardTitles from "./CardTitles";
import { Link } from "react-router";

const CardItem = ({ title, description,path }) => {
  return (
    <Link to={path} className="card-link" >
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <CardTitles title={title} description={description} />
      </SpotlightCard>
    </Link>
  );
};

export default CardItem;
