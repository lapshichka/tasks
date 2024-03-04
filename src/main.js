// ** ------------------- СТРОКИ -------------------
/* ------------------------------------------------- */
// const firstName = 'Ekaterina';
// const lastName = 'Andreena';
// const age = 20;
// const str = 'Hello my name is Eka';

// let value;

// value = firstName + ' ' + lastName;
// value += value + 'I am ' + age;

// value = firstName.length;
// value = firstName[2];
// value = firstName[lastName.length - 1];

// value = firstName.toUpperCase();
// value = firstName.concat(" ", lastName);

// value = firstName.indexOf('a', 5);
// value = firstName.indexOf('ka');
// value = str.includes('Eka');

// value = str.slice(0, 5);
// value = str.slice(0, -3);

// value = str.replace('Eka', 'Ekaterina');

// console.log(value);

// ** ------------------- ОБЪЕКТЫ -------------------
/* -------------------------------------------------- */

// const user = {
//   firstName: 'Ekaterina',
//   age: 20,
//   isAdmin: true,
//   email: 'test@mail.ru',
//   'user-address': {
//     city: 'Moscow',
//   },
//   skills: ['html', 'css', 'js'],
// };
// let value;
// let prop = 'skills';

// value = user['isAdmin'];
// value = user['user-address'].city;
// value = user['user-address']['city'];
// value = user[prop][0];

// user.firstName = 'Keyt';
// value = user.firstName;

// user.info = 'Some info';
// value = user.info;

// user['user-address'].city = 'Sochi';
// user['user-address'].country = 'Russia';

// // user.plan.basic = 'basic'; ошибка (undefined)

// console.log(value);
// console.log(user);

// ** ------------------- ЦИКЛЫ -------------------
/* ------------------------------------------------ */
// while, do while, for, for of, for in

// let i = 10;
// while (i--) {
//   console.log(i);
// }
/* ------------------------------------------------ */
// do {
//   console.log(i);
// } while (i > 0);
/* ------------------------------------------------ */
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue; // заставляет пропустить итерацию
//     // break - прерывает работу цикла
//   }
//   if (i === 7) {
//     break; // прерывает работу цикла
//   }
//   console.log(i);
// }
/* ------------------------------------------------ */
// let str = 'PipiPupu';
// let res = '';

// for (let i = 0; i <str.length; i++) {
//   res += str[i] + '-'
// }
// console.log(res);
/* ------------------------------------------------ */
// const users = [
//   {
//     name: 'Ekaterina',
//     age: 20,
//   },
//   {
//     name: 'Anna',
//     age: 25,
//   },
//   {
//     name: 'Ivan',
//     age: 37,
//   },
// ];

// const usersObj = {};

// for(let i = 0; i < users.length; i++) {
//   console.log(users[i].name);
//   usersObj[users[i].name] = users[i];
// }
// console.log(usersObj['Anna']);

// for in - служит для перебора массивов
// for (let key in usersObj) {
//   console.log(user[key]);
// }

// for of - служит для перебора объектов
// for (let value of users) {
//   console.log(value);
// }

// let arr = [3, 5, 7];
// arr.foo = 'hello';

// for (let i in arr) {
//   console.log(i); // выводит "0", "1", "2", "foo"
// }

// for (let i of arr) {
//   console.log(i); // выводит "3", "5", "7"
// }

// ** ------------------- ФУНКЦИИ -------------------
/* ------------------------------------------------ */
//TODO:  Function Declaration (если функция объявлена в основном потоке кода)
/* function sayHello(firstName = 'Default', LastName = 'Default') {
  if (!firstName) return console.error('Error');
  console.log(firstName, LastName);
  console.log('Hello world');
  return `Hello, ${firstName} ${LastName}`;
}
let res = sayHello('Ekaterina', 'Andreevna') + '!';
let res2 = sayHello();
console.log(res2); */

//! Область видимости функции (ГЛОБАЛЬНАЯ(переменные, объявленные за пределами функции))
/* let x = 10;
function foo(x) {
  let x = 20;
  console.log(x);
  return x;
}
foo();
console.log(x); */

/* const user = {
  name: 'Denis',
  age: 30,
};
function getObj(obj) {
  obj.name = 'Den';
}
getObj(user);
console.log(user); */

//TODO:  Function Expression (если функция создана, как часть выражения)
// нельзя вызвать функцию до ее фактического присвоени в переменную
/* const square = function (x) {
  return x * x;
}; */

//TODO:  Самовызывающяся функция (часто в такие функции заварачивают основной код, нужно, чтобы закрыть доступ к конфликтам с глобальным пространством)
/* (function (text) {
  console.log(text);
})('Hi pipi pupu'); */

//TODO:  Чистая функция (функция зависит только от своих входных аргументов, нет побочных эффектов(не изменяет входные аргументы и окр. среду))
/* 
function doubleCoordinates(point) {
  // не чистая
  point.x = point.x * 2;
  point.y = point.y * 2;

  return point;
}

function doubleCoordinates(point) {
  // чистая
  const pointCopy = Object.assign({}, point);
  pointCopy.x = pointCopy.x * 2;
  pointCopy.y = pointCopy.y * 2;

  return pointCopy;
}

// функция, которая зависит от внешней константы или переменной - не является чистой
const DELAY = 1;

function calcDelay(input) {
  return input * DELAY;
}

// функция, которая записывает данные в файл
function writeToFile(data, fileName) {
  const file = io.open(fileName, 'w');
  return file.write(data);
} */

// ** ------------- МЕТОДЫ МАССИВОВ ---------------
/* ------------------------------------------------ */

// const numArr = [2, 83, 933, 93, 0, 1];

// let value;

// value = numArr.length;

// value = Array.isArray(numArr);
// value = numArr[0];
// numArr[3] = 39;

// value = numArr.indexOf(1);

// value = numArr.push(100);
// value = numArr.pop();

// value = numArr.unshift(50);
// value = numArr.shift();

// value = numArr.slice(0, 2); // не изменяет исходный массив (вернет копию массива (0))
// value = numArr.splice(1, 2, 'eighty three', 'nine hundred and thirty tree');

// value = numArr.reverse();

// value = numArr.concat(numArr);
// value = [].concat(1, 2, 3);

// value = numArr.join(', ');
// value = 'hi hi hih hihih hihi'.split(' ');

// value = numArr.at(-2);

// console.log(value, numArr);

// ** ------------------- РЕКУРСИЯ -------------------
//** функция вызывает саму себя
/* ------------------------------------------------ */
/* let i = 0;

function func() {
  console.log(i++);

  if (i <= 10) {
    func();
  }
}
func(); */

/* function func(arr) {
  console.log(arr.shift());
  console.log(arr);

  if (arr.length != 0) {
    func(arr);
  }
}
func([1, 2, 3]); */

/*
function getSum(arr, sum = 0) {
  sum += arr.shift();

  if (arr.length != 0) {
    sum = getSum(arr, sum)
  }
  return sum;
}
console.log(getSum([1, 2, 3]));
*/

/*
let sum = 0;
function getSum(arr) {
  sum += arr.shift();

  if (arr.length != 0) {
    sum = getSum(arr);
  }
  return sum;
}
console.log(getSum([1, 2, 3]));
*/

