# ¿Qué es JavaScript?

JavaScript se introdujo en 1995 como una forma de agregar programas a páginas web en el navegador Netscape Navigator. En su momento fue una idea novedosa. En los primeros días de la World Wide Web, HTML era bastante simple, y bastante fácil de aprender casi todo lo que se necesitaba saber para agrupar páginas web. Cualquiera podía hacer una Web juntando tablas, texto y añadiendo alguna imagen.

A principios de los años 90, la mayoría de usuarios que se conectaban a Internet lo hacían con módems a una velocidad máxima de 28.8 kbps. Esa velocidad era más que suficiente para la época salvo que quisieras descargar imagenes de cierto tamaño. Lo cierto era que la web en aquel entonces no ofrecía gran cosa más que servir como una inmensa biblioteca donde los usuarios consultaban mayormente contenido basado en texto pero la evolución que conocemos hoy estaba por llegar y podían verse los primeros pasos.

En esa época, empezaban a desarrollarse las primeras aplicaciones web y por tanto, las páginas web comenzaban a incluir formularios complejos. Con unas aplicaciones web cada vez más complejas y una velocidad de navegación tan lenta, surgió la necesidad de un lenguaje de programación que se ejecutara en el navegador del usuario. De esta forma, si el usuario no rellenaba correctamente un formulario, no se le hacía esperar mucho tiempo hasta que el servidor volviera a mostrar el formulario indicando los errores existentes.

Desde entonces, el lenguaje ha sido adoptado por todos los demás navegadores gráficos principales. Ha hecho posibles las aplicaciones web modernas, aplicaciones con las que puede interactuar directamente sin hacer una recarga de página para cada acción.

En la actualidad los navegadores web no son las únicas plataformas en las que se utiliza JavaScript. También es posible ejecutar código JavaScript en un entorno servidor. De hecho las bases de datos, como MongoDB y CouchDB, usan JavaScript como su lenguaje de scripting y consulta. Varias plataformas para la programación de escritorio y servidor, en particular el proyecto Node.js proporcionan un entorno para la programación de JavaScript fuera del navegador.

Antes de continuar hay que aclarar que aunque se parecen JavaScript no tiene nada que ver con el lenguaje de programación llamado Java. El nombre en realidad viene por una cuestión más de marketing. Cuando se introdujo JavaScript, el lenguaje Java se estaba comercializando en gran medida y estaba ganando popularidad. Alguien pensó que era una buena idea tratar de avanzar en esto y hasta nuestros días. :)

## Evolución de JavaScript

Aunque JavaScript surgió como un lenguaje de script para mejorar las capacidades de la web de la época allá por 1995 por la extinta Netscape, JavaScript no ha dejado de evolucionar desde entonces. Originalmente el lenguaje se basaba a su vez basaba en CEnvi desarrollado a su vez por Nombas.

Brendan Eich, un programador que trabajaba en Netscape, pensó que podría solucionar las limitaciones de la web de entonces, adaptando otras tecnologías existentes (como ScriptEase) al navegador Netscape Navigator 2.0, que iba a lanzarse en aquel año. Inicialmente, Eich denominó a su lenguaje LiveScript y fue un éxito.

Fue entonces cuando, justo antes del lanzamiento, Netscape decidió cambiar el nombre por el de JavaScript y firmó una alianza con Sun Microsystems para continuar el desarrollo del nuevo lenguaje de programación.

Microsoft, al ver el movimiento de uno de sus principales competidores, también decidió incorporar su propia implementación de este lenguaje, llamada JScript, en la versión 3 de su navegador Internet Explorer.

Esto contribuyó todavía más al empuje y popularización del lenguaje, pero comenzaron a presentarse pequeños problemas por las diferencias entre implementaciones. Por lo que se decidió estandarizar ambas mediante la versión JavaScript 1.1 como propuesta a ECMA, que culminó con el estándar ECMA-262. Este estándar dicta la base del lenguaje ECMAScript a través de su sintaxis, tipos, sentencias, palabras clave y reservadas, operadores y objetos, y sobre la cual se pueden construir distintas implementaciones. La versión JavaScript 1.3 fue la primera implementación completa del estándar ECMAScript.

ECMAScript 3, que data de 1999, y cuyas últimas mejoras han sido:

- Soporte de expresiones regulares.
- Nuevas sentencias de control.
- Manejo de excepciones (bloque try-catch).
- Definición de errores más precisa.
- Formateo de salidas numéricas de datos.
- Manejo de strings más avanzado.
 
ECMAScript 4, que aparece en 2004:

- Pretende convertir JavaScript en un nuevo lenguaje con nuevas reglas.
- Introduce el tipado de variables
- introduce el concepto tradicional de clases e - interfaces al estilo de lenguajes como Java.

Las características que se incluyen en ECMAScript5 son las siguientes:

- Getters y setters.
- Array extras y reductions.
- Rediseño de los atributos internos de las propiedades.
- Introducción de métodos estáticos de Object, que permiten:
- Acceder a la información del prototipo.
- Manipular las propiedades de un objeto.
- Crear objetos de forma dinámica.
- Obtener los nombres de las propiedades.
- Impedir que un objeto sea modificado.
- Cambios a las funciones:
- Soporte nativo del function currying a través del método bind.
- Cambios en el objeto Date.
- Soporte nativo de JSON.

ECMAScript 6:

- Módulos.
- Ámbito a nivel de bloque (sentencia let).
- Generators.
- Proxys.
- Destructuring assignments.
- Rest y default arguments.
- Name objects.
- Iterators.
- Array comprehensions.
- String templates.
- Hash tables y weak maps.
- Características de JavaScript

## JavaScript capacidades interactivas

