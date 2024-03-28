// ** Функция, которая сравнивает 2 числа с определенной погрешностью
/* function compareWithPrecision(first, second, third) {
  let difference = Math.abs(Math.abs(first) - Math.abs(second));

  if (difference <= third) {
    return true;
  } else {
    return false;
  }
}
console.log(compareWithPrecision(-10.74, 7.2, 5)); */

// ** Функция возвращает строку, в которой первые буквы - ЗАГЛАВНЫЕ, остальные - строчные
/* function capitalize(str) {
  const register = str.toLowerCase();
  const words = register.split(' ');
  console.log(words);

  let result = '';
  for (let i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1) + ' ';
  }
  return result;
}
console.log(capitalize('sOme RanDoM sTRING')); */

// ** Функция возвращает строку, в которой каждое слово, которое содержит >5 симв - написана наоборот
/* function reverseLongWords(str) {
  str = str.split(" ");
  console.log(str, "\n");

  for (let i = 0; i < str.length; i++) {
    if (str[i].length >= 5) {
      str[i] = str[i].split("").reverse().join("");
    }
  }
  return str.join(" ");
}
console.log(reverseLongWords("Hye fellow warriors")); */

// ** Функция оборачивает строку в тег <p></p>
/* function wrapInParagraph(text) {
  // <p>Some</p>
  // <p>simple multiline</p>
  // <p>text</p>

  text = text.split('\n');
  console.log(text + '\n');

  for (let i = 0; i < text.length; i++) {
    text[i] = `<p>${text[i]}</p>\n`;
  }
  return text.join('');
}
const text = `Some
simple multiline
text`;
console.log(wrapInParagraph(text)); */

// ** Функция принимает строку, возвращает объект
/* function lettersCount(str) {
  str = str.toLowerCase();

  const obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}
console.log(lettersCount('aAAbbccde')); */

// ** Функция, которая вычисляет итоговуб оценку студента (тернарный оператор)
/* function finalGrade(exam, projects) {
  // выражение ? если true : выражение ? если true: если false;

  const result = exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0
  return result;
}
console.log(finalGrade(55, 0)); */

// ** Функция, которая принимает число, кратное 3; 5; 3 && 5 (тернарный оператор)
/* function fizzbuzz(num) {
  // выражение ? если true : выражение ? если true: если false;

  const str = num % 3 === 0 && num % 5 === 0
    ? 'FizzBuzz'
    : num % 5 === 0
    ? 'Buzz'
    : num % 3 === 0
    ? 'Fizz'
    : num
  return str;
}
console.log(fizzbuzz(5)); */

// ** Функция принимает 2 числа и арифметический оператор (switch)
/* function arithmetic(first, second, operator) {
  switch (operator) {
    case 'add':
      return first + second;
      break;

    case 'subtract':
      return first - second;
      break;

    case 'multiply':
      return first * second;
      break;

    case 'divide':
      return first / second;
      break;

    default:
      return NaN;
      break;
  }
}
console.log(arithmetic(5, 2, 'divide')); */

// ** Функция принимает только строку с откр и закр скобками (stack)
/* function areBracketsBalanced(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
    console.log(stack);
  }
  return stack.length === 0;
}
console.log(areBracketsBalanced('()())')); */

// ** Функция возвращает массив индексов элементов
/* function findAllIdx(arr, value) {
  let result = [];
  for (let i in arr) {
    if (arr[i] === value) {
      result.push(i);
    }
  }
  return result;
}
console.log(findAllIdx([1, 0, 1, 0, 0, 1], 0)); */

// ** Две функции, перебирают все элементы массива и заменяют нужный (1: возвращает новый массив; 2: возвращает входящий массив)
/* function replaceItemsClear(arr, item, replaceItem) {
  const newArr = arr.slice(0);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === item) {
      newArr[i] = replaceItem;
    }
  }
  return newArr;
}
console.log(replaceItemsClear([1, 2, 3, 4, 2], 2, 'a')); */

/* function replaceItemsMutate(arr, item, replaceItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr[i] = replaceItem;
    }
  }
  return arr;
}

const arr = [1, 2, 3, 4, 2];
console.log(replaceItemsMutate(arr, 2, 'a'));
console.log(arr); */

// ** Функция должна переставить n элементов массива из конца в начало
/* function moveToStart(arr, n) {
  const newArray = arr.slice(0);

  if (n >= newArray.length) {
    return newArray;
  }
  newArray.unshift(newArray.splice(-n));
  return newArray.flat();
}
console.log(moveToStart([1, 2, 3, 4, 5], 3)); */

// ** Функция, которая принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя, если нет - false
/* function hasArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return true;
    }
  }
  return false;
}
const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
console.log(hasArrays(data1)); */

