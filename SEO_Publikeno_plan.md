# Plan SEO implementado para Publikeno

**Autor:** Manus AI  
**Fecha:** 2026-05-15

## Resumen ejecutivo

Se implementó una primera optimización SEO técnica y local para **Publikeno** sobre el sitio estático publicado en GitHub Pages. La optimización cubre títulos SEO, metadescripciones, palabras clave locales, datos estructurados, sitemap XML, robots.txt, URLs amigables y un blog SEO inicial. También se prepararon instrucciones para acciones externas que no pueden completarse únicamente desde el repositorio, como Google Search Console e indexación manual.

| Solicitud | Estado | Resultado |
|---|---:|---|
| Instalar RankMath o Yoast | No aplicable | El sitio no es WordPress; se replicaron funciones SEO manualmente. |
| Crear títulos SEO | Implementado | Home y blog tienen títulos orientados a Cancún, SEO, Meta Ads e IA. |
| Crear meta descripciones | Implementado | Home, blog y artículos tienen descripciones específicas. |
| Revisar URLs amigables | Implementado | Se crearon URLs como `/blog/seo-local-cancun/`. |
| Crear Sitemap XML | Implementado | Archivo `/sitemap.xml` con URLs absolutas. |
| Crear robots.txt | Implementado | Archivo `/robots.txt` con permiso de rastreo y referencia al sitemap. |
| Indexar en Google | Pendiente externo | Requiere Search Console con sesión del propietario. |
| Configurar Search Console | Pendiente externo | Requiere verificar propiedad de `publikeno.com`. |
| Agregar palabras clave locales | Implementado | Cancún, Riviera Maya, SEO local, Meta Ads, WhatsApp, landing pages. |
| Optimizar ALT imágenes | Parcial | No hay imágenes sueltas en el repositorio; se recomienda ajustar en código fuente si se reconstruye el sitio. |
| Crear blog SEO | Implementado | Blog inicial y dos artículos SEO estáticos. |
| Revisar competencia local | Realizado | Se revisaron competidores locales y mensajes dominantes. |

## Fundamento técnico

Google recomienda usar sitemaps con URLs absolutas, alojarlos preferentemente en la raíz del sitio y enviarlos por Search Console o declararlos en `robots.txt`.[1] Google también explica que `robots.txt` sirve principalmente para controlar el rastreo y no debe usarse como mecanismo para ocultar páginas del índice.[2] Para Search Console, Google indica que primero se debe añadir y verificar la propiedad del sitio para acceder a reportes, sitemaps e inspección de URLs.[3]

> “Use fully-qualified, absolute URLs in your sitemaps.” — Google Search Central.[1]

> “A robots.txt file tells search engine crawlers which URLs the crawler can access on your site.” — Google Search Central.[2]

## Palabras clave locales recomendadas

| Prioridad | Palabra clave | Intención |
|---:|---|---|
| Alta | agencia de marketing digital en Cancún | Contratación de proveedor local |
| Alta | SEO Cancún | Servicio orgánico local |
| Alta | Meta Ads Cancún | Publicidad pagada local |
| Alta | diseño web Cancún | Desarrollo web con intención comercial |
| Media | automatización WhatsApp Cancún | Automatización y seguimiento de leads |
| Media | landing pages Cancún | Captación y conversión |
| Media | publicidad digital Riviera Maya | Expansión regional |
| Media | generación de leads Cancún | Servicio orientado a resultados |

## Competencia local observada

La competencia local visible comunica servicios de **SEO**, **Google Ads**, **Meta/Facebook Ads**, **desarrollo web**, **redes sociales**, **CRM**, **generación de leads** y **contenido de blog**. Publikeno debe diferenciarse enfatizando **automatización con IA**, velocidad de respuesta por WhatsApp y páginas orientadas a conversión, porque esos elementos conectan el tráfico con oportunidades comerciales reales.

