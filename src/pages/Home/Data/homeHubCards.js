/**
 * Central list of API hub tools (id, copy, route, search keywords).
 * Extend this array when adding new tools — no duplicated literals in JSX.
 */
export const homeHubCards = [
  {
    id: "news-api",
    title: "API de noticias",
    description: "Agrega titulares y artículos desde fuentes configurables.",
    path: "/apis/news"
  },
  {
    id: "weather-api",
    title: "API del clima",
    description: "Consulta condiciones actuales y pronóstico por ubicación.",
    path: "/apis/clima"
  },
  {
    id: "maps-api",
    title: "API de mapas",
    description: "Geocodificación y mapas embebidos para tu flujo de datos.",
    path: "/apis/maps"
  },
];
