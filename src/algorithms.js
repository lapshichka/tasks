// !----------------------------------------------
// ! Бинарный поиск (Binary search) --------------
// !----------------------------------------------
/*function binarySearch (arr, target) {
  arr.sort();
  console.log(arr);

  let start = 0;
  let end = arr.length - 1;
  let mid;

  while(start <= end) {
    mid = Math.round((start + end) / 2);
    console.log('mid', mid);

    if (target === arr[mid]) {
      return mid + ' ' + arr[mid];
    } else if (target < arr[mid]) {
      console.log(`end = ${mid - 1}`);
      end = mid - 1;
    } else {
      console.log(`start = ${mid + 1}`);
      start = mid + 1;
    }
  }
  return -1;
}
// start                         // end
arr = [
  'Александр', 'Александра', 'Алексей', 'Алена', 'Алёна', 'Алина', 'Алиса', 'Анатолий', 'Андрей', 'Анна',
  'Антон', 'Аркадий', 'Артём', 'Артемий', 'Вадим', 'Валентин', 'Валентина', 'Валерий', 'Валерия', 'Варвара',
  'Василий', 'Вера', 'Вероника', 'Виктор', 'Виктория', 'Виталий', 'Влад', 'Владимир', 'Владислав', 'Галина',
  'Геннадий', 'Георгий', 'Григорий', 'Даниил', 'Дарья', 'Дмитрий', 'Евгений', 'Евгения', 'Екатерина', 'Елена',
  'Елизавета', 'Ефим', 'Зинаида', 'Иван', 'Игнат', 'Игнатий', 'Игорь', 'Илья', 'Инна', 'Ирина', 'Кирилл',
  'Клавдия', 'Константин', 'Кристина', 'Лариса', 'Лев', 'Леонид', 'Лидия', 'Любовь', 'Людмила', 'Максим',
  'Маргарита', 'Марина', 'Мария', 'Марк', 'Матвей', 'Михаил', 'Надежда', 'Наталья', 'Никита', 'Николай',
  'Оксана', 'Олег', 'Ольга', 'Павел', 'Пётр', 'Раиса', 'Роман', 'Руслан', 'Светлана', 'Сергей', 'София',
  'Станислав', 'Степан', 'Тамара', 'Татьяна', 'Тимофей', 'Тимур', 'Ульяна', 'Фёдор', 'Эдуард', 'Элеонора',
  'Элина', 'Элла', 'Эльвира', 'Эльза', 'Эмилия', 'Эмма', 'Юлия', 'Юлиан', 'Юлиана', 'Юлий', 'Юлияна', 'Юрий',
];
console.log(search(arr, 'Валентин'));*/

/*function recursiveBinarySearch (arr, target, start = 0, end = arr.length - 1) {
  let mid = Math.round((start + end) / 2);

  if (target === arr[mid]) {
    return mid;
  } 
  if (target < arr[mid]) {
    return recursiveBinarySearch(arr, target, 0, mid - 1);
  } else {
    return recursiveBinarySearch(arr, target, mid + 1, end)
  }
}
arr = [
  'Александр', 'Александра', 'Алексей', 'Алена', 'Алёна', 'Алина', 'Алиса', 'Анатолий', 'Андрей', 'Анна',
  'Антон', 'Аркадий', 'Артём', 'Артемий', 'Вадим', 'Валентин', 'Валентина', 'Валерий', 'Валерия', 'Варвара',
  'Василий', 'Вера', 'Вероника', 'Виктор', 'Виктория', 'Виталий', 'Влад', 'Владимир', 'Владислав', 'Галина',
  'Геннадий', 'Георгий', 'Григорий', 'Даниил', 'Дарья', 'Дмитрий', 'Евгений', 'Евгения', 'Екатерина', 'Елена',
  'Елизавета', 'Ефим', 'Зинаида', 'Иван', 'Игнат', 'Игнатий', 'Игорь', 'Илья', 'Инна', 'Ирина', 'Кирилл',
  'Клавдия', 'Константин', 'Кристина', 'Лариса', 'Лев', 'Леонид', 'Лидия', 'Любовь', 'Людмила', 'Максим',
  'Маргарита', 'Марина', 'Мария', 'Марк', 'Матвей', 'Михаил', 'Надежда', 'Наталья', 'Никита', 'Николай',
  'Оксана', 'Олег', 'Ольга', 'Павел', 'Пётр', 'Раиса', 'Роман', 'Руслан', 'Светлана', 'Сергей', 'София',
  'Станислав', 'Степан', 'Тамара', 'Татьяна', 'Тимофей', 'Тимур', 'Ульяна', 'Фёдор', 'Эдуард', 'Элеонора',
  'Элина', 'Элла', 'Эльвира', 'Эльза', 'Эмилия', 'Эмма', 'Юлия', 'Юлиан', 'Юлиана', 'Юлий', 'Юлияна', 'Юрий',
];
console.log(recursiveBinarySearch(arr, 'Виктор'));*/