| Competidor revisado | Mensajes SEO observados | Oportunidad para Publikeno |
|---|---|---|
| UPWEGO | SEO, Google Ads, desarrollo web, CRM, blog y resultados medibles. | Diferenciarse con IA, WhatsApp y enfoque de captación rápida. |
| Mercancun | Diseño web, SEO/SEM, publicidad, social media y producción. | Enfatizar performance, automatización y leads calificados. |
| Huella Digital | Posicionamiento SEO, análisis, palabras clave y artículos de blog. | Crear contenidos locales más prácticos y orientados a conversión. |

## Calendario editorial SEO recomendado

Para sostener el crecimiento orgánico, Publikeno debería publicar contenido local que combine intención comercial, ubicación y solución específica. El objetivo no es producir artículos genéricos, sino crear activos que puedan captar búsquedas de negocios que ya están evaluando contratar marketing digital.

| Mes | Tema recomendado | URL sugerida | Objetivo SEO |
|---:|---|---|---|
| 1 | Campañas Meta Ads para negocios en Cancún | `/blog/meta-ads-cancun/` | Captar demanda de publicidad pagada local. |
| 1 | Landing pages que convierten prospectos en WhatsApp | `/blog/landing-pages-whatsapp-cancun/` | Posicionar conversión y automatización. |
| 2 | SEO para restaurantes en Cancún | `/blog/seo-restaurantes-cancun/` | Atacar nicho local con alta competencia. |
| 2 | Marketing digital para inmobiliarias en Riviera Maya | `/blog/marketing-inmobiliarias-riviera-maya/` | Captar vertical inmobiliario y turístico. |
| 3 | Automatización con IA para seguimiento de leads | `/blog/automatizacion-ia-leads-whatsapp/` | Diferenciar a Publikeno frente a agencias tradicionales. |
| 3 | Cuánto cuesta contratar una agencia de marketing digital en Cancún | `/blog/costo-agencia-marketing-digital-cancun/` | Resolver intención transaccional de comparación. |

## Recomendación para ALT de imágenes

El repositorio publicado contiene principalmente un paquete compilado de la aplicación, por lo que no aparecen imágenes independientes fáciles de editar una por una. En la siguiente reconstrucción del sitio conviene agregar atributos ALT descriptivos en cada componente visual. Un buen ALT debe describir la imagen y, cuando corresponda, incluir contexto local sin forzar palabras clave.

| Tipo de imagen | ALT recomendado |
|---|---|
| Logotipo | `Logo de Publikeno, agencia de marketing digital en Cancún` |
| Sección de servicios | `Servicios de SEO, Meta Ads y automatización WhatsApp para negocios de Cancún` |
| Gráfico de leads | `Flujo de generación de leads con landing page y WhatsApp automatizado` |
| Imagen de equipo o asesoría | `Equipo de Publikeno asesorando estrategia digital para empresas en Riviera Maya` |
| Captura de campañas | `Panel de campañas digitales para captar prospectos locales en Cancún` |

## Prioridad operativa de los próximos 30 días

Durante los próximos treinta días, el mayor impacto vendrá de completar la verificación de Google Search Console, enviar el sitemap, solicitar indexación de las URLs nuevas, crear al menos dos artículos adicionales y añadir enlaces internos desde la página principal hacia el blog cuando se pueda modificar el código fuente no compilado. También conviene revisar Google Business Profile si Publikeno atiende localmente en Cancún, porque la ficha de negocio refuerza las búsquedas locales y la confianza del usuario.

## Próximos pasos externos

Para completar la indexación, entra a [Google Search Console](https://search.google.com/search-console), agrega la propiedad de dominio **publikeno.com**, verifica propiedad mediante DNS o etiqueta HTML, envía `https://publikeno.com/sitemap.xml` en el apartado **Sitemaps** y usa **Inspección de URL** para solicitar indexación de la home y los artículos principales.

## Referencias

[1]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap "Build and submit a sitemap — Google Search Central"  
[2]: https://developers.google.com/search/docs/crawling-indexing/robots/intro "Introduction to robots.txt — Google Search Central"  
[3]: https://support.google.com/webmasters/answer/10267942?hl=en "Getting started with Search Console — Google Help"