/* function hasArrays(arr) {
  return arr.some((i) => Array.isArray(i));
}
const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
console.log(hasArrays(data1)); */

// ** Функция должна переставить n элементов массива из конца в начало
/* function getNumbersByParity(arr, str) {
  const newArr = [];

  switch (str) {
    case 'even':
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          newArr.push(arr[i]);
        }
      }
      return newArr;

    case 'odd':
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
          newArr.push(arr[i]);
        }
      }
      return newArr;

    default:
      return 'Так низя';
  }
}
const data = [2, 2, 2, 2, 1, 1, 1, 2, 3, 3, 4, 5, 8, 10];

console.log(getNumbersByParity(data, 'even')); // [2, 4, 6];
console.log(getNumbersByParity(data, 'odd')); // [1, 3, 5]; */

// ** Функция находит сумму последовательности целых чисел
/* function sequenceSum(begin, end) {
  let sum = begin;

  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  } else {
    sum += sequenceSum(begin + 1, end);
  }
  return sum;
}
const result = sequenceSum(4, 10);
console.log(result);*/

// ** Функция принимает массив или объект с учетом вложенности и считает количество строк
/*function getStringCount(obj) {
  let sum = 0;

  for (const i in obj) {
    if (typeof obj[i] == 'object') {
      sum += getStringCount(obj[i]);
    } 
    else if (typeof obj[i] == 'string') {
      console.log(obj[i]);
      sum += 1;
    }
  }
  return sum;
}
const obj = {
  first: '1',
  second: '2',
  third: 'false',
  fourth: ['anytime', '2', '3', 4],
  fifth: 'null',
};
const arr = [1, '3', ['2', [3, ['4', 5]]]];
console.log(getStringCount(obj));*/

// ** Функция принимает объект и массив, по которому надо пройти, чтобы получить значение
/*function optionalChaining(obj, arr) {
  if (obj[arr[0]] && arr.length == 1) {
    return obj[arr[0]];
  }
  else if (!obj[arr[0]]) {
    return undefined;
  }
  else {
  return optionalChaining(obj[arr[0]], arr.slice(1));
  }
}
const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!',
      },
    },
  },
};
console.log(optionalChaining(obj, ['a', 'b', 'c', 'd']));*/

// ** Реализовать функцию, которая принимает на вход массив и коллбэк, а возвращает массив, в котором 2 массива
/* function partition(array, callback) {
  const falseArray = [];
  const fullArray = [];
  let trueArray = [];

  if (callback === undefined) {
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        trueArray.push(array[i]);
      } else {
        falseArray.push(array[i]);
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        trueArray.push(array[i]);
      } else if (!callback(array[i])) {
        falseArray.push(array[i]);
      }
    }
  }

  fullArray.push(trueArray, falseArray);
  return fullArray;
}
const numbers = [0, 1, 2, {}, false, '', '0'];
const result = partition(numbers, (element) => element);
console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = partition(numbers, (element) => element > 3);
// console.log(result);

// const numbers1 = [0, 1, 2, {}, false, '', '0'];
// const result1 = partition(numbers1, (element) => element); //, (element) => element
// console.log(result1);

// const users = [
//   { user: 'barney', age: 36, active: false },
//   { user: 'fred', age: 40, active: true },
//   { user: 'pebbles', age: 1, active: false },
// ];
// const result2 = partition(users, (element) => element.active);
// console.log(result2); */

// ** Функция принимает функцию в качестве аргумента и возвращает новую функцию, которая возвращает аргумент (единожды)
/*function once(fn) {
  let end = false;
  return function () {
    if (!end) {
      end = true;
      return fn();
    }
  };
}

const f = () => console.log('hi');
const onceF = once(f);

onceF();
onceF();
onceF(); */

// ** Filter принимает функцию-коллбэк для фильтрации массива (замыкание)
// ! ПРИМЕР СОЗДАНИЯ СВОЕГО FILTER
/* function myFilter(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(myFilter(arr, (a) => a > 3)); */
// ! ---------------------------------------
// let arr = [1, 2, 3, '4', 5, '6', 7, true, undefined, NaN];
/* let arr = [2, 3, '4', 6, 9, 0, 'sds'];

arr = arr.map(function (item) {
  let num = parseInt(item);
  return isNaN(num) ? item : num;
}); */

/* function inRange(a, b) {
  return function (item) {
    if (item >= a && item <= b) {
      return true;
    }
  };
}
// console.log(arr.filter(inRange(3, 6))); */

/* function inArray(arg) {
  return function (item) {
    return arg.includes(item);
  };
}
// console.log(arr.filter(inArray([4 ,1, 2, 10, 11, undefined, 0]))); */

