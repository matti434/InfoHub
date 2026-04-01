/**
 * Diapositivas del carrusel "Aprende sobre APIs" (título + descripción por slide).
 */
export const apiLearningSlides = [
  {
    id: "intro",
    title: "Aprende sobre APIs",
    description:
      "Recursos y guías para entender APIs desde lo básico hasta conceptos avanzados.",
    image: "/Hero/API.png",
    bgPosition: "center 25%",
  },
  {
    id: "rest-http",
    title: "REST y HTTP",
    description:
      "Métodos (GET, POST…), códigos de estado, recursos y buenas prácticas en APIs REST.",
    image: "/Hero/rest_api.webp",
    bgPosition: "center 25%",
  },
  {
    id: "auth",
    title: "Autenticación y seguridad",
    description:
      "API keys, tokens, OAuth y cómo proteger las llamadas entre tu front y el servidor.",
    image: "/Hero/api-key-oauth.webp",
    bgPosition: "center center",
  },
  {
    id: "bff",
    title: "Backend for frontend",
    description:
      "Por qué conviene un proxy propio: ocultar claves, unificar respuestas y cachear.",
    /* sin image: solo gradiente base */
  },
];