/*
function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      arr[i] = func(arr[i]);
    } else {
      arr[i] = arr[i] + '!';
    }
  }
  return arr;
}
console.log(func([1, 2, [3, 4, [5, 6]]]));
*/

/*
function reduceNum(num) {
  let sum = getDigitSum(num);

  if (sum >= 10) {
    return reduceNum(num);
  } else {
    return sum;
  }
}
function getSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
function getDigits(num) {
  return String(num).split(' ');
}
function getDigitSum(num) {
  return getSum(getDigits(num));
}
console.log(reduceNum(126)); */
/* ------------------------------------------------ */
/*
const surfaceAreaCalculator = (radius) => {
  return 4 * 3.14 * square(radius);
};
const square = (n) => {
  return n * n;
};
const surfaceOfMars = surfaceAreaCalculator(3390);
console.log(surfaceOfMars); */

/*
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const answer = factorial(3);
console.log(answer); */

// ** ---------- ФУНКЦИИ ВЫСШЕГО ПОРЯДКА ----------
// - это функция, которая принимает в качестве параметров другие функции или возвращают функции
// функция является объектом, callback - функция передана в качестве параметра и вызвана внутри функции высшего порядка
/* ------------------------------------------------ */

/*const arr = ['Ekaterina', 'Anna', 'Olga', 'Ivan', 'Denis'];
// [9, 4, 4, 4, 5]

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i].length);
}

console.log(newArr);

let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
  newArr2.push(arr[i].toUpperCase());
}
console.log(newArr2);*/
/* ------------------------------------------------ */
/*
const arr = ['Ekaterina', 'Anna', 'Olga', 'Ivan', 'Denis'];

function mapArray(arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

function nameLength (el) {
  console.log(el);
  return el.length;
}
function nameToUpperCase(el) {
  return el.toUpperCase()
}
const result = mapArray(arr, nameLength);
const result2 = mapArray(arr, nameToUpperCase)
console.log(result2);*/

/*function greeting(firstName) {
  return function (lastName) {
    return `Hello ${firstName} ${lastName}`;
  };
}
// const testGreeting = greeting('Ekaterina');
// console.log(testGreeting);
// const fullName = testGreeting('Abibasovich');
const fullName = greeting('Ekaterina')('Abibasovich');
console.log(fullName);*/

/*
function question(job) {
  const jobDictionary = {
    developer: `что такое JavaScript`,
    teacher: `какой предмет вы ведете`,
  };

  return function (name) {
    return `${name}, ${jobDictionary[job]}?`;
  };
}
const developerQuestion = question('developer')('Катя');
console.log(developerQuestion);
const teacherQuestion = question('teacher')('Надежда');
console.log(teacherQuestion);
*/
/* ------------------------------------------------ */
// * Метод Map
// без использования метода
// const arr1 = [1, 2, 3];
// const arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// }
// console.log(arr2);

// const arr1 = [1, 2, 3];
// const arr2 = arr1.map(function (item) {
//   return item * 2;
// });
// console.log(arr2);

// const arr1 = [1, 2, 3];
// const arr2 = arr1.map(item => item * 2);
// console.log(arr2);

// * Метод Filter
// const persone = [
//   { name: 'Peter', age: 16 },
//   { name: 'Mark', age: 18 },
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 14 },
//   { name: 'Tony ', age: 24 },
// ];

// без использования метода
// const fullAge = [];
// for(let i = 0; i < persone.length; i++) {
//   if(persone[i].age >= 18) {
//     fullAge.push(persone[i])
//   }
// }
// console.log(fullAge);

// const fullAge = persone.filter(persone => persone.age >= 18);
// console.log(fullAge);

// * Метод Reduce
// const arr = [5, 7, 1, 8, 4];

// без использования метода
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// без передачи начального значения
// const sum = arr.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// });
// console.log(sum);

// с передачей начального значения
// const sum = arr.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 10);
// console.log(sum);

// * Собственная функция высшего порядка
// const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

// function mapForEach(arr, fn) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(fn(arr[i]));
//   }
//   return newArr;
// }
// const lenArray = mapForEach(strArray, function (item) {
//   return item.length;
// });
// console.log(lenArray);

// ** ---------------- ЗАМЫКАНИЕ ------------------
/* ------------------------------------------------ */
// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }
// const calc = createCalcFunction(34);
// calc();
/* ------------------------------------------------ */
// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10)
// console.log(addTen(10));
/* ------------------------------------------------ */
// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }
// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));

// console.log(ruUrl('yandex'));
// console.log(ruUrl('vk'));
/* ------------------------------------------------ */
// function bind(obj, fn) {
//   return function (...args) {
//     fn.apply(obj, args);
//   };
// }
// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }
// const person1 = { name: 'Михаил', age: 22, job: 'Frontend' };
// const person2 = { name: 'Елена', age: 19, job: 'SMM' };

// bind(person1, logPerson)();
// bind(person2, logPerson)();
/* ------------------------------------------------ */
// function cs2() {
//   let c = 0;
//   return function () {
//     c++;
//     console.log(c);
//   };
// }
// // Функция - код функции + доступные данные
// let d = cs2();
// c = 6;
// d();
// d();

// ** ---------- This (Контекст вызова) -----------
/* ------------------------------------------------ */
// function getThis () {
//   console.log(this);
// }

// function getPrice(currency = '$') {
//   console.log(currency + this.price);
//   return this;
// }
// function getName() {
//   console.log(this.name);
//   return this;
// }
// const prod1 = {
//   name: 'AMD',
//   price: 100,
//   getPrice,
//   getName() {
//     console.log(this.name);
//   },
//   info: {
//     information: ['2.3ghz'],
//     getInfo: function () {
//       console.log(this);
//     },
//   },
// };
// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();

// const prod2 = {
//   name: 'Sup',
//   price: 50,
//   getPrice,
// };
// prod2.getName = prod1.getName;
// prod2.getName();

// let str = 'Hello world';
// const reversStr = str
//   .split('') // ['H', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
//   .reverse() // ['d', 'l', 'r', 'o', 'w', 'o', 'l', 'l', 'e', 'H']
//   .join(''); // 'dlrow olleH'
// console.log(reversStr);

// const prod3 = {
//   name: 'ARM',
//   price: 200,
//   getPrice,
//   getName,
// };
// prod3
//   .getName() // prod3
//   .getPrice(); // prod3.getPrice()

// * Потеря контекста
// const prod4 = {
//   name: 'ARM',
//   price: 200,
// };
// вызывают функцию
// getPrice.call(prod4, '*');  // аргументы передаются через запятую
// getPrice.apply(prod4, ['/']) // аргументы в виде массива

// const getPriceBind = prod4.getPrice.bind(prod4, '*'); // возвращает функциюб, но с привязанным контекстом
// console.log(getPriceBind);
// setTimeout(getPriceBind, 1000);

// setTimeout(prod4.getPrice, 1000);

