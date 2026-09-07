# GEO-ANALYSIS — warrspa.com

**Fecha:** 2026-09-07 · **Framework:** claude-seo GEO (v2.2.5, guía Google AI Optimization 2026-06)
**Nota metodológica:** los scores son heurísticos — ninguna herramienta tiene acceso a datos internos de ranking de Google. GEO se evalúa aquí como **SEO fundamentals aplicados a superficies de AI search**, no como disciplina separada (posición canónica de Google: *"Optimizing for generative AI search is still SEO"*).

---

## 1. GEO Readiness Score: 44 / 100 — NO APTO (mejoró desde 36 esta mañana)

| Dimensión | Peso | Score |
|---|---|---|
| Citability | 25% | 45 |
| Structural Readability | 20% | 55 |
| Multi-Modal Content | 15% | 40 |
| Authority & Brand Signals | 20% | 25 |
| Technical Accessibility | 20% | 55 ⬆️ (era 15) |

## 2. Platform Breakdown

| Plataforma | Score | Estado |
|---|---|---|
| Google AI Overviews | 30 | Elegibilidad = estar indexado con snippet en Search clásico. Hoy el dominio no aparece indexado (`site:` = 0) → 0% hasta resolver indexación. |
| Google AI Mode | ~25 | Motor de citación distinto (~13.7% de URLs en común con AIO): prima frescura y autoridad de entidad sobre posición. Débil hoy. |
| Bing Copilot | 55 | Bingbot 200; Bing indexa mejor dominios pequeños que Google en fase temprana. |
| ChatGPT | 45 ⬆️ | **GPTBot y OAI-SearchBot ahora reciben 200** (verificado hoy). Faltan señales de entidad (Wikipedia/Reddit). |
| Perplexity | 5 | **PerplexityBot sigue en 403** — sin acceso, sin citación posible. |

> Solo ~11% de dominios son citados por ChatGPT y AIO para la misma query: son superficies separadas y hay que optimizarlas por separado.

## 3. AI Crawler Access Status (verificado 2026-09-07, pm)

| Crawler | Owner | Estado | Impacto |
|---|---|---|---|
| GPTBot | OpenAI | **200** ✅ (era 403 esta mañana) | ChatGPT training/retrieval |
| OAI-SearchBot | OpenAI | **200** ✅ (era 403) | ChatGPT Search — el que importa para citación |
| ClaudeBot | Anthropic | **403** 🔴 | Claude no puede leer el sitio |
| PerplexityBot | Perplexity | **403** 🔴 | Perplexity no puede leer el sitio |
| Googlebot / Bingbot | — | 200 ✅ | OK |
| CCBot | Common Crawl | 403 | Aceptable (bloquear CC es práctica común) |

**Acción pendiente:** en Cloudflare AI Crawl Control, permitir también `ClaudeBot` y `PerplexityBot`. Es la acción #1: sin acceso no hay citación posible, y con ~945 palabras indexables no hay margen para perder plataformas.

## 4. llms.txt Status — ausente (404), **sin peso de citación**

> ⚠️ **Banner:** Google Search ignora `llms.txt` (guía oficial de optimización AI, 2026-06-29: *"won't help (nor hurt) your visibility or rankings... as Google Search ignores them"*). Ningún proveedor de LLM ha confirmado consumirlo (Mueller: "dead end"; SE Ranking 300k dominios: 1 de los 50 más citados lo tenía). Publicarlo es **opcionalidad defensiva de costo cero**, no una palanca de ranking. *Corrección al reporte de esta mañana, que lo listaba como cambio top-5: se desestima como prioridad según fuente primaria de Google.*

Si igualmente se quiere publicar (para agentes de código y optionality), template mínimo en `/public/llms.txt`:

```
# WarrSPA
> Agencia de desarrollo de software a medida para empresas. MVPs, SaaS y plataformas B2B con Next.js, TypeScript y Supabase. Santiago, Chile.

## Pages
- [Home](https://www.warrspa.com): Servicios, proceso, portfolio y contacto.

## Contact
- Email: hola@warrspa.com
- WhatsApp: +56 9 3002 3354
- GitHub: https://github.com/williamRR
```

## 5. Brand Mention Analysis

**Hallazgo de fondo (Ahrefs dic-2025, 75k marcas): las menciones de marca correlacionan 3× más con visibilidad AI que los backlinks.** YouTube (~0.74) y Reddit dominan; Domain Rating casi no importa (~0.27).

