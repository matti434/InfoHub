import "./CardGrid.css";
import CardItem from "./CardItem";
import { homeHubCards } from "../../Data/homeHubCards";

const CardGrid = () => {
  if (!homeHubCards.length) {
    return null;
  }

  return (
    <section className="hub-card-section" aria-label="APIs disponibles">
      <div className="hub-card-grid">
        {homeHubCards.map((card) => (
          <div className="hub-card-grid__cell" key={card.id}>
            <CardItem title={card.title} description={card.description}  path={card.path} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
