import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.warrspa.com/",
      lastModified: "2026-09-07", // actualizar solo en cambios significativos de contenido
    },
    {
      url: "https://www.warrspa.com/privacidad",
      lastModified: "2026-09-07",
    },
    {
      url: "https://www.warrspa.com/terminos",
      lastModified: "2026-09-07",
    },
  ];
}