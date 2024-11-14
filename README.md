1. Importación del módulo

import {getData} from './api.js';

Esta línea importa la función getData desde el archivo api.js. La sintaxis de desestructuración ({getData}) indica que estamos importando específicamente la función getData del módulo api.js.
2. Configuración del evento de carga de la ventana

    window.addEventListener('load', async () => { 

Estamos añadiendo un evento a la ventana del navegador que se activará cuando toda la página haya terminado de cargarse. La función que se pasa a addEventListener es asincrónica (denotada por async), lo que nos permitirá usar await dentro de ella para manejar operaciones asíncronas de forma más sencilla.
3. Obtención de datos

    const data = await getData();
    console.log(data);

Usamos la función getData para obtener datos de una fuente externa. await se utiliza para esperar a que la promesa que devuelve getData se resuelva y devuelva los datos. Al usar await, el código se detiene en esta línea hasta que los datos estén disponibles. Luego, imprimimos los datos en la consola del navegador para verificar su contenido.
4. Creación de la lista

    const lista = document.createElement('ul');

Creamos un elemento HTML ul (lista desordenada) utilizando document.createElement. Este elemento servirá como contenedor para los elementos de la lista que vamos a crear a continuación.
5. Iteración y creación de elementos de la lista

    data.results.forEach(personaje => {  
        const elementList = document.createElement('li');  
        const name = document.createElement('h2');
        const image = document.createElement('img');
        
        name.textContent = personaje.name;  
        image.src = personaje.image;    
        elementList.appendChild(name);    
        elementList.appendChild(image);
        lista.appendChild(elementList);
    });

Iteramos sobre el array data.results usando forEach. Para cada objeto personaje en results:

    Creamos un elemento li (elemento de lista).
    Creamos un elemento h2 para mostrar el nombre del personaje.
    Creamos un elemento img para mostrar la imagen del personaje.
    Asignamos el nombre del personaje al contenido de texto del elemento h2.
    Asignamos la URL de la imagen del personaje al atributo src del elemento img.
    Añadimos el elemento h2 y el elemento img al elemento li.
    Añadimos el elemento li a la lista ul.

6. Inserción de la lista en el documento

        document.getElementById('app').appendChild(lista);
        });

Finalmente, obtenemos el elemento con el id app del DOM y añadimos la lista ul que hemos creado como un hijo de este elemento. Esto hace que la lista sea visible en la página web.

En resumen, este código:

    Espera a que la página se cargue completamente.
    Obtiene datos de una fuente externa usando getData.
    Crea una lista de elementos li, cada uno con un nombre y una imagen de un personaje, basado en los datos obtenidos.
    Inserta la lista en el elemento con id app en el DOM, haciéndola visible en la página web.

