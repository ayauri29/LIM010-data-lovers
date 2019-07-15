# POKEMON GO

 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pok%C3%A9mon_GO_logo.svg/1280px-Pok%C3%A9mon_GO_logo.svg.png" width="131px";
    height="80.2px">

## Índice

- [Índice](#índice)
- [Resumen](#resumen)
- [Investigación UX](#investigacion-ux)
    - [Usuarios y objetivos en relación con el producto](#usuarios-y-objetivos-en-relacion-con-el-producto)
    - [¿Cómo soluciona las necesidades del usuario?](#¿-como-soluciona-las-necesidades-del-usuario-?)
    - [Historias de usuario](#historias-de-usuario)
    - [Prototipo en papel](#prototipo-en-papel)
    - [Prototipo en FIGMA](#prototipo-en-FIGMA)
    - [Resumen del Feedback](#resumen-del-feedback)

## Resumen

**Pokémon GO - Puntos fuertes y débiles de todos los tipos de Pokémon**
Fuego, Hierba y Agua. Es relativamente obvio saber quién vence a quién. ¡Pero Pokémon no se detiene ahí! Te contamos todo sobre los tipos de Pokémon en Pokémon Go.
Todos los Pokémon se dividen en distintos tipos. Un Pokémon puede ser de uno o más tipos, que determinan varias características sobre un Pokémon. Por un lado determina dónde le gusta vivir, pero también
determina sus puntos débiles y fuertes frente a la batalla. Conócelos todos.

**Usuario y contraseña:** LABORATORIA.

## Investigacion UX:

### Usuarios y objetivos en relación con el producto
Nuestros usuarios son los fans de **Pokémon Go** que de manera divertida pueden obtener información sobre los tipos, debilidades, y datos adicionales sobre este mundo Pokémon.

### ¿Cómo soluciona las necesidades del usuario?
Ésta página permite ingresar mediante un usuario y contraseña al mundo Pokemon de la región de Kanto, el usuario tiene la libertad de pasar de una vista a otra utilizando el navegador, con una primera pestaña **`HOME`** de introducción que da pie a lo que encontrará a continuación, además de sugerir/facilitar el "App Store" y la "Tienda de Google Play" para descargar la aplicación; seguidamente la pestaña **`POKEMON`** en la cual podrá visualizar el total de pokemones y a primera vista sus priincipales datos y al reverso(acercando el puntero para desktop o tocándolo para mobile) características adicionales, distinguidos entre atrapados y no atrapados indicando las cantidades respectivas, un buscador por nombre, filtros por tipo, debilidad y orden(a-z, z-a, frecuencia de aparición asc y des), aplicados en simultáneo o sobre el total de pokemones; por último se encuentra la pestaña **`EGG`** que gráficamente muestra los porcentajes de los pokemones que aparecen en los tipos de huevos a eclosionar, además de un tabla que obedece a la seleción de tipo de huevo filtrando los pokemones que se encuentran en dicha categoría.

### Historias de usuario

Ésta interfaz se desarrolló en base a las siguientes historias de usuario :

- **`HISTORIA DE USUARIO 1`** Como usuaria quiero poder loguearme para acceder al sitio web.

- **`HISTORIA DE USUARIO 2`** Como usuaria quiero poder ver a todos los pokemones al ingresar a la página para saber cuántos tengo y cuántos me faltan atrapar.

- **`HISTORIA DE USUARIO 3`** Como usuaria quiero poder obtener el porcentaje de los pokemones que aparecen en los diferentes tipos de huevo para saber qué huevos eclosionar.

- **`HISTORIA DE USUARIO 4`** Como usuaria quiero poder filtrar a los pokemones por tipo y debilidades para saber quiénes y cuántos son de cada tipo y tienen esa debilidad.
    
- **`HISTORIA DE USUARIO 5`** Como usuaria quiero poder elegir un pokemon para ver sus características más relevantes.

- **`HISTORIA DE USUARIO 6`** Como usuaria quiero poder ordenar por orden alfabético (A-Z y Z-A) y frecuencia de aparición (_spawn_) de manera ascendente (menor a mayor) o descendente (mayor a menor) a los pokemones para poder ubicarlos fácilmente y saber cuáles son los más difíciles de atrapar.

### Prototipo en papel
Esta fue la primera idea de como podría visualizarse nuestra página, es un prototipo de baja fidelidad con papel y lápiz (blanco y negro) para la vista desktop y mobile, definiendo el número de pantalla en la cuál el usuario podrá interactuar basadas en las historias dadas.

![PrototipoEnPapel](https://user-images.githubusercontent.com/51327685/60276635-9c4e5480-98c1-11e9-8547-3c9d24359cdb.jpg)

![vista_mobile](https://user-images.githubusercontent.com/51327685/61178777-4dd7d000-a5ba-11e9-8dd9-24148a02a412.jpg)

### Prototipo en FIGMA
En éste [link](https://www.figma.com/file/uuZwmTDPuHUKXG7LMSPbwD/Data-lovers-Pok%C3%A9mon?node-id=1%3A2) se puede visualizar el prototipo de alta fidelidad final desarrollado (mobile y desktop) en Figma. 

**Prototipo exportado de Figma - Vista desktop y mobile:**
![image](https://user-images.githubusercontent.com/51327685/61134264-e0765300-a484-11e9-9a98-82e251bcde72.png)

### Resumen del Feedback
En el primer feedback sobre el prototipo en papel no hubo cambios, quiere decir que estuvo clara la interacción.
Al término del segundo sprint recibimos el siguiente feedback:

- En el **screen home**: 
    - Se nos sugirió poner el título más grande , centrado y separado del párrafo, ya que visualmente no se diferenciaba que sea un título por tener el mismo justificado que el párrafo.
    - Otra sugerencia fue poner un logo en el HEADER junto al texto "Pokémon".
- En el **screen pokemon**:
    - Pokemon filtro en inglés: Ya que la data está en inglés, se sugirió que los filtros para búsqueda deberían estar también en inglés.
    - Parte de nuestro propio aporte al ver cómo nuestras compañeras interactuaban con el avance de nuestro proyecto fue indentificar la necesidad de añadir un buscador por nombre.
- En el **screen Egg**:
    - En la pantalla del Screen-egg mejorar el CSS y agregar un filtro donde se muestren los pokemones y su frecuencia de aparicion según el tipo de huevo que tengan. Ésto surgió al intercambiar ideas sobre lo que se había entendido de la historia de usuario correspondiente. Ésto conllevó a descartar la gráfica de torta en la vista mobile y mostrar sólo la tabla.