/* function notInArray(arg) {
  return function (item) {
    return !arg.includes(item);
  };
}
// console.log(arr.filter(notInArray([12, 'sds', 2, 6, 4, 0, 9, 10])));*/

// ** Функция которая принимает в качестве аргументов два числа, а возвращает следующий объект (this)
/* function createObjectCalculator(a, b) {
  function read(a, b) {
    this.a = a;
    this.b = b;
    return this;
  }

  const obj = {
    a,
    b,
    read,
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
  };
  return obj;
}
const calculator = createObjectCalculator(2, 3);
console.log(calculator);
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
calculator.read(12, 34);
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408 */

// ** Функция принимает массив объектов и ключ, возращает массив ключевых полей
/* function getField(arr = [], key = '') {
  return arr.map(item => item[key]);
}
const data = [
  {
    name: 'Denis',
    age: 25,
  },
  {
    name: 'Ivan',
  },
  {
    name: 'Ann',
    age: 18,
  },
];
console.log(getField(undefined, 'age'));*/

// ** Функция принимает массив пользователей, возвращает массив с новым полем username
/* function createUsernames(arr) {
  const date = new Date();
  const currentYear = date.getFullYear();

  arr.forEach(item => {
      (item.username =
        item.firstName.toLowerCase() +
        item.lastName[0].toLowerCase() +
        (currentYear - item.age))
  });
  return arr;
}
const data = [
  {
    firstName: 'Emily',
    lastName: 'N.',
    country: 'Ireland',
    continent: 'Europe',
    age: 30,
    language: 'Ruby',
  },
  {
    firstName: 'Nor',
    lastName: 'E.',
    country: 'Malaysia',
    continent: 'Asia',
    age: 20,
    language: 'Clojure',
  },
];

const processedData = createUsernames(data);
console.log(processedData); */

// ** Функция принимает массив заказов, а возвращает сумму их стоимости
/* function calculatePrice(data = 0) {
  if (!data) {
    return 0;
  } else {
    return data.reduce((acc, item) => (acc += item.price), 0);
  }
}
const data = [
  {
    type: 'food',
    price: 130,
  },
  {
    type: 'clothes',
    price: 7300,
  },
  {
    type: 'other',
    price: 1400,
  },
];
console.log(calculatePrice(data)); */

// ** Функция возвращает массив, содержащий самого старшего человека в списке
/* function getMostSenior(data) {
  const dataAge = data.map((item) => item.age);
  const maxAge = Math.max.apply(null, dataAge);
  return data.filter((item) => item.age === maxAge);
}
const data = [
  {
    firstName: 'Gabriel',
    lastName: 'X.',
    country: 'Monaco',
    continent: 'Europe',
    age: 49,
    language: 'PHP',
  },
  {
    firstName: 'Odval',
    lastName: 'F.',
    country: 'Mongolia',
    continent: 'Asia',
    age: 38,
    language: 'Python',
  },
  {
    firstName: 'Emilija',
    lastName: 'S.',
    country: 'Lithuania',
    continent: 'Europe',
    age: 19,
    language: 'Python',
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 49,
    language: 'PHP',
  },
];

const result = getMostSenior(data);
console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ] */

// ** Функция создает объект, состоящий из инвертированных ключей и значений объекта
/* function invert(obj) {
  let newObj = Object.assign({}, obj);
  return Object.fromEntries(
    Object.entries(newObj).map((item) => item.reverse())
  );
}
console.log(invert({ a: 1, b: 2, c: 3, c: 6, a: 10 })); */

// ** Функция проверяет на равенство два объекта, учитывая их вложенность
// 1. Если объекты:
// 1.1. Проходимя по объекту через for in
// 1.1.1. Если элемент - объект => рекурсия
// 1.1.2. Если не объект => сравнить значения
// 2. Примитивы
// 3. Частные случаи
/*function deepEquel(firstObj, secondObj) {
  if (
    typeof firstObj === 'object' &&
    typeof secondObj === 'object' &&
    firstObj !== null &&
    secondObj !== null
  ) {
    firstKey = Object.keys(firstObj);
    secondKey = Object.keys(secondObj);
    for (const key in firstObj) {
      if (
        typeof secondObj[key] !== 'undefined' &&
        firstKey.length === secondKey.length
      ) {
        if (!deepEquel(firstObj[key], secondObj[key])) {
          return false;
        }
      } else {
        return false;
      }
    }
  } else {
    if (firstObj !== secondObj) {
      return false;
    }
  }
  return true;
}
const firstObject = {
  a: {
    b: {
      c: 1,
      d: 'string',
      e: {
        num: 1,
      },
    },
  },
};

const secondObject = {
  a: {
    b: {
      e: {
        num: 1,
      },
      d: 'string',
      c: 1,
    },
  },
};
console.log(deepEquel(a, b)); // { a: 30, b: 's' }, { b: 's', a: 30 } firstObject, secondObject
*/

