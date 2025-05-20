// function userDialog() {
//   let userName = prompt("Введіть ваше ім'я:");
//   if (!userName) {
//     alert("Ви не ввели ім'я!");
//     return;
//   }

//   let age;
//   do {
//     age = prompt("Введіть ваш вік:");
//   } while (isNaN(age) || age === null || age === "");

//   let isArtist = confirm("Ви займаєтеся мистецтвом?");

//   let message = `Дані користувача:\nІм'я: ${userName}\nВік: ${age}\n`;
//   message += isArtist ? "Захоплюється мистецтвом" : "Не займається мистецтвом";

//   alert(message);
// }


function showDeveloperInfo(firstName, lastName, position = "Frontend Developer") {
  alert(`Розробник сторінки:\n${lastName} ${firstName}\nПосада: ${position}`);
}

// Функція порівняння рядків
function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
    alert(`Більший рядок: ${str1}`);
  } else if (str2.length > str1.length) {
    alert(`Більший рядок: ${str2}`);
  } else {
    alert("Рядки мають однакову довжину");
  }
}

// Функція для зміни DOM
function modifyDOM() {
  // Зміна фону на 30 секунд
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 30000);

  // Використання getElementById
  const header = document.getElementById("mainHeader");
  if (header) {
    header.style.color = "#2c3e50";
  }

  // Використання querySelectorAll
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.style.fontWeight = "bold";
  });

  // Робота з DOM-вузлами
  const gallerySection = document.querySelector(".main-gallery");
  if (gallerySection) {
    // innerHTML
    gallerySection.innerHTML += "<p>Новий текст через innerHTML</p>";

    // Створення нового елементу
    const newDiv = document.createElement("div");
    newDiv.textContent = "Новий div через createElement";
    gallerySection.append(newDiv);

    // Видалення елементу через 5 секунд
    setTimeout(() => {
      newDiv.remove();
    }, 5000);
  }
}

// Викликаємо функції при завантаженні сторінки
window.onload = function () {
  userDialog();
  showDeveloperInfo("Богдан", "Губар");
  compareStrings("Картинна галерея", "Музей мистецтв");
  modifyDOM();

  // Перенаправлення через 40 секунд
  setTimeout(() => {
    if (confirm("Перейти на сторінку галереї?")) {
      window.location.href = "gallery.html";
    }
  }, 40000);
};

// Lab 7 
// Атрибут onclick
function handleAttrClick() {
  alert('✔ Натиснуто через атрибут onclick');
}

// Властивість .onclick
document.getElementById('byProperty').onclick = function () {
  alert('✔ Натиснуто через властивість .onclick');
};

// Два обробники через addEventListener
const multiBtn = document.getElementById('multiBtn');

function handler1() {
  console.log('✔ handler1 спрацював');
  alert('✔ Перший обробник!');
}

function handler2() {
  console.log('✔ handler2 спрацював');
  alert('✔ Другий обробник!');
}

multiBtn.addEventListener('click', handler1);
multiBtn.addEventListener('click', handler2);

// Об'єкт як обробник подій
const objHandler = {
  handleEvent(event) {
    alert(`✔ Обʼєкт-обробник: подія на ${event.currentTarget.tagName}`);
  }
};

const objBtn = document.getElementById('objHandlerBtn');
objBtn.addEventListener('click', objHandler);

// Видалення обʼєкт-обробника
document.getElementById('removeObj').addEventListener('click', function () {
  objBtn.removeEventListener('click', objHandler);
  document.getElementById('status').textContent = 'Обʼєкт-обробник видалено!';
  document.getElementById('status').style.color = 'red';
});

// === 2. Список — підсвічування ===
const ul = document.getElementById('highlightList');

ul.onclick = function (event) {
  if (event.target.tagName === 'LI') {
    ul.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    event.target.classList.add('active');
  }
};

// === 3. Меню з поведінкою через data-action ===
const menu = document.getElementById('menu');

menu.onclick = function (event) {
  const btn = event.target.closest('button');
  if (!btn) return;

  const action = btn.dataset.action;
  if (action && behavior[action]) {
    behavior[action]();
  }
};

const behavior = {
  sayHello() {
    alert("Привіт, користувачу!");
  },
  showTime() {
    alert("Поточний час: " + new Date().toLocaleTimeString());
  },
  changeColor() {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
};