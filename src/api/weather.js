
const BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const WEATHER_PATH = "/api/v1/weather";

function buildWeatherUrl({ q, lat, lon }) {
    const params = new URLSearchParams();

    if (q != null && q !== "") {
        params.set("q", q.trim());
    } else if (lat != null && lon != null) {
        params.set("lat", String(lat));
        params.set("lon", String(lon));
    } else {
        throw new Error("Indica cuidad o latitud y longitud.");
    }
    return `${BASE}${WEATHER_PATH}?${params}`;
}

export async function fetchWeatherByCity(city) {
    const url = buildWeatherUrl({ q: city });
    const res = await fetch(url);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        const msg =
            typeof data.message === "string"
                ? data.message
                : "No se pudo obtener el clima.";
        throw new Error(msg);
    }
    return data; // { city, country?, tempC, feelsLikeC, description, icon }
}
export async function fetchWeatherByCoords(lat, lon) {
    const url = buildWeatherUrl({ lat, lon });
    const res = await fetch(url);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        const msg =
            typeof data.message === "string"
                ? data.message
                : "No se pudo obtener el clima.";
        throw new Error(msg);
    }
    return data;
}