// ** ---- Arrow function (Стрелочные функции) ----
/* ------------------------------------------------ */
// * Первый вариант объявления стрелочных функций
/* const plus = (x = 0, y = 0) => x + y; // если нужно выполнить только одно действие
plus(1, 2); // вызываем также, как и обычную функцию
// две эквивалентные функции
function plusFoo(x, y) {
  return x + y;
} */
// * Второй вариант объявления стрелочных функций (если нет аргументов)
/* const withoutAge = () => console.log('Hello world');
// (если 1 аргумент)
const sifnaleArg = (x) => x * 2;

// * Если нужно описать больше, чем 1 строку
const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
}; */
// * Использование стрелочной функции для того, чтобы вернуть объект
/* const returnObj = (str = '') => {
  return {
    value: str,
    length: str.length,
  };
};
// как вернуть объект
const returnObj1 = (str = '') => ({
  value: str,
  length: str.length,
});

// Отличия стрелочных и обычных функций
// * 1
function plusFoo(x, y) {
  console.log(arguments);
  return x + y;
}
// plusFoo(1, 3, 4, 5, 'Hi'); */

// * Струлочные функции не имеют собственного контекста this, берут из контекста на уровень выше
/*const obj = {
  firstName: 'Denis',
  age: 30,
  getFirstName() {
    console.log(this.firstName);
  },
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this.age);
    setTimeout(() => console.log(this));
  },
};
// obj.getAge();
// obj.getAgeArrow(); */

// ** -------- ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВОВ --------
/* ------------------------------------------------ */
/* const users = [
  {
    _id: '56765456ff876re567ujhgfder567u',
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 20,
    name: 'Valencia Carrillo',
    gender: 'male',
    company: 'XEREX',
    email: 'text@mail.ru',
    phone: '+7 (964) 655-3443',
    registered: '2014-02-14T11:45:27 -02:00',
  },
  {
    _id: '8765dfgy7uyrd5678igfder67ftr67',
    index: 1,
    isActive: true,
    balance: 2608.48,
    age: 28,
    name: 'Woodward Grimes',
    gender: 'male',
    company: 'FORTEAN',
    email: 'Woodward@mail.ru',
    phone: '+7 (968) 578-6346',
    registered: '2015-07-17T21:45:27 -01:00',
  },
  {
    _id: '76587tyghi87yjo87ythjku8y7yhio',
    index: 2,
    isActive: true,
    balance: 2098.87,
    age: 32,
    name: 'Lucile Finley',
    gender: 'female',
    company: 'ZOXY',
    email: 'Lucile@mail.ru',
    phone: '+7 (988) 544-0087',
    registered: '2017-09-19T22:45:27 -01:00',
  },
]; */

// *forEach - перебор массива, принимает callback
/* users.forEach(user => {
  console.log(user.index * 2);
});*/

// *filter - фильтрует массив
/* const userLess30 = users.filter(user => user.age < 30);
console.log(userLess30);

const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);*/

// *map - возвращает новый массив, основываясь на результате вызова callback
/* // const userName = users.map(user => user.name);
const userName = users.map(user => ({name: user.name, age: user.age}));
console.log(userName);*/

// *reduce - разворачивает массив наоборот, помогает формировать структуры (например, из [] в {})
/*const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0); // acc - переменная, в которой будет храниться результат предыдущей итерации, принимает стартовое значение
// console.log(totalBalance);
const usersObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc;
}, {});
console.log(usersObj);*/

// *some/ every - позволяют проверить есть ли в массиве (true || false, если в массиве 1 элемент удовлетворяет условию в callback / если все элементы массива удовлетворяют условию)
/*const isMale = users.some(user => user.gender === 'male');
const isAllMale = users.every(user => user.gender === 'male');
const isAll18 = users.every(user => user.age > 18);
console.log(isAll18); */

// *sort - сортировка (меняет исходный массив)
/* const strArr = ['Denis', 'Ekaterina', 'Ilya', 'Bill', 'Anna'];
strArr.sort();
const numArr = [10, 7, 44, 32];
numArr.sort((prev, next) => prev - next);
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users); */

// *find - для поиска элемента в массиве
/*const user = users.find((user) => user.name === 'Lucile Finley');
console.log(user);*/

// ** ------------- МЕТОДЫ ОБЪЕКТОВ ---------------
/* ------------------------------------------------ */

// *Копирование объекта (поверхностное(неглубокое) и глубокое копирование вложенных объектов)

/*let obj1 = {
  name: 'Ekaterina',
  info: {
    skills: ['html', 'css', 'js'],
  },
};
let obj2 = {
  name: 'Ivan',
  age: 20,
};

// *Поверхностное копирование
// let newObj1 = obj1; // (создается ссылка на объект, newObj будет ссылаться на объект obj1)
let newObj = Object.assign({}, obj1, obj2);
newObj = Object.assign({}, obj1); // (newObj.info === obj1.info) true, так как с вложенными эл надо использовать глобальное копирование
// console.log(newObj);

// *Глубокое копирование JSON
let newObjJson = JSON.parse(JSON.stringify(obj1));
// console.log(newObjJson);

// *получение ключей объекта
let keys = Object.keys(obj2).map((item) => item + '!');
// console.log(keys);
// *получение значений объекта
let values = Object.values(obj2);
// console.log(values);

// *возвращает массив массивов, где каждым элементом является пара [ключ: значение]
let entries = Object.entries(obj1);
// console.log(entries);
// *
let fromEnrties = Object.fromEntries([
  ['a', 'value'],
  ['b', 'value'],
]);
// console.log(fromEnrties);*/

// ** ------------- ДЕСТРУКТУРИЗАЦИЯ --------------
/* ------------------------------------------------ */

// const user = {
//   firstName: 'Ekaterina',
//   lastName: 'Lapshina',
//   age: 31,
//   info: {
//     work: 'EasyCode',
//     skills: ['html', 'css', 'js'],
//   },
// };

// const { firstName: name, lastName, age = 30 } = user;
// console.log(name, age);

//* Как получить вложенный объект
// const {
//   info: { work, skills },
// } = user;
// console.log(skills);

//* Деструктуризация массивов
// const colors = ['white', 'black', 'red'];

// const [white, b, red, g = 'green'] = colors;
// console.log(white, b, red, g);

// const names = ['Denis', 'Anna', 'Ivan', 'Maksim'];
// const [, name2, , name4] = names
// console.log(name2);
// const nestedArr = ['hello world', ['a', 'abc']];
// const [, [key, value]] = nestedArr;
// console.log(key, value);

// rest
// const names = ['Denis', 'Anna', 'Ivan', 'Maksim'];
// const [name1, ...otherNames] = names
// console.log(name1, otherNames);

/* ------------------------------------------------ */
/*function calcValues(a, b) {
  return [
    a + b,
    undefined,
    a * b,
    a / b,
  ]
}
const [sum, sub = 'No' , mult, ...other] = calcValues(42, 10) // самый удобный концепт
// const sum = result[0];
// const sub = result[1];
// const [sum, sub] = result
console.log(sum, mult, other, sub);*/

/*const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Russia',
    city: 'Moscow'
  },
}

// const {
//   name: firstName, 
//   age, 
//   car = 'No',
//   address: {city, country}
// } = person;
// console.log(firstName, age, car, city);

const {name, ...info} = person;
console.log(name, info);*/

/*const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Russia',
    city: 'Moscow'
  },
}
function logPerson ({name, age}) {
  console.log(name + ' ' + age);
}
logPerson(person);*/

