// Task 1:
// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі, якщо є - виводить повідомлення "Доступ дозволено"
// const logins = ["mango", "Poly", "Ajax"];

// const userName = prompt("Please, enter login");

// function checkLogin(userLogins, login) {
//   //   if (userLogins.includes(login)) {
//   //     return "Доступ дозволено";
//   //   }
//   //   return "В доступі відмовлено";
//   return userLogins.includes(login) ? "Доступ дозволено" : "В доступі відмовлено";
// }
// console.log(checkLogin(logins, userName));



// Task 2:
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// const numbers = "hkjhkjhk";

// function findSmallerNumber(numArray) {
//     if (!Array.isArray(numArray)) {
//         return 'Not array'
//     }
//     let smallestNumber = numArray[0];
//     for (const number of numArray) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }   
//     }
//             return smallestNumber;
// }
// console.log(findSmallerNumber(numbers));

// Task 3:
//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const getTotalSalary = function (salaries) {
// 	const values = Object.values(salaries);
// 	let sum = 0;
// 	for (const value of values) {
		// sum += value; / sum = sum + value
// 	}
// 	return sum;
// }

// console.log(getTotalSalary(salaries));

// Task 4:
//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція вважає, що м повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
// { name: "Смарагд", price: 1300, quantity: 4 },
// { name: "Діамант", price: 2700, quantity: 6 },
// { name: "Сапфір", price: 400, quantity: 7},
// { name: "Щебінь", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(items, itemName) {
//     for (const item of items) {
//         if (item.name === itemName) {
//             return item.price * item.quantity;
//         }
//     }
//     return `Stones ${itemName} not fined`
// }

// console.log(calcTotalPrice(stones, "Смарагд"))

function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line

    // for (let i = 0; i < orderedItems.length; i += 1) {
    //   totalPrice += orderedItems[i];
    // }
    orderedItems.forEach(function (orderedItem, index, orderedItems) {
        totalPrice += orderedItem[index];

        // Change code above this line
        return totalPrice;
    });
}