// ** Функция принимает неограниченное количество количество чисел в качестве аргументов, возвращает сумму
/*const sum = (...arg) => {
  if (arg.length) {
    arg = arg
      .map((item) => Number(item))
      .filter((item) => (!isNaN(item)));
    if (arg.length) {
      return arg.reduce((acc, item) => (acc += item));
    }
  }
  return 0;
};
// console.log(sum({}, {}, {}, {}));
// console.log(sum(1, 2, 3, 4, 5, 6)); // 21
// console.log(sum(-10, 15, 100)); // 105
// console.log(sum()); // 0
// console.log(sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false)); // 11*/

// ** Функция принимает неограниченное количество объектов в качестве аргументов, возвращает новый объект
/*const merge = (...args) => {
  return arg.reduce((acc, item) => {
    for (const key in item) {
      acc[key] = item[key];
    }
    return acc;
  }, {});
  // return Object.assign({}, ...args);
};
console.log(
  merge(
    {
      name: 'John',
      age: 22,
    },
    {
      surname: 'Klein',
      age: 20,
      profession: 'student',
    },
    {
      profession: 'frontend developer',
      country: 'USA',
    }
  )
);
// {
//   name: 'John',
//   surname: 'Klein',
//   age: 20,
//   profession: 'frontend developer',
//   country: 'USA',
// }*/

// ** Функция получает массив отзывов пользователей, необходимо вернуть объект в формате {название языка: число отзывов о языке}
/*const getLanguagesStatistic = (arr) => {
  return arr.reduce((acc, {language, year}) => {
    if (year == 2019) {
      acc[language] ? acc[language] += 1 : acc[language] = 1;
    }
    return acc;
  }, {});
};

const data = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
  { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
];

const result = getLanguagesStatistic(data);
console.log(result);
// { 
//   C: 1, 
//   JavaScript: 2 
// }*/

// ** Функция принимает массив, возвращает Map, где ключи - уникальные элементы в массиве, а значения - кол-во этих элементов (Map)
/*const getArraysCounts = (arr) => {
  const map = new Map();

  arr.forEach(element => {
    let count = map.get(element);
    map.set(element, count ? count + 1 : 1);
  });
  return map;
}
const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
const counts = getArraysCounts(data); // экземпляр Map
console.log(counts);
// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2*/

// ** Функция принимает массив, возвращает новый массив с уникальными значениями (Set)
/*const unique = (arr) => [...new Set(arr)];

const data1 = [1, 2, 3, 3, 4, 4];
console.log(unique(data1)); // [1, 2, 3, 4]

const obj = { name: 'John' };
const data2 = [obj, obj, obj, { name: 'John' }];
const result = unique(data2);
console.log(result); // [{ name: 'John' }, { name: 'John' }]

console.log(result[0] === obj); // true
console.log(result[1] === obj); // false*/

// ** Функция принимает две даты и возвращает кол-во полных дней между ними
// 1 минута - 60 сек
// 1 час - 3600 сек
// 1 день - 86400 сек
// 1 неделя - 604800 сек
// 1 месяц (30.44 дней) - 2629743 сек
// 1 год (365.24 дней) - 31556926 сек
/*const getDaysBetweenDates = (firstDate, secondDate) => {

  if (typeof firstDate !== 'object' && typeof secondDate !== 'object') {
    firstDate = new Date(firstDate);
    secondDate = new Date(secondDate);
  }

  let timestamp = Math.abs(firstDate.getTime() - secondDate.getTime());
  return Math.trunc(timestamp / (1000 * 3600 * 24));
}
console.log(getDaysBetweenDates('1-1-2020', '1-2-2020')); // -> 1
// console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))); // -> 366
// console.log(getDaysBetweenDates(1409796000000, 1409925600000)); // -> 1
// console.log(getDaysBetweenDates('1-1-2020', 'дата')); // -> NaN
// console.log(getDaysBetweenDates(null)); // -> TypeError*/