/*let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  if (Object.keys(salaries).length !== 0) {
    let max = 0;
    let maxName = null;

    for (let [key, value] of Object.entries(salaries)) {
      if (max < value) {
        max = value;
        maxName = key;
      }
    }
    return maxName;
  }
  return null;
}
console.log(topSalary(salaries));*/

// ** -------------- SPREAD и REST ----------------
/* ------------------------------------------------ */
//* SPREAD - разворачивает массивы или объекты, служит, в основном, для создания новых массивов или объектов, или для транформации в более удобные типы данных
//* REST - собирает все параметры, либо в массив (что часто встречается в функциях), либо в объектах все остальные поля
/*const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];
const citiesEurope = ['Берлин', 'Прага', 'Париж'];

//* Оператор Spread с массивами
// разворачивает массив в строку
console.log(...citiesRussia);

const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope];
console.log(allCities); */

/*const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3,
}

const citiesEuropeWithPopulation = {
  Moscow: 26,
  Berlin: 10,
  Praha: 3,
  Paris: 2,
}
//* Оператор Spread с объектами
console.log({...citiesRussiaWithPopulation});
const allCitiesWithPopulation = {...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation}
console.log(allCitiesWithPopulation);*/

//* Практическое применение
/*const num = [5, 37, 42, 17]
console.log(Math.max(...num));
// Раньше
console.log(Math.max.apply(null, num));

const dives = document.querySelectorAll('div');
const nodes = [...dives];
console.log(dives, Array.isArray(dives));
console.log(nodes, Array.isArray(nodes));*/

//* Оператор Rest (отличие в области применения)
/*const sum = (a, b, ...rest) => {
  console.log(rest);
  return a + b + rest.reduce((acc, item) => acc + item, 0);
}
const numbers = [1, 2, 3, 4, 5, 8, 0];

// !Spread
console.log(sum(...numbers)); */

// const numbers = [1, 2, 3, 4, 5, 8, 0];

// const a = numbers[0];
// const b = numbers[1];
// console.log(a, b);
// Более короткая запись (диструктуризация)
// const [a, b, ...other] = numbers;
// console.log(a, b, other);

/*const persone = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'Russia',
}
const {name, age, ...address} = persone
console.log(name, age, address);*/

// ** -------------- MAP и SET ----------------
/* ------------------------------------------------ */
//* MAP (Ассоциативный массив) - коллекция пар ключ-значение (преимущества: ключем модет быть все, что угодно (включая объекты и, даже, другие объекты MAP), является итерируемым объектом (for of))
//* SET (Множество) - коллекция уникальных значений, так называемое «множество»

//! MAP -------------------------------------

/*const map = new Map([
  // ['Hi', 'Привет'],
  // [42, 'Сорок два'],
  // [true, false],
  // [{}, 'Объект'],
  // [function() {}, 'Функция'],
]);*/

/*//TODO: Добавление значений
map.set(42, 'Сорок два');
map.set('42', 'Сорок два');

console.log(map);

//TODO: Посмотреть кол-во элементов (размер)
console.log(map.size); // 2

//TODO: Получить знаяение
console.log(map.get(42)); // Сорок два
console.log(map.get(46)); // undefined

//TODO: Проверить наличие значения
console.log(map.has(42)); // true
console.log(map.has(46)); // false

//TODO: Удалить значение
map.delete('42');
console.log(map, map.size);

//TODO: Удалить все значения
map.clear();
console.log(map, map.size);*/

//TODO: Получение доступа к элементам
/*map
.set('HTML', 'HyperText Markup Language')
.set('CSS', 'Cascading Style Sheets')
.set('JS', 'JavaScript');

// console.log([...map.keys()]);
// console.log([...map.values()]);
// console.log([...map.entries()]);

// const [ [ key, value ], second, third] = map;
// console.log(key, value, second);

//TODO: Создает копию
// const mapCopy = new Map(map.entries());
// console.log(mapCopy);

//TODO: Перебор MAP
// for (const [key, value] of map) {
//   console.log(`key: ${key} \n value: ${value}`);
// }

map.forEach((value, key, map) => console.log(map, `\n key: ${key} \n value: ${value} \n`));*/

//! SET -------------------------------------

/*const set = new Set(
  // ['button', 'active', 'small']
  // 'button'
);*/
// const setCopy = new Set(set);
// console.log(set, setCopy);

//TODO: Добавление значений
// set
// .add('button')
// .add('active')
// .add('active')

// console.log(set);

//TODO: Посмотреть кол-во элементов (размер)
// console.log(set.size);

//TODO: Проверить наличие значения
// console.log(set.has('button')) // true
// console.log(set.has('primary')); // false

// --------------------------------------------
/*set.add({ className: 'button' })
console.log(set.has({ className: 'button' })) // false

// решение проблемы выше
const buttonRef = { className: 'button' };
set.add(buttonRef);
console.log(set.has(buttonRef)); // true*/

//TODO: Удалить значение
// set.delete('button');
// console.log(set);

//TODO: Удалить все значения
// set.clear();
// console.log(set);

//TODO: Получение доступа к элементам
// console.log([...set]);
// console.log(Array.from(set));
// console.log(...set.values());
// console.log(set.keys()); // У SET нет такого понятия, как ключ, поэтому возвращается значение
// console.log(set.entries());

//TODO: Перебор SET
// for (const item of set) {
//   console.log(item);
// }

// set.forEach((item, item2, set) => console.log(set, `\n item: ${item} \n item 2: ${item2} \n`));

// ** -------------- Дата и Время ----------------
/* ------------------------------------------------ */
// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2)
// console.log(date);

//* Получение компонентов даты

/*console.log('Год:', date.getFullYear());
console.log('Месяц:', date.getMonth());
console.log('День:', date.getDate());

console.log('Год UTC:', date.getUTCFullYear());
console.log('Месяц UTC:', date.getUTCMonth());
console.log('День UTC:', date.getUTCDate());

console.log('Час:', date.getHours());
console.log('Минуты:', date.getMinutes());
console.log('Секунды:', date.getSeconds());
console.log('Миллисекунды:', date.getMilliseconds());

console.log('Час UTC:', date.getUTCHours());

console.log('День недели (вс ( 0 ) - сб ( 6 )):', date.getDay());

console.log('Количество миллисекунд, прошедших с 1 января 1970 года:', date.getTime());
console.log('Возвращает разницу в минутах между UTC и местным часовым поясом:', date.getTimezoneOffset());*/

//* Установка компонентов даты

// console.log(date.setHours(0));

/*const getWeekDay = (date) => {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',];

  return days[date.getDay()];
}
let date = new Date(); // 3 января 2012 года
console.log( getWeekDay(date) ); // нужно вывести "ВТ"*/

/*const getLocalDay = (date) => {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}
let date = new Date(2012, 0, 8);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2*/

/*const getDateAgo = (date, days) => {

}
let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)*/

// ** --------------- Prototype -------------------
/* ------------------------------------------------ */
/*const person = {
  name: 'Maxim',
  age: 25,
  greet: function() {
    return 'Greet'
  },
}
console.log(person.toString()); // ошибки нет, тк у прототипа есть функция toString()
console.log(person.sayHello()); // ошибка TypeError, тк функция не определена в объекте*/

