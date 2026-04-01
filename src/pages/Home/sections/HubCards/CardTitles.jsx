import "./CardTitles.css";

const CardTitles = ({ title, description }) => {
  return (
    <div className="card-titles">
      <h2 className="card-titles__title">{title}</h2>
      <p className="card-titles__description">{description}</p>
    </div>
  );
};

export default CardTitles;