// ** Функция возвращает true, если у объекта нет свойств
/*function isEmpty(obj) {
  // если у объекта нет свойств (true), else(false)
  return Object.keys(obj).length == 0
}

const obj = Object.create(null);
// console.log(isEmpty(obj)); // true
// console.log(isEmpty({})); // true
// console.log(isEmpty({prop: 'value'})); // false

function isEmptyWithProtos(obj) {
  return typeof obj.__proto__ == 'object' && typeof Object.getPrototypeOf(obj) == 'object'
    ? Object.keys(obj).length == 0
      && Object.keys(Object.getPrototypeOf(obj).length == 0)
      && Object.keys(obj.__proto__).length == 0
    : Object.keys(obj).length == 0
  // console.log('объект:', obj);
  // for (const key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     return false;
  //   }
  // }
  // const proto = obj.__proto__;
  // for (const key in proto) {
  //   if (proto.hasOwnProperty(key)) {
  //     return false;
  //   }
  // }
  // const prototype = obj.prototype;
  // for (const key in prototype) {
  //   if (prototype.hasOwnProperty(key)) {
  //     return false;
  //   }
  // }
  // return true;
}

const protoObj = Object.create(null);
const obj1 = Object.create(protoObj);
const objPrototype = Object.create({sayHi: 'Hi'});
const propNull = Object.create(null);
propNull.prop = 'value'
console.log(isEmptyWithProtos(protoObj)); // true (Пустой объект без прототипа)
console.log(isEmptyWithProtos({})); // false (Пустой объект с прототипом Object.prototype)
console.log(isEmptyWithProtos(obj1)); // true (Пустой объект с пустым прототипом)
console.log(isEmptyWithProtos(objPrototype)); // false (Объект с прототипом со свойствами)
console.log(isEmptyWithProtos({name: 'Max'})); // false (Непустой объект)*/

// ** Функция для работы с книгами в библиотеке
/*class Book {
  constructor(name, author, year, reader) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.reader = reader;
  }
  isAvailable() {
    return !this.reader; // доступна ли книга для выдачи
  }
  takeBook(readerName) {
    if (!this.reader) {
      this.reader = readerName;
      return true; // выдача книги возможна и она выданан
    }
    return false; // книга уже выдана
  }
  returnBook() {
    if (!!this.reader) {
      this.reader = null;
      return true; // книга была на руках
    }
    return false; // книга в библиотеке
  }
  changeBookName(newBookName) {
    this.name = newBookName;
    return this.name == newBookName;
  }
  changeAuthorName(newAuthorName) {
    this.author = newAuthorName;
    return this.author == newAuthorName;
  }
  getCurrentReader() {
    return this.reader ? this.reader : null;
  }
}

const deadSouls = new Book('Мертвые души', 'Николай Васильевич Гоголь', 1842, 'Дмитрий');
const eugeneOnegin = new Book('Евгений Онегин', 'Александр Сергеевич Пушкин', 1823, 'Анна');
const idiot = new Book('Идиот', 'Федор Михайлович Достоевский', 1868, 'Ольга');
const warAndPeace = new Book('Война и мир', 'Лев Николаевич Толстой', 1865, null);
console.log('isAvailable: ' + deadSouls.isAvailable());
console.log('takeBook: ' + deadSouls.takeBook('Александр'));
console.log('changeBookName: ' + deadSouls.changeBookName('Горе от ума'));
console.log('changeAuthorName: ' + deadSouls.changeAuthorName('Александр Сергеевич Грибоедов'));
console.log(deadSouls);

console.log('isAvailable: ' + eugeneOnegin.isAvailable());
console.log('takeBook: ' + eugeneOnegin.takeBook('Александр'));
console.log(eugeneOnegin);

console.log('isAvailable: ' + idiot.isAvailable());
console.log('takeBook: ' + idiot.takeBook('Александр'));
console.log('returnBook: ' + idiot.returnBook());
console.log('returnBook: ' + idiot.returnBook());
console.log('getCurrentReader: ' + idiot.getCurrentReader());
console.log(idiot);

console.log('isAvailable: ' + warAndPeace.isAvailable());
console.log('takeBook: ' + warAndPeace.takeBook('Александр'));
console.log('getCurrentReader: ' + warAndPeace.getCurrentReader());
console.log(warAndPeace);*/

// ** Функция декоратор для прототипа класса, нужно добавить логирование, не меняя код класса
/*class Addition {
  constructor (num) {
    this.num = num;
  }
  
  add (...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }
};

function decorator(func) {
  return function(...nums) {
    console.log("called");
    return func.call(this, ...nums);
  }
}
let startedValue = new Addition(5);
Addition.prototype.add = decorator(Addition.prototype.add);

const result = startedValue.add(3, 5, 6) //В консоль выводится "called"
console.log(result) //В консоль выводится 19
const result1 = startedValue.add(3, 5, 6) //В консоль выводится "called"
console.log(result1) //В консоль выводится 19
const result2 = startedValue.add(3, 5, 6) //В консоль выводится "called"
console.log(result2) //В консоль выводится 19*/

