// 2023/06/17, practise
// Task 1. Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// Solution:
// const a = 11;
// if (a === 10) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }


// Task 2. Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// Solutions:
// const num = 3;
// Solution. Method 1:
// switch (num) {
//     case 1:
//         console.log('зима');
//         break;
//     case 2:
//         console.log('весна');
//         break;
//     case 3:
//         console.log('lito');
//         break;
//     case 4:
//         console.log('osen');
//         break;
//     default: console.log('not found');
// }

// Solution. Method 2:
// let result = '';
// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//          result = 'lito';
//         break;
//     case 4:
//         result = 'osen';
//         break;
//     default: result = 'not found';
// }
//  console.log(result);


//Task 3. Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// Solution:
// const answer = prompt("Яка офіційна назва JavaScript?");
// console.log(answer);
// if (answer === "ECMAScript") {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!");
// }


//Task 4. Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

// Solution:
// const userNumber = prompt('Enter a number');
// const hours = userNumber / 60;
// // const modifiedHours = hours.ParsInt();

// const minutes = userNumber % 60;
// console.log(minutes);


//Task 5. Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// Solution:
// const login = prompt('Enter a login');

// if (login === "Адмін") {
//     const password = prompt('Enter a password');

//     if (password === "Я головний") {
//         alert("Добрий день!");
//     } else {
//         alert("Невірний пароль!");
//     }
// } else if (!login) {
//     alert("Скасовано");
// } else {
//     alert("Я вас не знаю");
// }






