# NEXO Fight Club — caso de estudio conceptual

Sitio de una escuela de boxeo ficticia, diseñado como ejercicio de dirección visual, UX y comunicación. **No representa un gimnasio operativo**: no hay reservas, precios, horarios, dirección ni resultados comerciales reales.

## El problema de diseño

¿Cómo hacer que una escuela de boxeo se perciba exigente y auténtica sin intimidar a alguien que nunca entrenó? El sitio original tenía una estética industrial potente, pero el recorrido se diluía entre muchas secciones y datos de apariencia real sin validar.

## Auditoría del punto de partida

| Hallazgo | Impacto | Respuesta en esta versión |
| --- | --- | --- |
| Botones de WhatsApp sin número de destino | La acción principal no podía contactar a nadie | Se retiraron y se sustituyeron por navegación interna funcional |
| Menú móvil visible pero sin comportamiento | Las secciones eran difíciles de descubrir en pantalla chica | Menú desplegable con estado accesible y cierre al navegar |
| Dirección, horarios, historia y condiciones presentados como hechos | Riesgo de confundir una demo con un negocio real | Se retiraron y se etiquetó el carácter conceptual |
| Imágenes cargadas desde URLs externas mientras los recursos estaban en el repositorio | Dependencia de enlaces frágiles | Se utilizaron imágenes locales del proyecto |
| Jerarquía cargada de etiquetas técnicas | El mensaje para principiantes perdía prioridad | Hero con promesa clara y rutas por objetivo |
| Enlaces legales sin destino | Expectativa incumplida | Se eliminaron hasta que exista contenido real |
| Sin documentación del proyecto | Difícil de presentar y explicar en portfolio | Este caso de estudio |

## Decisiones de diseño

- **Audiencia:** personas que consideran empezar boxeo y personas con experiencia que buscan avanzar.
- **Recorrido:** promesa inicial → identificación con un objetivo → comprensión del método → experiencia → aclaración de que es un concepto.
- **Dirección visual:** tipografía condensada, contraste alto, fotografía con tratamiento monocromático y rojo como acento. Se conservó el carácter industrial del diseño original con más espacio y mensajes breves.
- **Interacción:** navegación por anclas, menú móvil operable, preguntas frecuentes nativas y estados de foco visibles.
- **Honestidad:** el sitio no simula un canal de compra o reserva. La llamada final abre este caso de estudio.

## Alcance y límites

Este trabajo es una propuesta de interfaz y contenido, no una investigación con usuarios ni un rediseño encargado por un gimnasio. Las decisiones se basan en la evaluación del sitio original; no se atribuyen aumentos de conversión ni resultados medidos. Antes de convertir el concepto en un sitio comercial habría que validar la oferta con el negocio, obtener fotografías autorizadas, incorporar dirección, horarios, precios y contacto reales, y probar el recorrido con usuarios.

## Ver el proyecto

Abrí `index.html` en un navegador para recorrer la versión estática. Los recursos gráficos están incluidos en el repositorio y no se requiere compilación. Las tipografías se cargan desde Google Fonts y tienen alternativas locales.