// ** Функция с 2 параметрами (prototype, properties(optional)), вернет созданный объект с внутренним свойством [Prototype], установленным в знач. переданного арг. prototype (полифил)
/*Object.create = function(proto, propertiesObject) {
  if (arguments.length > 0 && (typeof proto === 'object' || proto == null)) {
    let obj = {};

    Object.setPrototypeOf(obj, proto);

    if (typeof propertiesObject === 'object') {
      Object.defineProperties(obj, propertiesObject);
    }

    return obj;
  }
  else {
    throw TypeError('Отсутствуют аргументы или prototype не вляется объектом или null')
  }
}

const A = {
  objectName: 'Object A',
  getObjectName: function() {
    return `This is ${this.objectName}!`;
  },
};
const B = Object.create(A, {
  objectName: {
    value: 'Object B',
  },
});
console.log(B);

A.getObjectName(); // This is Object A!
B.getObjectName(); // This is Object B!

A.hasOwnProperty('getObjectName'); // true
A.hasOwnProperty('objectName'); // true

B.hasOwnProperty('getObjectName'); // false
B.hasOwnProperty('objectName'); // true*/

// ** Класс личный счет, 2 класса для описания клиентов и для работы с банковским счетом частного лица
/*class Person {
  constructor(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  getAge() {
    return new Date().getFullYear() - new Date(this.birthDate).getFullYear();
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Account extends Person {
  static transfer(fromAccount, toAccount, amount) {
    // Переводит деньги с одного счета на другой
    fromAccount.withdrawMoney(amount, `Перевод ${toAccount.fullName}`);
    toAccount.addMoney(amount, `Перевод от ${fromAccount.fullName}`);
  }

  constructor(person, money) {
    super(person.firstName, person.lastName, person.birthDate);
    this.money = money;
    this.array = [];
  }
  addMoney(amount, description) {
    // Положить деньги на аккаунт с комментарием к переводу
    this.money += amount;
    this.array.push({
      timestamp: new Date().getTime(),
      target: 'in',
      amount: amount,
      description: description,
    });
  }

  withdrawMoney(amount, description) {
    // Вывести деньги с аккаунта с комментарием к переводу
    this.money -= amount;
    this.array.push({
      timestamp: new Date().getTime(),
      target: 'out',
      amount: amount,
      description: description,
    });
  }

  getAmount() {
    // Получить текущее состояние счета
    return this.money;
  }

  getAccountHistory() {
    // Возвращает массив с объектами
    return this.array;
  }
}

// const person = new Persone('Johannes', 'Helms', '1983-01-02');
// console.log(person);
// console.log(person.getAge());
// console.log(person.fullName);

const alex = new Person('Alexey', 'Petrov', '1994-05-22');
console.log(alex);
const alexAccount = new Account(alex, 1000);
console.log(alexAccount);
const helen = new Person('Helen', 'Smith', '1990-06-06');
console.log(helen);
const helenAccount = new Account(helen, 400);
console.log(helenAccount);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 100);
helenAccount.getAmount(); // 500
alexAccount.getAmount(); // 1700
alexAccount.getAccountHistory();*/

// ** Класс с методами sub / add / result
/*class Calc {
  constructor(immutableValue = 0) {
    this.immutableValue = immutableValue;
  }
  add(num) {
    const mutableValue = this.immutableValue + num;
    return new Calc(mutableValue);
  }

  sub(num) {
    const mutableValue = this.immutableValue - num;
    return new Calc(mutableValue);
  }
  result() {
    return this.immutableValue;
  }
}

const calc = new Calc();
console.log(calc.result()); // 0
console.log(calc.add(5).result()); // 0 + 5 = 5
console.log(calc.add(3).sub(10).result()); // 0 + 3 - 10 = -7

const ten = calc.add(10);
console.log(ten.sub(5).result()); // 10 - 5 = 5
console.log(ten.result()); // 10 */

// ** Транслятор событий, создать класс для управления событиями
/*// Не очень эффективное решение
class EventEmitter {
  constructor() {
    this.listeners = {};
    this.temp = {};
  }

  on(event, callback) {
    // добавить обработчик события
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  }

  off(event, callback) {
    // удалить обработчик события
    let deleteIndex = this.listeners[event].indexOf(callback);
    this.listeners[event].splice(deleteIndex, 1);
  }

  once(event, callback) {
    // добавиь обработчик события, который сработает единожды
    if (!this.temp[event]) {
      this.temp[event] = [callback];
    } else {
      this.temp[event].push(callback);
    }
  }

  emit(event, ...args) {
    // вызвать все обработчики события event, можно передать аргументы
    let res, resOnce;

    let fnOnce = this.temp[event];
    let fn = this.listeners[event];

    if (this.temp[event]) {
      resOnce = fnOnce.map((item) => item(...args));
    }
    if (this.listeners[event]) {
      res = fn.map((item) => item(...args));
    }

    delete this.temp[event];
    return resOnce && res ? [...res, ...resOnce] : resOnce ? resOnce : res;
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(event, ...args) {
    if (event == '*') {
      let res = [],
        resOnce = [];
      for (const key in this.listeners) {
        this.listeners[key].map((el) => res.push(el(...args)));
      }
      if (this.temp) {
        for (const key in this.temp) {
          this.temp[key].map((el) => resOnce.push(el(...args)));
        }
      }

      let key = Object.keys(this.temp);
      delete this.temp[key];
      if (resOnce) {
        return [...res, ...resOnce];
      }

      return res;
    }
  }
}*/

