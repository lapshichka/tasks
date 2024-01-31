// /**
//  * @typedef {Object} Answer
//  * @property {Date} date - дата, для которой подсчитано количество уникальных пользователей
//  * @property {number} users - количество уникальных пользователей
//  * 
//  * 
//  * @typedef {Object} Credentials
//  * @property {string | null | undefined} login - логин пользователя
//  * @property {string | null | undefined} password - пароль пользователя
//  * @property {Date} date - дата последнего логина
//  * 
//  * @param {Function} func  - произвольная функция, вызываемая для пользователей с присутствующим логином и паролем
//  * @return {(credentials: Credentials, ...args) => Answer[]} - результат подсчета количества уникальных пользователей для каждого дня
//  */
// function metrikaWrapper (func) {
//   console.log(func);

//   return function (credentials) {
//     if (typeof credentials.login === 'string' && typeof credentials.password === 'string') {
//       const key = `${credentials.login}:${credentials.password}`;

//       if (Object[key]) {
//         Object.users = 1;
//         Object.date = credentials.date;
//       }
//     }
//   }
// }
// const wrappedFunc = metrikaWrapper(() => (console.log('called')));

// console.log(wrappedFunc({ login: 'a', password: 'a', date: new Date('2023-06-28')}));

// console.log(wrappedFunc({ login: 'b', password: 'a', date: new Date('2023-06-28')}));

// console.log(wrappedFunc({ login: 'c', password: 'c', date: new Date('2023-06-28')}));
// // const wrappedFunc = metrikaWrapper(() => (console.log('called')));

// // console.log(wrappedFunc({ login: 'a', password: 'a', date: new Date('2023-06-28')}));

// // console.log(wrappedFunc({ login: NaN, password: 'a', date: new Date('2023-06-28')}));

// // console.log(wrappedFunc({ login: 'c', date: new Date('2023-06-28')}));