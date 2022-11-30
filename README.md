# Assesment-Frontend

### ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

- Sprint planing.

  -Se realiza al comienzo de cada Sprint y participa el equipo para definir como esta organizado el backlog del producto y como las tareas serán repartidas durante la semana. 
  
- Daily Scrum.

  -Es una reunion diaria en la cual su duración es aproximadamente de 15 minutos en la que participa el development team respondiendo las preguntas principales. Que hice ayer, que voy hacer hoy, existe algun impedimento para el sprint goal?
  
  
### ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

- los wireframes son los prototipos de las paginas web, que ayudan a dar una estimación del esquema del producto final. Alli se puede observar la estructura basica y los tipos de contenido que tendra. 


### Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

- Las variables tipo Var pueden ser tomadas como variables globales en la cual pueden ser modificadas sin ninguna restricción. 

- Las variables tipo Let tienen el concepto de block scope en la cual solo permite que se pueda acceder dentro del bloque declarado. 

![let](https://user-images.githubusercontent.com/79812118/204684808-9b3d3bc8-06be-4719-a3ab-73109dd02434.jpg)

- Las variables tipo constantes Const son variables que no se pueden modificar  

### ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

- git checkout -b rama-1
- git switch -C rama-1
- git branch rama-1


### Explicar la diferencia entre git merge y git rebase.

- git merge: fusiona cualquier cambio que se haya hecho en la rama principal guardando el historial de los commits realizados. Cuando se hace un merge de una rama a otra se junta el historial de ambas ramas lo cual se reará una serie de historiales intercalados 

- git rebase: unifica las ramas dejando un arbol lineal. Tambien El rebase unifica las ramas perdiendo el historial de los commit 


### ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

- Pull request: Es la acción de validar un codigo que se va a fusionar con otra rama 
- git pull : Trae la copia dela rama principal que se encuentra en la nube y actualiza las ramas locales 


### ¿Qué es el Virtual DOM?

- "Es  una representación del DOM guardada en memoria que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles." (información tomada de https://styde.net/que-es-el-virtual-dom-en-react/ )

### Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta.

- https://codepen.io/cristian-makeitreal/pen/NWadqqa?editors=1100 

![picture](https://raw.githubusercontent.com/makeitrealcamp/assesment-1-programa-top/main/assets/services-section.gif))

```
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.c-section{
  display:flex;
  flex-direction:column;
  padding: 47px;
}

.c-section__title{
  display:flex;
  justify-content:center;
  background-color: black;
  color: white;
  border-style: groove;
  width: 100%;
  height: 80px;
  padding: 19px;
  box-shadow: 5px;
  border-top: 10px solid #646060;
}

.c-services{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding-top: 45px;
}

.c-services__item{
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  text-align: center;
  line-height: 23px;
  background-color: rgba(229, 222, 222, 0.534);
  margin: 10px;
  height: 200px;
  font-size: 16px;
}

.c-services__item:hover{
  box-shadow:    0.3em 0.3em 1em rgba(0,0,0,0.3);
}

.c-services__item h3{
  padding-top: 15px;
  padding-bottom: 10px;
}


.c-services__item p{
  padding-top: 10px;
  text-align: justify;
  padding: 5px;
  padding-top: 10px;
}

```