| Superficie | Estado |
|---|---|
| GitHub | ✅ org `github.com/WARRSPA` (4+ repos con contenido citable) + cuenta personal |
| YouTube | ⚠️ 1 short detectado — insuficiente |
| Wikipedia / Wikidata | ❌ inexistente |
| Reddit | ❌ sin presencia |
| LinkedIn | ❌ sin presencia detectable (y el link del footer estaba muerto) |
| **Confusión de entidad** | 🔴 Terceros describen warrspa.com como "spa and wellness services" (interpretación literal de Warr+spa). Los LLMs pueden heredar esta desambiguación errónea. |

**Palanca de mayor techo a mediano plazo:** presencia real en Reddit/YouTube/LinkedIn hablando de los productos propios (MesaDigital, Y4) — contenido de primera mano, no mention-farming (Google rechaza explícitamente las menciones inauténticas).

## 6. Passage-Level Citability (óptimo: bloques de 134–167 palabras; ~44% de citas salen del primer 30% de la página)

**Fuertes:** estructura Problema → Solución en cada producto (bloques autocontenidos); H1 único con jerarquía correcta; sin relleno.

**Débiles:**
- Ninguna sección abre con una definición/autorespuesta en los primeros 40–60 palabras ("El desarrollo de software a medida en Chile consiste en...").
- 0 datos con fuente ("15+ Restaurantes", "+200%" sin período ni atribución — los LLMs no citan claims sin origen).
- 5 de 6 respuestas FAQ **aún no están en el HTML en producción** — el fix local ya lo resuelve; falta deploy.
- 945 palabras totales: margen mínimo para pasajes citables de 134–167 palabras.

## 7. Server-Side Rendering Check

✅ **SSG real** (`x-nextjs-prerender: 1`): todo el texto (~4,090 chars) está en el HTML crudo, sin ejecutar JS. Los crawlers de IA (que no ejecutan JavaScript) leen el contenido completo. Los acordeones FAQ eran la única excepción — corregido en el código local (respuestas siempre en el DOM).

## 8. Top 5 Cambios de Mayor Impacto

1. **Permitir ClaudeBot y PerplexityBot en Cloudflare** (dashboard, 30 min) — sin esto, 0% en 2 de 5 plataformas.
2. **Resolver indexación en Google Search** (sitemap + GSC + verificación) — la elegibilidad para AIO pasa por estar indexado en Search clásico. Todo lo demás es secundario.
3. **Deployar los fixes locales ya hechos** (FAQ en DOM, JSON-LD Organization/Service, canonical, OG): entity signals para la desambiguación de marca.
4. **Datos con fuente y fechas**: sustanciar o eliminar las métricas del hero; agregar fecha de última actualización visible.
5. **Presencia de marca en Reddit/YouTube/LinkedIn** con contenido de primera mano de los productos propios — la correlación más fuerte con citación AI que existe.

*(Nota: generar `llms.txt` NO entra al top-5 — Google lo ignora y ningún LLM lo consume; costo cero si se quiere, ver §4.)*

## 9. Schema Recommendations (para descubribilidad AI)

Ya generado localmente (pendiente de deploy), en `layout.tsx`:
- `ProfessionalService` (+ `address` Santiago, `areaServed` CL, `email`, `telephone`, `sameAs` GitHub) — ancla de entidad para desambiguar "WarrSPA" del spa literal.
- `WebSite` + `WebPage` con `publisher`.
- 3× `Service` (Custom Development / SaaS Consulting / MVP to Scale).
- `FAQPage`: **opcional** — rich results de FAQ retirados por Google el 2026-05-07; el beneficio AI no está confirmado. Las respuestas ya estarán en el HTML igualmente, que es lo que de verdad leen los LLMs.
- No usar `HowTo` (deprecado 2023).

## 10. Content Reformatting Suggestions

| Pasaje actual | Reescritura sugerida |
|---|---|
| H2 "Lo que construimos" | "¿Qué servicios de desarrollo de software ofrecemos?" (heading-pregunta mapea a query patterns) |
| Hero (primeros 60 palabras) | Abrir con autorespuesta: "WarrSPA es una agencia de desarrollo de software a medida en Santiago de Chile. Diseñamos y construimos MVPs, SaaS y plataformas B2B..." |
| Métricas del hero | "+200% de crecimiento en 12 meses (medido en N restaurantes activos, 2025)" — o eliminar si no se puede respaldar |
| Cards de servicios (2 líneas) | Expandir cada servicio a un bloque autocontenido de 134–167 palabras con resultado concreto — largo citable óptimo |
| FAQ (acordeón) | Ya en DOM con el fix local. Considerar H2-preguntas si se divide en página propia a futuro |

---

**Cómo medir el progreso:** (1) `curl -A PerplexityBot` → 200 (hoy mismo); (2) GSC mostrando indexación (2–4 semanas); (3) consultas tipo "desarrollo de software a medida Chile" en ChatGPT/Perplexity mencionando a WarrSPA (1–3 meses, depende de §5).