/*const person = new Object({
  name: 'Maxim',
  age: 25,
  greet: function() {
    return 'Greet';
  },
})

Object.prototype.sayHello = function() {
  return 'Hello';
}
console.log(person.sayHello());

const lena = Object.create(person);
lena.name = 'Elena';

console.log(lena);
console.log(lena.greet());*/

// const str = new String('I am string');

//* Нативный, встроенный объект Date
// const myDate = new Date();

/*function Auto(brand, price, gas) {
  this.brand = brand;
  this.price = price;
  this.gas = gas;
  this.discount = '20%';
}

Auto.prototype.drive = function() {
  if (this.gas > 0 && this.gas > 20) {
    this.gas = this.gas - 20;
    return this.gas;
  } else {
    return 'Бензин закончился';
  }
}
Auto.prototype.discount = '70%';

Auto.prototype.info = function() {
  return `Стоимость ${this.brand} = $${this.price}`;
}

const bmw = new Auto('bmw', '100.000', 100);
const nissan = new Auto('nissan', '70.000', 30);
console.log(bmw.info());
console.log(nissan.drive());

const cars = ['toyota', 'tesla'];
const numbers = [1, 2, 3]*/

/*let user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ')
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__:user,
  isAdmin: true,
};

admin.fullName = 'Alice Cooper';
console.log(user);
console.log(admin);*/

/*let head = {
  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};

console.log(pockets.glasses);*/

/*class Samurai {
  constructor(name) {
    this.name = name
  }
  hello() {console.log(this.name);}
}
let shogun = new Samurai('Dimych')
console.log('ONE:', shogun.__proto__.__proto__ == Object.prototype);
console.log('TWO:', shogun.__proto__.constructor.__proto__ == Function.prototype);
console.log('THRY:', shogun.__proto__.__proto__.__proto__ == null);*/

// ** ------------ Конструктор, new ---------------
/* ------------------------------------------------ */
// Функция конструктор (первая буква - большая букваб существительное), служит для однотипных объектов
/*function Dog(name) {
  // let this = {} (неявно)
  this.name = name;
  this.voice = function() {
    return `Hey, my name is ${this.name}`;
  }
  // return this (неявно)
}
const dog = new Dog('Laika')
const dog2 = new Dog('Bobik');

console.log(dog.voice());
console.log(dog2.voice());*/

/*function Calculator() {
  this.read = function() {
    this.a = +prompt('Введите значение', 0);
    this.b = +prompt('Введите значение 2', 0);
  }

  this.sum = function() {
    return this.a + this.b;
  }

  this.mul = function() {
    return this.a * this.b;
  }
}

let calculator = new Calculator;
calculator.read();

alert('Sum = ' + calculator.sum());
alert('Mul = ' + calculator.mul());*/

/*function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Введи значние:', 0);
  }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value)*/

// ** ----------------- Классы --------------------
/* ------------------------------------------------ */
/*function Car(brand, color) {
  this.brand = brand;
  this.color = color;
}
Car.prototype.start = function () {
  return `${this.brand} - start!`
}
Car.prototype.stop = function () {
  return `${this.brand} - STOP!`
}
const tesla = new Car('Tesla', 'silver');
const nissan = new Car('Nissan', 'red');
console.log(tesla.start());
console.log(nissan);*/

// *Переделка предыдущей функции конструктор в класс

/*//* объявление класса
class Car {
  // ...
}

//* выражение класса
const Car = class {
  // ...
}*/

/*class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  start() {
    return `${this.brand} - start!`
  }
  stop() {
    return `${this.brand} - STOP!`
  }
  static discount() {
    return `Общая скидка - 20%`;
  }
  // get и set - читать или добавлять значение
  set rating(value) {
    this.score = value.toUpperCase();
  }
  get rating() {
    return this.score;
  }
}

const tesla = new Car('Tesla', 'silver');
const nissan = new Car('Nissan', 'red');
tesla.rating = 'five'
console.log(tesla.rating);
console.log(nissan);*/

// *Дочернии классы
/*class Car {
  constructor(brand) {
    this.brand = brand;
    this.gasTank = 100;
    this.zapravka = [];
  }
  getGas() {
    this.gasTank += 10;
    const time = new Date();
    this.zapravka.push(time.toString());
    return this.gasTank;
  }
  drive() {
    this.gasTank -= 10;
    return this.gasTank;
  }
}
class HybridCar extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  autoPark() {
    return 'Автопарковка';
  }
}

const lexus = new HybridCar('Lexus', 'RX')
const nissan = new Car('Nissan')
console.log(lexus);
console.log(lexus.autoPark());
// console.log(nissan.autoPark()); работать не будет!
// console.log(lexus.drive()); работает, как и в род классе
console.log(nissan.drive());
console.log(nissan.drive());
console.log(nissan.getGas());
console.log(nissan.getGas());
console.log(nissan);*/

// ! Паттерн Декоратор
/*class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car';
  }
  getPrice() {
    return this.price;
  }
  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla';
  }
}
class Autopilot {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPrice() + 5000;
  }
  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}
class Parktronic {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPrice() + 3000;
  }
  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}
let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);
console.log(tesla.getPrice(), tesla.getDescription());

let tesla2 = new Tesla();
tesla2 = new Autopilot(tesla2);
console.log(tesla2.getPrice(), tesla2.getDescription());*/

// ** --- Контекст this (работа call, bind, apply) ---
/* ------------------------------------------------ */
/*function hello () {
  console.log('Hello', this);
}

const person = {
  name: 'Vlad',
  age: 29,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name} info`);
      console.log(`Name is ${this.name}`);
      console.log(`Age is ${this.age}`);
      console.log(`Job is ${job}`);
      console.log(`Phone is ${phone}`);
    console.groupEnd();

  }
}*/
// console.log(person.logInfo());

// const lena = {
//   name: 'Elena',
//   age: 21,
// }
// const fnLenaInfoLog = person.logInfo.bind(lena);
// fnLenaInfoLog('Frontend developer', '8-999-234-32-44');

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend developer', '8-999-234-32-44');
// fnLenaInfoLog();

// person.logInfo.call(lena, 'Frontend developer', '8-999-234-32-44');

// person.logInfo.apply(lena, ['Frontend developer', '8-999-234-32-44']); // только 2 параметра

// * Контекст в прототипе
/*const array = [1, 2, 3, 4, 5, 6, 7];

// function multBy (arr, n) {
//   return arr.map(item => item * n)
// }

Array.prototype.multBy = function(n) {
  return this.map(item => item * n);
}
console.log(array.multBy(3));*/

// *Call (context, ...args) - позволяет вызвать функцию, явно устанавливая this, список аргументов, ... позволяет передать перебираемый объект args
/*function sayHi() {
  return `Hi, my name is ${this.name}`;
}

let user = {name: 'John'};
let admin = {name: 'Admin'};

console.log(sayHi.call(user));
console.log(sayHi.call(admin));*/

/*function say(phrase) {
  return `${this.name}: ${phrase}`;
}

let user = {name: 'John'};
console.log(say.call(user, 'Hello'));*/

