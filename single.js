function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}
const mushroomId = getIdFromUrl();
function displayMushroomDetails(id) {
  const mushroom = list.find(item => item.id == id);
  if (mushroom) {
    const h2 = document.createElement('h2');
    h2.textContent = mushroom.name;
    const img = document.createElement('img');
    img.src = mushroom.img;
    img.alt = mushroom.name;
    const p = document.createElement('p');
    p.textContent = mushroom.description;
  const detailsDiv = document.getElementById('about');
  detailsDiv.innerHTML = '';
  detailsDiv.appendChild(h2);
    detailsDiv.appendChild(p);
    detailsDiv.appendChild(img);
  }
}
displayMushroomDetails(mushroomId);