// alert("привіт зі світу грибів")
let list=[ { "id": 1, "name": "Білий гриб", "img": "білий_гриб.jpg", "description": "Цей гриб належить до роду Боровик. Він має коричневу або червонувато-буру шапку, що іноді може досягати до 25 см у діаметрі. М'якоть гриба щільна, біла, не змінює колір на зрізі. Це один з найсмачніших та найцінніших грибів.", "isGood": true }, { "id": 2, "name": "Підберезник", "img": "підберезник.jpg", "description": "Цей гриб отримав свою назву через те, що росте переважно під березами. Шапка має сіруватий або буруватий відтінок, ніжка світла, покрита лусочками. М'якоть біла, на зрізі може трохи рожевіти. Цей гриб дуже популярний і смачний.", "isGood": true },{
    "id": 3,
    "name": "Підосичник",
    "img": "підосичник.jpg",
    "description": "Цей гриб росте в осикових лісах, за що й отримав свою назву. Шапка має яскраво-червоний або помаранчевий колір. Ніжка товста, сіра, з темними лусочками. М'якоть на зрізі синіє. Це дуже смачний і цінний гриб.",
    "isGood": true
  },
  {
    "id": 4,
    "name": "Мухомор червоний",
    "img": "мухомор_червоний.jpg",
    "description": "Один з найвідоміших отруйних грибів. Шапка яскраво-червона, покрита білими пластівцями. Ніжка біла, з кільцем. Незважаючи на свою отруйність, цей гриб має важливе місце в екосистемі.",
    "isGood": false
  },
  {
    "id": 5,
    "name": "Бліда поганка",
    "img": "бліда_поганка.jpg",
    "description": "Цей гриб вважається одним з найнебезпечніших та найотруйніших грибів у світі. Він має зеленувату або оливкову шапку, тонку ніжку з кільцем і вольвою (розширення біля основи). Отрута цього гриба смертельна.",
    "isGood": false
  }
]
let row = document.querySelector(".mushrooms")

function displayMushrooms(mushrooms) {
 row.innerHTML=""

  mushrooms.forEach(element => {
    const col = document.createElement('div');
  col.classList.add('col');
  const card = document.createElement('div');
  card.classList.add('card');
  const h3 = document.createElement('h3');
  h3.textContent = element.name;
  const img = document.createElement('img');
  img.src = element.img;
  img.alt = element.name;
  const p = document.createElement('p');
  p.textContent = element.description;

    const button = document.createElement('a');
    button.href = "single.html?id=" + element.id;
    button.textContent = 'Детальніше';
    card.appendChild(h3); card.appendChild(img); card.appendChild(p); card.appendChild(button); col.appendChild(card); row.appendChild(col);
});
}

displayMushrooms(list)

let box1 = document.getElementById("checkbox1")
let box2 = document.getElementById("checkbox2")

box1.addEventListener("change", function() {
  if(box1.checked){
   let goodM = list.filter((item) => item.isGood);
   displayMushrooms(goodM)
}else{
  displayMushrooms(list)
}
});

box2.addEventListener("change", function() {
  if(box2.checked){
    let mushroom_bad = list.filter((item) => !item.isGood)
    displayMushrooms(mushroom_bad)
  }else{
    displayMushrooms(list)
  }
});