// *Apply (context, args) - позволяет вызвать функцию, явно устанавливая this, принимает в качестве аргументов псевдомассив args (переадресация вызова)
// let wrappper = function() {
//   return func.apply(this, arguments);
// }

//* Заимествование метода
// function hash() {
//   return [].join.call(arguments);
// }
// console.log(hash(1, 2));

//! Декоратор - это обертка вокруг функции, которая изменяет поведение последней. Основная работа по-прежнему выполняется функцией

// *1  this в классах и функциях-конструкторах является экземпляром класса, который создается с помощью new, и устанавливается в момент создания этого экземпляра
/*class Test {
  constructor(name) {
    // this = объекту, который мы создаем после объявления класса.
    // Устанавливается в момент вызова new
    this.name = name;
  }
}

const test = new Test('Имя, которое установится в поле name созданного объекта')
// Объект, который записался в test, во время создания
// экземпляра был в this класса Test, поэтому мы смогли установить его поле name*/

// *2  this в обычных функциях - контекст устанавливается в момент вызова функции - это "позднее связывание"
// *  если при вызове слева от названия функции нет точки, то контекстом функции является глобальный контекст window (use strict - undefined)
// *  если при вызове функции слева от названия есть точка, то контекстом функции будет являться объект, слева от точки
/*obj // <-- контекст функции
  .fn();
fn(); // контекст равен глобальному контексту (undefined в strict моде и window без него)*/

// ** [1] Если метод присвоить в переменную, вызвать функцию из этой переменной, контекст будет потерян, тк слева от точки при вызове ничего не будет
/*const obj = {
  fn() {
    console.log(this)
  },
};
obj.fn(); // obj

const fn = obj.fn;
fn() // глобальный контекст (undefined в strict моде и window без него)*/

// ** [2] Если обычную функцию, при вызове которой контекст был равен глобальному контексту, присвоить в объект, а затем вызвать как метод объекта, контекстом функции станет этот объект
/*function fn() {
  console.log(this);
}

fn(); // глобальный контекст (undefined в strict моде и window без него)

const obj = {};
obj.fn = fn;

obj.fn(); // obj*/

// ** [3] Если передать ссылку на метод в функцию и вызвать его внутри, то он будет вызван, как обычная функция, а не как метод объекта, поэтому контекст метода будет утерян
/*const someFn = (callback) => {
  callback(); // любая функция/метод, переданная сюда, будет вызвана без точки слева,
  // т.е. не от имени объекта. Это означает, что её контекст будет утерян
};

  const obj = {
  method: function() {
    console.log(this);
  },
  };

 someFn(obj.method) // this будет равен undefined при use strict и window без него*/

// Тем не менее мы можем избежать такого поведения, обернув вызов нашего метода в обычную или стрелочную функцию:

/*const someFn = (callback) => {
  callback();
    // Контекст все равно будет утерян, но утерян он будет у переданной функции,
    // т.е. у нашей функции-обертки

    // Вызов же метода в этой функции-обертке все равно делается через точку,
    // т.е. от имени объекта.

    // Благодаря этому, мы избегаем потери контекста
  };

  const obj = {
    method: function() {
      console.log(this);
    },
  };

 someFn(() => obj.method()); // this в методе будет равен obj
 someFn(function() { obj.method() }); // this в методе будет равен obj*/

// *3  this в стрелочных функциях, устанавливается в момент объявления функции - "раннее связывание". Это значит, что bind/apply/call не дадут никакого результата при вызове на стрелочной функции
/*const fn = () => console.log(this); // this должен быть глобальным контекстом
// (undefined в strict моде и window без него)
fn.call({
  name: 'новый контекст',
}); 
// Вызов через call должен принудительно привязать
//   новый контекст к функции, но тем не менее this все равно равен глобальному контексту
//  (undefined в strict моде и window без него)*/

// * Стрелочная функция не создает собственный контекст, а берет из внешнего лексического окружения

// ** [1] Если вы объявляете стрелочную функцию в глобальном контексте, то контекстом будет являтся глобальный контекст (window)
/*const fn = () => console.log(this);
const obj = {
  fn: () => console.log(this)
  // контекст создают только функции,
  //   поэтому даже если стрелочная функция сама является
  //   методом объекта (не обернутого в функцию),
  //   контекстом для этой функции будет глобальный контекст
  //  (undefined в strict моде и window без него)
};

fn(); // глобальный контекст (undefined в strict моде и window без него)
obj.fn(); // глобальный контекст (undefined в strict моде и window без него)*/

// ** [2] Если объявить стрелочную функцию внутри другой функции/метода, то контексом этой стрелочной функции будет контекст функции/метода, в котором стрел функц объявлена
/*const obj = {
  fn() {
    //  <-- стрелочная функция возьмет контекст этой функции,
      // а он равен obj, если вызывать ее через obj
    const arrowFn = () => console.log(this);
    arrowFn();
  },
};

obj.fn(); // obj*/

// ** [3] Исходя из пункта [1] и [2] можно сделать следующий совмещенный пример, чтобы глубже понять, как это работает:
/*const obj = {
  // <-- контекст метода fn будет равен obj,
  // если вызвать этот метод через точку (obj.fn1())
  fn1() {
    // <-- контекст стрелочной функции будет определен этой функцией,
    // т.к. она является ближайшей для него функцией
    return {
      fn2: () => {
        // функция возьмет контекст ближайшей внешней функции
        console.log(this);
      },
    };
  },
};

obj.fn1().fn2(); // this стрелочной функции = obj. fn1 возвращает внутренний объект,
// на котором вызывается метод fn2. Метод fn2 берет контекст ближайшей к нему функции -
// fn1, а та, в свою очередь, вызвана как метод объекта,
// значит ее контекстом и контекстом стрелочной функции будет obj*/

// *4  this в обработчиках событий addEventListener. Это редкий случай, но учтите, что this будет ссылаться на DOM элемент, на который вешали обработчик

// class Shape {
//   constructor (a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   square() {
//     return this.a * this.b;
//   }
// }
// class Rectangle extends Shape {
//   constructor(a, b) {
//     super(a);
//     super(b);
//   }
//   square() {
//     return this.a * this.b;
//   }
// }
// let box = new Shape(2, 3)
// console.log(box.square());

// ** --------- Флаги и дескрипторы свойств ---------
/* ------------------------------------------------ */
// * Флаги свойств: (помимо значения value, свойства объекта имеют 3 специальных аргумента)
/*
writable (если true - свойство можно изменить, иначе оно только для чтения)
enumerable (если true, свойство перечисляется в циклах, иначе цикл его игнорирует)
configurable (если true, свойство можно удалить, а эти атрибуты можно изменить, иначе этого делать нельзя)
*/

/*// МЕТОД Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName); // синтаксис
let descriptor = Object.getOwnPropertyDescriptor({name: 'Ekaterina'}, 'name');
console.log(JSON.stringify(descriptor));*/

// Object.defineProperty - изменяет флаги
// Object.defineProperty(obj, propertyName(имя свойств), descriptor(применяемый дескриптор)) // синтаксис
// ! Если свойство существует, то метод выше обновит его флаги. В противном случае метод создает новое свойство с указ. значением и флагом. Если флаг не указан явно - присваивается false
/*let user = {};
Object.defineProperty(user, 'name', {
  value: 'John'
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2)); // все флаги false*/

