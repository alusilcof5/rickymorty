import {getData} from './api.js';

window.addEventListener('load', async () => {
  const data = await getData();
  console.log(data);
  const lista = document.createElement('ul');
  
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
  
  document.getElementById('app').appendChild(lista);
});