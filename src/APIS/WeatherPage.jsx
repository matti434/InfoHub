import { useState } from "react";
import { fetchWeatherByCity } from "../api/weather";

const WeatherPage = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = city.trim();
    if (!trimmed) {
      setError("Escribí una ciudad.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const result = await fetchWeatherByCity(trimmed);
      setData(result);
    } catch (err) {
      setData(null);
      setError(err instanceof Error ? err.message : "Error desconocido.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container py-4">
      <h1>API del clima</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ciudad"
          aria-label="Ciudad"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Buscando…" : "Buscar"}
        </button>
      </form>
      {error && <p role="alert">{error}</p>}
      {data && (
        <article>
          <h2>{data.city}</h2>
          {data.country && <p>{data.country}</p>}
          <p>{data.tempC} °C</p>
          <p>Sensación térmica: {data.feelsLikeC} °C</p>
          <p>{data.description}</p>
          {/* icon: podés armar URL del CDN de iconos OpenWeather si querés una imagen */}
        </article>
      )}
    </section>
  );
};

export default WeatherPage;