// !----------------------------------------------
// ! Сортировка выбором (Selection sort) ---------
// !----------------------------------------------
/*function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++){
    // console.log('arr [i]:', arr);
    let minIndex = i;
    console.log('minIndex [i]:', minIndex);
    for (let j = i + 1; j < arr.length; j++) {
      // console.log('arr [j]:', arr);
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        // console.log('minIndex [j]:', minIndex);
      }
    }
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
const array = [
  // 108, 39, -112, 245, 233, 209, -216, -241, -358, -101, -330,
  // 14, -113, 42, 90, 428, -120, 91, 181, 287, -414, 274,
  // -76, 97, -334, -137, -452, 201, 228, -387, 284, -367, 156,
  // 396, -389, 497, -175, -247, 458, -214, 193, -499, -292, 91,
  // 236, 365, -483, -87, -56, 109, -89, -463, 333, 498, 313,
  // -167, 336, 478, 384, 397, 232, 31, -140, 474, 270, -115,
  // 214, 76, 173, -137, 445, -185, -435, 168, 149, -64, -319,
  // 434, -491, -320, -78, -438, 5, -133, 181, -290, 411, 243,
  // 24, -30, 175, -154, -153, 152, -71, -483, 32, 171, 75,
  // -5
  // 3, 8, 6, 5, 9, 28, 10, 2, 97, 86, 72, 12, 78, 91, 17, 4, 25, 1, 74, 0, 7, 14,
  4, 5, 2, 0, 3, 1
]
console.log(selectionSort(array));*/

// !----------------------------------------------
// ! Пузырьковая сортировка (Bubble sort) -------
// !----------------------------------------------
/*function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log('arr[i]:', arr);
    for (let j = 0; j < array.length; j++) {
    // console.log('arr[j]:', arr);
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const array = [
  // 3, 8, 6, 5, 9, 28, 10, 2, 97, 86, 72, 12, 78, 91, 17, 4, 25, 1, 74, 0, 7, 14,
  5, 1, 4, 2, 3, 0
]
console.log(bubbleSort(array));*/

// !----------------------------------------------
// ! Сортировка вставками (Insertion sort) -------
// !----------------------------------------------
/*function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log('arr [i]:', arr);
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
      console.log('arr [j]:', arr);
    }
    arr[j + 1] = temp;
  }
  return arr;
}
const array = [
  // 3, 8, 6, 5, 9, 28, 10, 2, 97, 86, 72, 12, 78, 91, 17, 4, 25, 1, 74, 0, 7, 14,
  5, 1, 4, 2, 3, 0
]
console.log(insertionSort(array));*/

// !----------------------------------------------
// ! Быстрая сортировка (Quick sort) -------------
// !----------------------------------------------
/*function quickSort (arr) {
  // if (arr.length <= 1) {
  //   return arr;
  // }
  // let pivot = arr[0];
  // console.log('pivot', pivot);
  // const less = arr.slice(1).filter(element => element <= pivot);
  // console.log('less', less);
  // const greater = arr.slice(1).filter(element => element > pivot);
  // console.log('greater', greater);

  // return quickSort(less).concat(pivot, quickSort(greater));

  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  const less = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (i === pivotIndex) {
      continue;
    } else if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i])
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}
const array = [
  3, 8, 6, 5, 9, 28, 10, 2, 97, 86, 72, 12, 78, 91, 17, 4, 25, 1, 74, 0, 7, 14,
  // 5, 1, 4, 2, 3, 0, 8
]
console.log(quickSort(array));*/

// !----------------------------------------------
// ! Обход в ширину (BFS) ------------------------
// ! -------------------- Breadth-First Search ---
// !----------------------------------------------
const graph = {
  a: ['b', 'c'],
  b: ['e'],
  c: ['b', 'd'],
  d: ['b']
}
function breadthSearch (graph, start, end) {
  let queve = [];
  queve.push(start);

  while (queve.length > 0) {
    const current = queve.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if(graph[current].includes(end)) {
      return true;
    } else {
      queve = [...queve, ...graph[current]]
    }
  }
}
console.log(breadthSearch(graph, 'a', 'e'));