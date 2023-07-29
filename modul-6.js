// Task 1. Натискання на кнопку "SHOW ME" має виводити значення з поля введення
// const refs = {
// 	input: document.querySelector('.input'),
// 	showBtn: document.querySelector('.btn'),
// 	output: document.querySelector('.output'),
// };

// console.log(refs.input);
// console.log(refs.showBtn);
// console.log(refs.output);

// refs.showBtn.addEventListener('click', onShowBtnClick);

// function onShowBtnClick() {
// 	const inputValue = refs.input.value;
// 	if (!inputValue) {
// 		return alert('Empty input! Enter value!')
// 	}
// 	refs.output.textContent = inputValue;
// }

// Task 2. Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const refs = {
//   firstInput: document.querySelector('.firstInput'),
//   secondInput: document.querySelector('.secondInput'),
//   swapBtn: document.querySelector('.swapBtn'),
// }

// refs.swapBtn.addEventListener('click', onSwapBtnClick)

// function onSwapBtnClick() {
//   const firstValue = refs.firstInput.value;
//   const secondValue = refs.secondInput.value;
//   refs.firstInput.value = secondValue;
//   refs.secondInput.value = firstValue;
// }

// Task 3. Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// // і кнопка набуває початкового вигляду.

// const refs = {
//     taskTitle: document.querySelector('.taskTitle'),
//     input: document.querySelector('#passwordInput'),
// hideBtn: document.querySelector('#hideButton')
// }

// refs.input.addEventListener('input', onInput)
// refs.hideBtn.addEventListener('click', onHideBtnClick)

// function onInput(event) {

//     refs.taskTitle.textContent = event.currentTarget.value ? event.currentTarget.value : 'Задача 3';
// // console.log(event)
// }

// function onHideBtnClick(event) {
//     if (refs.hideBtn.textContent === 'Приховати') {
//         refs.hideBtn.textContent = 'Розкрити';
// refs.taskTitle.style.display = 'none';
//     } else {
//         refs.taskTitle.style.display = 'block'; 
//         refs.hideBtn.textContent = 'Приховати';
// }
// }

// Task 4. Наведено список людей. Зроби фільтр на ім'я/прізвище.
// const refs = {
//     contactsList: document.querySelector('.contacts')
// }
// const actors = ['Peter Miller', 'John Carter', 'Amanda Diaz', 'Brad Sanders', 'Devis Brooks', 'Robert Morgan']
// function randerContactsMarkup(actors) {
//     const markup = actors.map((actor) => `<li class="contact">${actor}</li>`
        
//     ).join('')
//     refs.contactsList.insertAdjacentHTML("beforeend",markup)
// // console.log(markup);
    
// }

// randerContactsMarkup(actors)
