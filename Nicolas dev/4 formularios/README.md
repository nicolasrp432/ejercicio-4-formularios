# DOCUMENTACIÓN – RETO 04

**EquipoJS3**

*   **Miembros:** Nicolás, Pedro e Iván
*   **SCRUM MASTER:** Iván
*   **Fecha desarrollo:** 12 marzo 2025 – 13 marzo 2025 
*   **Fecha de presentación:** 14 marzo 2025 

## SPRING #1 (Miércoles 12, 10:30)

En esta reunión se decidió cómo desarrollar el reto, quién sería el Scrum Master y la duración de cada reunión 

*   **Planificación del Reto:** Se decidió desarrollar tres formularios diferentes, cada miembro del equipo se encargaría de uno. Al final, se escogería el mejor para presentar, basándose en los requisitos y el diseño.
*   **Scrum Master:** Se decidió que **Iván** sería el Scrum Master.
*   **Reuniones/SPRINGS:** Se acordó tener una reunión tipo Spring por cada sección del formulario, con un límite de tiempo de 1 hora por sección. Al finalizar cada sección, se reunirían para discutir avances, errores, dudas y problemas, permitiendo ajustes rápidos y aprendizaje colectivo .

## SPRING #2 (Miércoles, 12:00)

En esta segunda reunión, se identificó la importancia de mejorar la funcionalidad y la experiencia de usuario del formulario.

*   Se acordó que las secciones del formulario se mostrarían de forma **secuencial** en lugar de todas a la vez, para evitar una interfaz sobrecargada.
*   Se decidió agregar un **botón de navegación** para que el usuario pudiera avanzar a la siguiente sección después de completar la actual, mejorando la organización y reduciendo la sensación de abrumamiento.
*   Se determinó que el formulario diseñado por **Iván** sería la base debido a que su propuesta era la que mejor se adaptaba a las necesidades visuales.

## SPRING #3 (Miércoles, 13:00)

Durante esta reunión, se observó un rápido avance en el diseño y la estructura de las secciones del formulario, lo que llevó a un cambio en la organización del trabajo.

*   A pesar de que inicialmente cada miembro trabajaba en su propio formulario, tras evaluar el progreso y las características del formulario de **Nicolás**, se decidió que todo el equipo se enfocaría en este diseño.
*   Se consideró que el formulario de Nicolás ofrecía una **mejor estructura funcional** y se adaptaba más a las necesidades de interacción y validación de datos, aunque el diseño de Iván era visualmente atractivo.
*   Al centrarse en un solo formulario, se buscó **optimizar esfuerzos**, unificar la estética y la funcionalidad, y asegurar la coherencia en los detalles.
*   Se decidió trabajar en conjunto sobre el formulario de Nicolás, colaborando en la mejora de las secciones, la navegación y la corrección de errores. Esto permitió un avance más rápido y coherente como equipo.

## SPRING #4 (Miércoles, 14:00)

Esta reunión se centró en la investigación de la página `https://httpbin.org/post`, la validación de datos y la mejora de la interacción del formulario para una mejor experiencia de usuario.

*   Se exploró la página `https://httpbin.org/post` utilizando la herramienta de Inspeccionar > Red para entender cómo se gestionaban los datos enviados desde un formulario. Se analizó cómo se enviaban los datos y se copió el enlace para trabajar con solicitudes POST. Sin embargo, aún no se descubrió cómo enviar los datos del formulario para que aparecieran correctamente en la página de destino.
*   Se identificó la necesidad de que apareciera un **mensaje de error instantáneo** en la sección de correo si los datos ingresados no eran válidos, en lugar de esperar al clic en el botón de enviar.
*   Con la explicación de **Pedro** sobre los eventos de JavaScript (input, blur y focus), se discutió cuál sería el evento más adecuado para mostrar el mensaje de error de forma inmediata, permitiendo validar el campo de correo mientras el usuario escribía.
*   Aunque no se logró enviar los datos correctamente, se avanzó en la comprensión de los eventos de validación y la mejora de la interactividad del formulario.

## SPRING #5 (Jueves 13, 09:00)

En esta reunión, se discutió e investigó sobre las **pseudo-clases de CSS**, como `:focus`, `:valid` e `:invalid` [8]. El objetivo era mejorar la interacción y la validación de los campos del formulario, proporcionando retroalimentación visual inmediata a los usuarios sobre la validez de los datos ingresados.

*   Finalmente, se logró **enviar los datos del formulario** a la página `https://httpbin.org/post` y se verificó que aparecieran correctamente en la respuesta.
*   Debido al buen progreso del proyecto, se decidió **extender la duración de las reuniones** de 1 hora a 1 hora y media [9]. Esto permitiría más tiempo para investigar, solucionar problemas y optimizar detalles.

## SPRING #6 (Jueves 13, 10:30)

*   Se decidió utilizar el **diseño de la página de Iván** como base visual del proyecto actual por su atractivo y adaptación a las necesidades. A partir de ahí, se comenzó a integrar en la estructura del formulario en desarrollo.
*   Se modificó el fondo de la página añadiendo una **imagen** utilizando la propiedad CSS `background-image`, asegurando que la imagen se ajustara correctamente y no se repitiera.
*   Se comenzó a utilizar **GitHub** para trabajar de manera colaborativa en el mismo archivo, gestionando versiones, realizando cambios y fusionándolos eficientemente. Se utilizaron repositorios para mantener el código organizado y asegurar el acceso a la versión más reciente del proyecto.

## SPRING #7 (Jueves 13, 12:00)

En esta reunión, después de completar el diseño y las funcionalidades básicas del formulario, se decidió enfocar en **mejorar la experiencia del usuario** y hacer el formulario más adaptable a diferentes dispositivos.

*   Se mencionó que se había logrado mucho, por lo que se decidió experimentar con el diseño y las funcionalidades.

## SPRING #8 (Jueves, 13:30)

*   **Spring final.** Se confirmó que todo funcionaría bien, se sacaron las conclusiones y se organizó la presentación.
*   Además, se creó la documentación del reto.

## ENTREGA DEL RETO (Viernes, 09:30)

## PRESENTACIÓN DEL RETO (Viernes, 13:00)

## CONCLUSIÓN COMO EQUIPO

En el desarrollo del trabajo de formularios utilizando HTML y CSS, cada miembro del equipo asumió responsabilidades específicas:

*   **Iván** se encargó principalmente de la **parte visual y del diseño** del formulario, enfocándose en una interfaz atractiva, funcional y fácil de usar. Trabajó en el estilo con CSS, eligiendo colores, tipografías y disposición de elementos para un diseño coherente y profesional.
*   **Nicolás** se centró en la **funcionalidad** del formulario, asegurándose de que todos los elementos trabajaran correctamente. Esto incluyó la validación de campos, la integración de eventos para la interacción y la gestión adecuada de los datos al ser enviados.
*   **Pedro** asumió la tarea de **explicar y guiar** en la comprensión del código, clarificando el propósito de cada fragmento y su contribución al funcionamiento del formulario. También ayudó a resolver dudas técnicas y brindó soporte en los detalles complejos del código, asegurando una comprensión sólida del proyecto por parte de todos.

Este enfoque colaborativo permitió combinar las fortalezas y habilidades de cada miembro, lo que resultó en un formulario bien diseñado, funcional y con una base sólida en cuanto al código. A través del trabajo en equipo, logramos combinar estética, funcionalidad y comprensión técnica de manera efectiva.