/*class EventEmitter {
  constructor() {
    this.stack = {};
  }
  on(eventName, callback) {
    const event = this.stack[eventName] || [];
    this.stack[eventName] = event;
    event.push(callback);
  }
  off(eventName, callback) {
    const event = this.stack[eventName];
    if (!event) return;
    let deleteIndex = event.indexOf(callback);
    if (deleteIndex != -1) event.splice(deleteIndex, 1);
  }
  once(eventName, callback) {
    const g = (...args) => {
      this.off(eventName, g);
      callback(...args);
    };
    this.on(eventName, g);
  }
  emit(eventName, ...args) {
    const event = this.stack[eventName];
    if (event) event.forEach((callback) => callback(...args));
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, ...args) {
    if (eventName == '*') {
      for (const key in this.stack) {
        super.emit(key, ...args);
      }
    } else {
      super.emit(eventName, ...args);
    }
  }
}*/

// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let h1 = document.querySelector('h1');

// let emitter = new EventEmitter();

// emitter.on('event:name-changed', data => {
//   h1.innerHTML = `New value is: ${data.name}`;
// });
// /*
// подписываемся на событие 'event:name-changed' и передаём обработчик вторым аргументом. Теперь при возникновении этого события, мы будем вызывать обработчик и обновим текст заголовка при возникновении этого события.
// */

// button.addEventListener('click', () => {
//   emitter.emit('event:name-changed', {name: input.value});
// });
// /*
// добавляем обработчик события 'клик' на кнопку. Этот обработчик производит событие 'event:name-changed' и вызывает все функции, подписанные на это события, передавая им строку из input.
// */

/*let emitter = new EventEmitter();
// EventEmitter.prototype.emit = decorator(EventEmitter.prototype.emit);

const multiplyTwo = (num) => num * 2;
const multiplyThree = (num) => num * 3;

const divideTwo = (num) => num / 2;
const divideThree = (num) => num / 3;

// Добавляем для события multiplication два обработчка
emitter.on('multiplication', multiplyTwo);
emitter.on('multiplication', multiplyThree);

// Вызываем событие multiplication, должны вызвать все обработчики для этого события - multiplyTwo и multiplyThree
console.log(emitter.emit('multiplication', 2));
// -> 4
// -> 6

// Удалим обработчик multiplyThree для события multiplication
emitter.off('multiplication', multiplyThree);

// Еще раз вызываем событие multiplication, теперь срабатывает только один обработчик multiplyTwo
console.log(emitter.emit('multiplication', 2));
// -> 4

// Создадим новое событие divideTwo и добавим два обработчика:
// divideTwo - срабатывает всегда, когда вызывается событие division (до тех пор, пока не удалим этот обработчик)
//  divideThree - сработает только ОДИН раз, во время первого ВЫЗОВА события division
emitter.on('division', divideTwo);
emitter.once('division', divideThree);

// Вызываем событие division - срабатывают обработчики divideTwo и divideThree
console.log('2 события (первый вызов)', emitter.emit('division', 6));
// -> 3
// -> 2

// Вызываем еще раз событие division - срабатывает ТОЛЬКО обработчики divideTwo
console.log('1 событие (второй вызов)', emitter.emit('division', 6));
// -> 3

// Вызываем еще раз событие division - срабатывает ТОЛЬКО обработчики divideTwo
console.log('1 событие (третий вызов)', emitter.emit('division', 6));
// -> 3

let broadcastEmitter = new BroadcastEventEmitter();

broadcastEmitter.on('multiplication', multiplyTwo);
broadcastEmitter.on('multiplication', multiplyThree);
broadcastEmitter.on('division', divideTwo);
broadcastEmitter.on('division', divideThree);
broadcastEmitter.once('division', divideThree);

// Вызываем все события (multiplication и division) => все обработчики для всех событий будут вызваны.
// Для события multiplication - вызовутся обработчики multiplyTwo и multiplyThree.
// Для события division - вызовутся обработчики divideTwo и divideThree.
console.log(broadcastEmitter.emit('*', 6));
console.log(broadcastEmitter.emit('*', 6));

// -> 12
// -> 18
// -> 3
// -> 2*/

