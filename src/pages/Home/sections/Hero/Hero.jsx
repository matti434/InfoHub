import BorderGlow from "./BorderGlow";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#060010"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={["#c084fc", "#f472b6", "#38bdf8"]}
      >
        <div style={{ padding: "2em" }}>
          <h2 className="text-white">Hola me llamo Matias Lazarte</h2>
          <p className="text-white">
            Bienvenidos. Soy estudiante de Ingeniería en Sistemas y he
            completado mis estudios como programador Full-Stack. Ahora busco
            afianzar mis conocimientos mientras ayudo a otras personas. Esta
            página está diseñada para aprender sobre APIs, desde lo más básico
            hasta un nivel avanzado. Cualquier crítica constructiva será
            bienvenida en la sección de mensajes, ubicada al final, a la
            derecha..
          </p>
        </div>
      </BorderGlow>
    </div>
  );
};

export default Hero;
