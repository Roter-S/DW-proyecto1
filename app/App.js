import { fetchData } from './utils/api.js';

export function App() {
  fetchData().then(
    data => data.forEach(
      item => showItems(item)
    ),
  ).catch(
    error => console.log(error)
  );
}


const showItems = (item) => {
  const Root = document.getElementById('root');
  const itemElement = document.createElement('div');
  console.log(item);
  itemElement.innerHTML = `
    <div class="item">
      <h2>${item.title}</h2>
      <p>${item.precio}</p>
      <image class="img-thumbnail" src="${item.thumbnailUrl}">
    </div>
  `;
  Root.appendChild(itemElement);
}