import "../HubCards/CardItem.css";
import "./ApiLearningSection.css";
import SpotlightCard from "../../../../components/SpotlightCard/SpotlightCard";
import CardTitles from "../HubCards/CardTitles";

const ApiLearningSection = ({
  title = "Aprende sobre APIs",
  description =
    "Recursos y guías para entender APIs desde lo básico hasta conceptos avanzados.",
}) => {
  return (
    <section
      className="api-learning-section"
      aria-label="Aprendizaje de APIs"
    >
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <CardTitles title={title} description={description} />
      </SpotlightCard>
    </section>
  );
};

export default ApiLearningSection;
