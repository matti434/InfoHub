import Carousel from "react-bootstrap/Carousel";
import "../HubCards/CardItem.css";
import "./ApiLearningSection.css";
import SpotlightCard from "../../../../components/SpotlightCard/SpotlightCard";
import CardTitles from "../HubCards/CardTitles";
import { apiLearningSlides } from "../../Data/apiLearningSlides";

function ApiLearningSection() {
  return (
    <section
      className="api-learning-section"
      aria-label="Aprendizaje de APIs"
    >
      <Carousel
        className="api-learning-carousel carousel-dark"
        indicators
        controls
        interval={null}
        wrap
        touch
      >
        {apiLearningSlides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div className="api-learning-carousel__slide">
              <SpotlightCard
                className={
                  "custom-spotlight-card" +
                  (slide.image ? " custom-spotlight-card--slide-bg" : "")
                }
                style={
                  slide.image
                    ? {
                        "--slide-bg-image": `url(${slide.image})`,
                        ...(slide.bgPosition && {
                          "--slide-bg-position": slide.bgPosition,
                        }),
                      }
                    : undefined
                }
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <CardTitles
                  title={slide.title}
                  description={slide.description}
                />
              </SpotlightCard>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default ApiLearningSection;