JavaScript fue ideado para dotar a la web de capacidades interactivas que le ayudarán a dar el salto al siguiente nivel permitiendo crear una interfaz de usuario activa, lo que ofrece retroalimentación a los visitantes según navegan por sus páginas.
Por ejemplo, es común usar JavaScript en la validación de formularios para asegurarnos que la información introducida es válida. Sin necesidad de enviar ninguna información al servidor, el programa realiza los cálculos necesarios ahorrando tiempo y recursos del lado del servidor.

Con JavaScript podemos crear sobre la marcha páginas HTML personalizadas, dependiendo de las acciones ejecutadas por el usuario. Supongamos que estamos en una web de seguros, con JavaScript podemos realizar consultas en el servidor sin necesidad de recargar la página, mostrar opciones personalizadas, etc y lanzar eventos en función del día y hora en donde nos encontremos.

## JavaScript / ECMAScript

- JavaScript fue inventado por Brendan Eich en 1995.

- Fue desarrollado para Netscape 2 y se convirtió en el estándar ECMA-262 en 1997.

- Después de que Netscape entregó JavaScript a ECMA, la fundación Mozilla continuó desarrollando JavaScript para el navegador Firefox. La última versión de Mozilla fue 1.8.5. (Idéntico a ES5).

- Internet Explorer (IE4) fue el primer navegador compatible con ECMA-262 Edition 1 (ES1).

## Breve historia cronologica

Año ECMA Navegador

- 1995 JavaScript fue inventado por Brendan Eich
- 1996 Netscape 2 se lanzó con JavaScript 1.0
- 1997 JavaScript se convirtió en un estándar ECMA (ECMA-262)
- 1997 ES1 ECMAScript 1 fue lanzado
- 1997 ES1 IE 4 fue el primer navegador compatible con ES1
- 1998 ES2 ECMAScript 2 fue lanzado
- 1998 Netscape 42 se lanzó con JavaScript 1.3
- 1999 ES2 IE 5 fue el primer navegador compatible con ES2
- 1999 ES3 ECMAScript 3 fue lanzado
- 2000 ES3 IE 5.5 fue el primer navegador compatible con ES3
- 2000 Netscape 62 se lanzó con JavaScript 1.5
- 2000 Firefox 1 se lanzó con JavaScript 1.5
- 2008 ES4 ECMAScript 4 fue abandonado
- 2009 ES5 ECMAScript 5 fue lanzado
- 2011 ES5 IE 9 fue el primer navegador compatible con ES5 \*
- 2011 ES5 Firefox 4 se lanzó con JavaScript 1.8.5
- 2012 ES5 Soporte completo para ES5 en Safari 6
- 2012 ES5 Soporte completo para ES5 en IE 10
- 2012 ES5 Soporte completo para ES5 en Chrome 23
- 2013 ES5 Soporte completo para ES5 en Firefox 21
- 2013 ES5 Soporte completo para ES5 en Opera 15
- 2014 ES5 Soporte completo para ES5 en todos los navegadores
- 2015 ES6 ECMAScript 6 fue lanzado
- 2016 ES6 Soporte completo para ES6 en Chrome 51
- 2016 ES6 Soporte completo para ES6 en Opera 38
- 2016 ES6 Soporte completo para ES6 en Edge 14
- 2016 ES6 Soporte completo para ES6 en Safari 10
- 2015 ES6 Soporte completo para ES6 en Firefox 52
- 2018 ES6 Soporte completo para ES6 en navegadores

- Internet Explorer 9 no admitía el "uso estricto" de ES5.

## El Comité Técnico de ECMA 39

En 1996, Netscape y Brendan Eich llevaron JavaScript a la organización de estándares internacionales ECMA y se creó un comité técnico (TC39) para desarrollar el lenguaje.

- ECMA-262 Edition 1 se publicó en junio de 1997.

## De ES4 a ES6

Cuando el comité TC39 se reunió en Oslo en 2008, para ponerse de acuerdo sobre ECMAScript 4, se dividieron en 2 campos muy diferentes:

ECMAScript 3.1 Camp :

- Microsoft y Yahoo que querían una actualización incremental de ES3.

ECMAScript 4 Camp :

- Adobe, Mozilla, Opera y Google que querían una actualización masiva de ES4.

El 13 de agosto de 2008, Brendan Eich escribió un correo electrónico :

No es ningún secreto que el organismo de estándares de JavaScript, el Comité Técnico 39 de Ecma, se ha dividido durante más de un año, con algunos miembros a favor de ES4, una cuarta edición importante de ECMA-262, y otros abogando por ES3.1 basado en el ECMA-262 existente. Especificación de la Edición 3 (ES3). Ahora, estoy feliz de informar, la división ha terminado.

La solución fue trabajar juntos:

ECMAScript 4 pasó a llamarse ES5
ES5 debería ser una actualización incremental de ECMAScript 3.
Las características de ECMAScript 4 deben recogerse en versiones posteriores.
TC39 debería desarrollar una nueva versión importante, de mayor alcance que ES5.
El nuevo lanzamiento planeado (ES6) recibió el nombre en código "Harmony" (¿Debido a la división que creó?).

ES5 fue un gran éxito. Fue lanzado en 2009, y todos los principales navegadores (incluido Internet Explorer) cumplían plenamente en julio de 2013:

Chrome 23 IE10 / Edge Firefox 21 Safari 6 Opera 15
Nov 2012 Sep 2012 May 2013 Jul 2012 Jul 2013
ES6 también fue un gran éxito. Fue lanzado en 2015, y todos los navegadores principales cumplían plenamente en marzo de 2017:

Chrome 51 Edge 14 Firefox 52 Safari 10 Opera 38
May 2016 Aug 2016 Mar 2017 Sep 2016 Jun 2016
