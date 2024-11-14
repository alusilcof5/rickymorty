import {getData} from './api.js';

window.addEventListener('load', async () => {
  const data = await getData();
  console.log(data);
  const lista = document.createElement('ul');
  
  data.results.forEach(personaje => {  // Cambié 'character' a 'personaje' para evitar conflicto
    const elementList = document.createElement('li');  // Cambié el nombre de la variable
    const name = document.createElement('h2');
    const image = document.createElement('img');
    
    name.textContent = personaje.name;  // Uso 'personaje' en lugar de 'character'
    image.src = personaje.image;    
    elementList.appendChild(name);    // Uso elementoLista en lugar de character
    elementList.appendChild(image);
    lista.appendChild(elementList);
  });
  
  document.getElementById('app').appendChild(lista);
});