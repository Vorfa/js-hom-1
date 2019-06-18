
// 1-e

const ADMIN_PASSWORD = 'm4ng0h4ckz';
const password = prompt ('Введите пароль');
let message;

if (password === null) {
  message = 'Отменено пользователем!';
} else if (password !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
} else {
  message = 'Добро пожаловать!';
}

alert (message);





// 2-e

const credits = 23580;

const pricePerDroid = 3000;

const quantity = 2;

let totalPrice = pricePerDroid * quantity;

const balance = credits - totalPrice;

if (credits < totalPrice) {
  console.log ('Недостаточно средств на счету!');
} else {
  console.log (`Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`);
}



// 3-е

let shipping;
const country = 'Австралия';

let shippingInfo;

switch (country) {
 case 'Китай':
   shipping = '120 кредитов';
   break;

 case 'Южная Америка':
   shipping = '250 кредитов';
   break;

 case 'Австралия':
   shipping = '80 кредитов';
   break;

 case 'Индия':
   shipping = '170 кредитов';
   break;

 case 'Ямайка':
   shipping = '130 кредитов';
   break;

 default:
    shippingInfo = 'В вашей стране доставка не доступна';
}

if (shipping !== undefined){
  shippingInfo = `Доставка в ${country} будет стоить ${shipping}`;
}  

console.log(shippingInfo);