// *writable (только для чтения)
/*let user = {
  name: 'John'
}
Object.defineProperty(user, 'name', {
  writable: false
});
user.name = 'Pete'; // Ошибка, свойство не изменится
console.log(user);*/

// Тот же пример, но свойство создается с нуля
/*let user = {};
Object.defineProperty(user, 'name', {
  value: 'John',
  // для нового свойства необходимо явно прописыватьвсе флаги, для которых значени true
  enumerable: true,
  configurable: true
});
user.name = 'Pete'; // Ошибка
console.log(user);*/

// *enumerable (неперечисляемое свойство)
/*let user = {
  name: 'John',
  toString() {
    return this.name;
  }
};
Object.defineProperty(user, 'toString', {
  enumerable: false
});
// по умолчанию оба свойства выведутся
// если задать enumerable: false, то свойство пропадает из списка
for (const key in user) console.log(key);
// неперечисляемые свойства также не возвращаются Object.keys
console.log(Object.keys(user));*/

// *configurable (неконфигурируемое свойство)
// !configurable: false - не даст изменить флаги свойства, а также не даст его удалить. При этом можно изменить значение свойства
// предусмотрен для некоторых встроенных объектов и свойств. То есть программист не сможет изменить значение или перезаписать его.
/*let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
Math.PI = 1; // Ошибка
// Также нельзя изменить writable
Object.defineProperty(Math, 'PI', {
  writable: true
}) // Ошибка
console.log(JSON.stringify(descriptor, null, 2));*/

// МЕТОД Object.definePropertys - позволяет определить множество свойств сразу
/*Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  ...
});*/
/*let user = {};
let descriptor = Object.defineProperties(user, {
  name: {value: 'John', writable: false},
  surname: {value: 'Smith', writable: false},
  // ...
});
console.log(JSON.stringify(descriptor, null, 2));*/

// МЕТОД Object.getOwnPropertyDescriptors - чтобы получить все декораторы свойства сразу
// Вместе с Object.definePropertys этот метод можно использовать для клонирования объекта с его флагами
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

// ГЛОБАЛЬНОЕ ЗАПЕЧАТЫВАНИЕ ОБЪЕКТА
/*
Object.preventExtensions(obj) - запрещает добавлять новые свойства в объект
Object.seal(obj) - запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойтств
Object.freeze(obj) - запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств

МЕТОДЫ ДЛЯ ПРОВЕРКИ
Object.isExtensible(obj) - возвращает false, если добавление свойства запрещено, иначе true
Object.isSealed(obj) - возвращает true, если добавление/удаление свойства запрещено и для всех существующих свойств установлено configurable: false
Object.isFrozen(obj) - возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих ствойств установлено configurable: false, writable: false
*/

// ** -------- Свойства - геттеры и сеттеры --------
/* ------------------------------------------------ */
// Два типа свойств объекта
// 1 ТИП - это свойства-данные (data properties)
// 2 ТИП - это свойства-аксессры (accessor properties). По своей сути это функции, которые используются для присвоения и получения значения, но во внешнем коде они выглядят как обычные свойства объектов

// Свойства-аксессоры прдствлены методами: 'геттер' - для чтения, 'сеттер' - для записи
/*Синтаксис
let obj = {
  get propName() {
    // геттер, срабатывает при чтении obj.propName
  },
  set propName(value) {
    // сеттер, срабатывает при записи obj.propName = value
  }
}*/

/*let user = {
  name: 'John',
  surname: 'Smith',
  
  get fullName() {
    return `${this.name} ${this.surname}!`
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ')
  }
};
console.log(user.fullName);
user.fullName = 'Alice Cooper';
console.log(user.name);
console.log(user.surname);
console.log(user.fullName);*/

// ДЕСКРИПТОРЫ СВОЙСТВ ДОСТУПА
// Дескрипторы свойств-аксессоров отличаются от обычных свойств-данных
/*
get - функция без аргумента, которая сработает при чтении свойства
set - функция, принимающая 1 аргумент, вызываемая при чтении свойства
enumerable - то же самое, что и для свойств-данных
configurable - то же самое, что и для свойств-данных
*/

/*let user = {
  name: 'John',
  surname: 'Smith',
};
Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}!`;
  },
  set(value) {
    [this.name, this.surname] = value.split(' ');
  }
})
console.log(user.fullName);
for (const key in user) console.log(key);*/

// УМНЫЕ ГЕТТЕРЫ/СЕТТЕРЫ
// Геттеры/сеттеры можно использовать как обертки над "реальными" значениями свойств, чтобы получить больше контроля над опециями с ними

/*let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 3) {
      console.log('Имя слишком короткое, должно быть более 3 символов');
      return;
    }
    this._name = value;
  }
};
user.name = 'Pete';
console.log(user.name);

user.name = 'El';*/

// ИСПОЛЬЗОВАНИЕ ДЛЯ СОВМЕСТИМОСТИ
/*function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  })
}
let john = new User('John', new Date(1992, 6, 1));
console.log(john);
console.log(john.age);*/

// ** -------------- Методы прототипов (getters, setters) --------------
// ** ----- Объекты без свойств __proto__, объекты с Object.create -----
/* --------------------------------------------------------------------- */
/*
Object.create(proto, [descriptors]) - создает пустой объект со свойством [Prototype], указанным как proto, и необязательными дескрипторами свойств descriptors
Object.getPrototypeOf(obj) - возвращает свойсво [Prototype] объекта obj (то же самое, что и ГЕТТЕР __proto__)
Object.setPrototypeOf(obj) - устанавливает свойство [Prototype] объекта obj как proto (то же самое, что и СЕТТЕР __proto__)
 */
// let animal = {
//   eats: true,
// };

// новый объект с прототипом animal
/*let rabbit = Object.create(animal);

console.log(rabbit);
console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit
// console.log(Object.setPrototypeOf(rabbit, {})); // заменяем прототип объекта rabbit на {}*/

/*let animal = {
  eats: true
};
let rabbit = Object.create(animal, {
  jumps: {
    value: true,
  }
});
console.log(rabbit.jumps);*/

// Можно использовать Object.create для продвинутого клонирования объекта, более мощного, чем клонирование свойств в цикле for...in
// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
// Такой вызов создает точную копию объекта obj, включая все свойства: перечисляемые и неперечисляемые, геттеры/сеттеры для свойств - и все это с правильным свойством [Prototype]

// ПРОСТЕЙШИЙ ОБЪЕКТ
// let obj = {};
// let key = prompt(`What's the key?`, '__proto__');
// obj[key] = 'some value';

// alert(obj[key]);

// Если хотим использовать объект, как ассоциативный массив
/*let obj = Object.create(null);

let key = prompt(`What's the key?`, '__proto__');
obj[key] = 'some value';

alert(obj[key]);*/

// Недостаток в том, что у таких объектов не будет встроенных методов

// Большая часть методов связанных с объектами, имеют вид Object.something(...). Например, Object.keys(obj). Подобные методы не находятся в прототипе, так что они продолжают работать
/*let englishDictionary = Object.create(null);
englishDictionary.hello = 'Hi';
englishDictionary.goodbye = 'Bye';

console.log(Object.keys(englishDictionary));*/

