let list = [
  {
    id: 1,
    name: 'Маслюк',
    img: 'img/mush7.png',
    description:
      'Цей гриб має гладку, клейку шапку, зазвичай жовтого або коричневого кольору. Його легко розпізнати по слизистій поверхні, особливо після дощу. Росте переважно в хвойних лісах. Дуже популярний і смачний їстівний гриб.',
    isGood: true,
  },
  {
    id: 2,
    name: 'Боровик',
    img: 'img/mush8.png',
    description:
      "Один із найцінніших грибів, також відомий як білий гриб. Має товсту, м'ясисту шапку коричневого кольору і міцну ніжку. Його м'якоть не змінює колір на зрізі. Використовується для сушіння, маринування та смаження.",
    isGood: true,
  },
  {
    id: 3,
    name: 'Сироїжка',
    img: 'img/mush9.png',
    description:
      'Цей гриб отримав свою назву через те, що його можна їсти сирим (після соління). Його шапка може бути різних кольорів: червоною, жовтою, зеленою або фіолетовою. Це один з найпоширеніших грибів в українських лісах.',
    isGood: true,
  },
  {
    id: 4,
    name: 'Печериця',
    img: 'img/mush10.png',
    description:
      'Цей гриб, також відомий як шампіньйон, є одним з найпопулярніших у світі. Він має білу або коричневу шапку і рожеві або коричневі пластинки під нею. Використовується в кулінарії повсюдно.',
    isGood: true,
  },
  {
    id: 5,
    name: 'Мухомор червоний',
    img: 'img/mush11.jpg',
    description:
      'Один з найвідоміших отруйних грибів, що має яскраво-червону шапку з білими плямами. На ніжці є кільце, а біля основи — потовщення. Гриб дуже отруйний, але відіграє важливу роль в екосистемі лісу.',
    isGood: false,
  },
  {
    id: 6,
    name: 'Бліда поганка',
    img: 'img/mush12.jpg',
    description:
      'Вважається одним з найнебезпечніших грибів у світі. Має бліду, зеленувато-сіру шапку, білу ніжку з кільцем і вольвою біля основи. Отрута, що міститься в грибі, смертельна навіть у невеликих дозах.',
    isGood: false,
  },
  {
    id: 7,
    name: 'Підберезник',
    img: 'img/mush13.webp',
    description:
      'Цей гриб має коричневу або сіру шапку з дрібними лусочками і білу ніжку з темними плямами. Росте переважно під березами. Вважається смачним їстівним грибом, часто використовується в супах і соусах.',
    isGood: true,
  },
  {
    id: 8,
    name: 'Опеньок',
    img: 'img/mush14.jpg',
    description:
      'Цей гриб росте великими групами на пнях і повалених деревах. Має жовтувату або коричневу шапку з дрібними лусочками і тонку ніжку. Використовується в кулінарії після термічної обробки.',
    isGood: true,
  },
  {
    id: 9,
    name: 'Гриб-зонтик',
    img: 'img/mush15.webp',
    description:
      'Цей гриб має велику, плоску шапку з лусочками, що нагадує парасольку. Ніжка довга і тонка. Деякі види цього гриба їстівні, але є й отруйні, тому важливо правильно їх ідентифікувати.',
    isGood: false,
  },
  {
    id: 10,
    name: 'Лисичка',
    img: 'img/mush16.jpg',
    description:
      'Цей гриб має яскраво-жовту або оранжеву шапку з хвилястими краями і ніжку того ж кольору. Росте в хвойних і змішаних лісах. Вважається одним з найсмачніших їстівних грибів, часто використовується в різних стравах.',
    isGood: true,
  },
  {
    id: 11,
    name: 'Чортів гриб',
    img: 'img/mush17.jpg',
    description:
      'Цей гриб має темно-коричневу або чорну шапку з білими плямами і товсту ніжку. Він отруйний і може викликати серйозні отруєння. Часто зустрічається в листяних лісах, особливо під дубами.',
    isGood: false,
  },
  {
    id: 12,
    name: 'Перцевий гострий',
    img: 'img/mush18.jpg',
    description:
      'Перцевий гриб поширений по всій території України та в європейських країнах. Гриб віддає перевагу місцям зростання сосен, проте може виявлятися і в змішаних посадках, і в листяних. Росте зазвичай по одному екземпляру, але іноді можна зустріти невелику купку з 3-4 екземплярів.',
    isGood: false,
  },
  {
    id: 13,
    name: ' Грузлик',
    img: 'img/mush19.jpg',
    description:
      'Цей гриб має коричневу або сіру шапку з дрібними лусочками і білу ніжку з темними плямами. Росте переважно під березами. Вважається смачним їстівним грибом, часто використовується в супах і соусах.',
    isGood: false,
  },
];
localStorage.setItem('mushrooms', JSON.stringify(list));