// ** Функция переводит двумерный массив в CSV формат и возвращает строку O формата (csvGenerator)
/*const arraysToCsv = (data) => {
  try {
    let copyArr = [...data];

    copyArr.forEach((externalEl) => {
      externalEl.forEach((internalEl) => {
        if (typeof internalEl === 'string' || typeof internalEl === 'number') {
          if (typeof internalEl === 'string') {
            if (
              internalEl.includes(',') ||
              internalEl.includes(';') ||
              internalEl.includes('""')
            ) {
              copyArr[copyArr.indexOf(externalEl)][
                externalEl.indexOf(internalEl)
              ] = `"${internalEl}"`;
            }
          }
        } else {
          throw new SyntaxError('Unexpected value');
        }
      });
    });

    return `${copyArr.join('\n')}`;
  } catch (error) {
    if (error.name === 'SyntaxError') {
      throw `Error: ${error.message}`;
    }
    throw error; // проброс
  }
};

console.log(
  arraysToCsv([
    [1, 2],
    ['a', 'b'],
  ])
); // '1,2 a,b'
console.log(
  arraysToCsv([
    [1, 2],
    ['a,b', 'c,d'],
  ])
); // '1,2 "a,b","c,d"'
console.log(
  arraysToCsv([
    [
      function () {
        console.log(12);
      },
      2,
    ],
    [true, false],
  ])
); // '1,2 "a,b","c,d"'
console.log(
  arraysToCsv([
    [1, 2],
    ['a,b', 'c,d'],
  ])
); // '1,2 "a,b","c,d"'*/

// ** Функция увеличивает значение счетчика на 1 и обновляет данные в localStorage
/*localStorage.setItem('counters', JSON.stringify({ bannerClick: 5 }));

const incrementCounter = (counterName) => {
  let obj;
  try {
    obj = JSON.parse(localStorage.getItem('counters'));
  } catch (error) {
    obj = {};
  }

  if (obj[counterName]) {
    obj[counterName] += 1;
  } else {
    obj[counterName] = 1;
  }

  localStorage.setItem('counters', JSON.stringify(obj));

  return JSON.parse(localStorage.getItem('counters'))[counterName];
};

// в localStorage 1 счетчик: bannerClick = 5
console.log(incrementCounter('bannerClick')); // 6
console.log(incrementCounter('bannerClose')); // 1
// в localStorage 2 счетчика: bannerClick = 6, bannerClose = 1*/

// ** Функция getRepeatableData должна вызывать getData и обрабатывать ошибки по условию
/*class AttemptsLimitExceeded extends Error {
  constructor() {
    super('Max attempts limit exceed');
    this.name = 'AttemptsLimitExceeded';
  }
}

class NotFoundError extends Error {
  constructor() {
    super('Not found');
    this.name = 'NotFoundError';
  }
}

class TemporaryError extends Error {
  constructor() {
    super('TemporaryError');
    this.name = 'TemporaryError';
  }
}

function getRepeatableData(getData, key, maxRequestsNumber = Infinity) {
  console.log('hello' + key);
  try {
    return getData(key);
  } catch (error) {
    if (error.name === 'NotFoundError') {
      throw error;
    } else if (error.name === 'TemporaryError') {
      --maxRequestsNumber;
      if (maxRequestsNumber === 0) {
        throw new AttemptsLimitExceeded();
      } else {
        return getRepeatableData(getData, key, maxRequestsNumber);
      }
    }
  }
}

const getData = (key) => {
  if (key == 1) {
    throw new NotFoundError();
  }
  if (key == 2) {
    throw new TemporaryError();
  }

  return key;
};
console.log(getRepeatableData(getData, '2', 3));*/

// ** Функция возвращает объект с полями succeeded и errors, корректно обрабатывает ошибки
class ExecutionError extends Error {
  constructor(element) {
    super('ExecutionError');
    this.name = 'ExecutionError';
    this.element = element;
  }
  getArgData() {
    return this.element;
  }
}

function applyFn(dataArr, callback) {
  let arr = [];

  const obj = {
    succeeded: [arr],
    errors: [],
  };

  for (let i = 0; i < dataArr.length; i++) {
    try {
      arr.push(callback(dataArr[i]));
    } catch (e) {
      obj.errors.push(new ExecutionError(dataArr[i]));
    }
  }
  return obj;
}
const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
console.log(succeeded); // succeeded: [2, 3, 4],
console.log(errors); // errors: [],

// const dataArr = ['{"login":"login","password":"password"}', '{{}'];
// const callback = JSON.parse;
// const { succeeded, errors } = applyFn(dataArr, callback);
// console.log(succeeded); //   succeeded: [{ login: 'login', password: "password" }],
// console.log(errors); //   errors: [ExecutionError],
// console.log(errors[0].getArgData()); // '{}'