// DESCRIPTORS, GETTER/SETTER
/*const person = Object.create(
  {
    calculateAge() {
      return this.age;
    }
  }, // прототип нового объекта person
  {
  name: {
    value: 'Ekaterina',
    enumerable: true,
    writable: true,
    configurable: true
  },
  birthYear: {
    value: 2003,
    enumerable: true,
    // writable: false,
    // configurable: false,
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear;
    },
    set(value) {
      console.log('Set age:', value);
    }
  }
});*/

/*person.name = 'Maxim';
person.birthYear = 1995;
delete person.name;
delete person.birthYear;
console.log(person);
for (let key in person) {
  console.log('Key:', key, person[key]);
}*/
/*person.age = 100;
console.log(person.age);
console.log(person.calculateAge());*/

/*for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('Key:', key, '\n', 'Value:', person[key]);
  }
  // console.log('Key:', key, '\n', 'Value:', person[key]);
}*/

// ** --- Классы (super, extends, static, get set) ---
/* ------------------------------------------------ */
// В ООП класс - это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения (свойства) и реализацию поведения (методы)

// Базовый синтаксис Class
/*class MyClass {
  // методы класса
  constructor() {}
  method1() {}
  method2() {}
  method3() {}
  // ...
}
const newClass = new MyClass;*/

/*class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, ${this.name}!`);
  }
}
let user = new User('Ivan');
user.sayHi();
console.log(typeof User); // function (класс - разновидность функции)
console.log(User === User.prototype.constructor); // true
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype)); // [ 'constructor', 'sayHi' ]
*/
// ! Методы в классе не разделяются запятой

// Говорят, что class - это синтаксический сахар (синтаксис для улучшения читаемости кода, но не делая ничего принципиально нового)

// Перепишем класс User на чистых функциях
// 1. Создаем функцию constructor
/*function User(name) {
  this.name = name;
}
// каждый прототип функции имеет свойство constructor по умолчанию
User.prototype.sayHi = function () {
  console.log(`Hi, ${this.name}!!`);
};
// Использование
let user = new User('Ivan');
user.sayHi();*/

// Важные отличия
// * [1] Функция, созданная с помощью class, помечена специальным внутренним свойством
// * [[IsClassConstructor]]: true
// * [2] В отличии от обычных функций, конструктор не может быть вызван без new
// * [3] Методы класса являются неперечисляемыми. Определение класса устанавливает
// * флаг enumerable в false для всех методов в 'prototype', это хорошо, тк
// * проходясь циктом for...in по объекту, обычно мы не хотим получать методы класса
// * [4] Классы всегда используют use strict. Весь код внутри класса автоматически находится в строгом режиме

// CLASS EXPRESSION
/*let User = class {
  sayHi() {
    console.log('Привет');
  }
}*/

// Named Class Expression (в спецификации нет такого термина, он происходит от function)
/*let User = class MyClass {
  sayHi() {
    console.log(MyClass);
  }
}
new User().sayHi(); // работает, выводит определение MyClass
console.log(MyClass); // ошибка, имя MyClass не видно за пределами класса*/

// Можно динамически создавать класс по запросу
/*function makeClass(phrase) {
  // объявляем класс и возвращаем его
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}
let User = makeClass('Привет!');
new User().sayHi();*/

// Геттеры/Сеттеры, другие сокрашения
/*class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 3) {
      console.log('Имя слишком короткое');
      return;
    }
    this._name = value;
  }
}
let user = new User('Ivan');
console.log(user.name);

user = new User('Эл');*/

// При объявлении класса геттеры/сеттеры создаются на User.prototype:
/*Object.defineProperties(User.prototype, {
  name: {
    get() {
      return this._name
    },
    set(name) {
      // ...
    }
  }
});*/

// const animal = {
//   name: 'Animal',
//   age: 5,
//   hasTail: true,
// }

/*class Animal {
  static type = 'ANIMAL'

  constructor(options) {
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }
  voice() {
    console.log('I am animal');
  }
}
const animal = new Animal({
  name: 'Animal',
  age: 5,
  hasTail: true,
})
console.log(animal);
animal.voice();

// Статические методы или переменнные (static) - доступна только у класса
console.log(Animal.type);

// Наследование
class Cat extends Animal {
  static type = 'CAT';

  constructor(options) {
    super(options)
    this.color = options.color
  }

  voice() {
    super.voice();
    console.log('I am cat');
  }

  get ageInfo() {
    return this.age * 9
  }
  set ageInfo(newAge) {
    this.age = newAge;
  }
}
const cat = new Cat({
  name: 'Cat',
  age: 3,
  hasTail: true,
  color: 'black'
})
console.log(cat);
cat.voice();
console.log(Cat.type);
console.log(cat.ageInfo);
cat.ageInfo = 5;
console.log(cat.ageInfo);*/

/*class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = 'none';
  }

  show() {
    this.$el.style.display = 'block';
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector)

    this.$el.style.width = this.$el.style.height = options.size + 'px';
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  color: 'red',
});

const box2 = new Box({
  selector: '#box2',
  size: 150,
  color: 'green',
});

class Circle extends Box {
  constructor(options) {
    super(options)

    this.$el.style.borderRadius = '50%';
  }
}

const c = new Circle({
  selector: '#circle',
  size: 150,
  color: 'yellow',
})*/

// ** ------ Обработка ошибок, 'try...catch' ------
/* ------------------------------------------------ */
/*try {
  console.log('Начало'); // выводится

  lalalala; // ошибка

  console.log('Конец'); // не выводится
} catch (error) {
  console.log('Возникла ошибка'); // выводится
}*/

/*try {
	alalala; // ошибка, переменная не определена!
} catch (err) {
	console.log(err.name); // ReferenceError
	console.log(err.message); // lalala is not defined
	console.log(err.stack); // ReferenceError: lalala is not defined (...стек вызовов)
	
	// Можно вывести ошибку целиком, приводится к строке "name: message"
	console.log(err);
}*/

/*try {
  JSON.console.log("{ некорректный json o_O }");
} catch(e) {
  console.log(e.name); // SyntaxError
  console.log(e.message); // Expected property name or '}' in JSON at position 2 (line 1 column 3)
}*/

// оператор throw
/*let json = '{ "age": 30 }';

try {
	let user = JSON.parse(json);
	
	if(!user.name) {
		throw new SyntaxError('Данные неполны: нет имени');
	}
	
	console.log(user.name);
} catch(err) {
	console.log('JSON Error: ' + err.message); // JSON Error: Данные неполны: нет имени
}*/

/*let json = '{ "age": 30 }';

try {
	let user = JSON.parse(json);
	
	if(!user.name) {
		throw new SyntaxError('Данные неполны: нет имени');
	}
	
	blabla();
	
	console.log(user.name);
} catch(err) {
	if (err.name == 'SyntaxError') {
		console.log('JSON error: ' + err.message);
	} else {
		throw err;
	}
}*/

/*window.onerror = function(message, url, line, col, error) {
	console.log(`${message} \n B ${line}:${col} на ${url}`);
};

function readData() {
	badFunc();
}

readData();*/