let row = document.querySelector('.mushrooms');

function displayMushrooms(mushrooms) {
  row.innerHTML = '';

  mushrooms.forEach((element) => {
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
    button.href = 'single.html?id=' + element.id;
    button.textContent = 'Детальніше';
    card.appendChild(h3);
    card.appendChild(img);
    card.appendChild(p);
    card.appendChild(button);
    col.appendChild(card);
    row.appendChild(col);
  });
}

try {
  displayMushrooms(list);
} catch (err) {
  console.log(err);
}

try {
  let box1 = document.getElementById('checkbox1');
  let box2 = document.getElementById('checkbox2');

  box1.addEventListener('change', function () {
    if (box1.checked) {
      let goodM = list.filter((item) => item.isGood);
      displayMushrooms(goodM);
    } else {
      displayMushrooms(list);
    }
  });

  box2.addEventListener('change', function () {
    if (box2.checked) {
      let mushroom_bad = list.filter((item) => !item.isGood);
      displayMushrooms(mushroom_bad);
    } else {
      displayMushrooms(list);
    }
  });
  let search_imput = document.getElementById('search');
  search_imput.addEventListener('change', function () {
    let searchTerm = search_imput.value.toLowerCase();
    let filteredMushrooms = list.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    displayMushrooms(filteredMushrooms);
  });
} catch (err) {
  console.log(err);
}

function checkCurrentPath() {
  let path = window.location.pathname;
  if (path.includes('category.html')) {
    document.querySelectorAll('.buttons a')[0].classList.add('active');
  } else if (path.includes('index.html')) {
    document.querySelectorAll('.buttons a')[2].classList.add('active');
  } else if (path.includes('receipts.html')) {
    document.querySelectorAll('.buttons a')[1].classList.add('active');
  }
}
checkCurrentPath();
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let close_icon = document.querySelector('.close');
burger.addEventListener('click', function () {
  menu.classList.add('show');
});
close_icon.addEventListener('click', function () {
  menu.classList.remove('show');
});
try {
  const buyButtons = document.querySelectorAll('.col a');

  buyButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const parentCol = this.closest('.col');

      parentCol.classList.toggle('expanded');
      button.innerHTML = 'Чудовий <br> вибір!';
      setTimeout(() => {
        window.location.href = button.href;
        parentCol.classList.toggle('expanded');
        button.innerHTML = 'Детальніше';
      }, 1000);
    });
  });
} catch (err) {
  console.log('Card animation error:', err);
}
const colIMages = document.querySelectorAll('.col img');
if(colIMages.length > 0){
colIMages.forEach(function(img){
  document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    console.log(dx, 'dx')
    console.log(dy, 'dy')
    let angleX = 40 * dx / window.innerWidth / 2
    let angleY = 40 * dy / window.innerHeight / 2
    img.style.transform = `rotateX(${angleY}deg) rotateY(${-angleX}deg)`
    
    
})
})
}
