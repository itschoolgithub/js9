let arr = ['red', 'blue', 'yellow', 'blue'];
// arr[2] = 'green';
// arr[arr.length] = 'green';
arr.push('green');
arr.shift();
arr.unshift('black');
arr.pop();

// black, blue, yellow, blue
// console.log(arr.indexOf("red"));
// let found = arr.lastIndexOf("blue");
// if (found === -1) {
//     console.log('Элемент не найден');
// } else {
//     console.log('Элемент найден: под индексом ' + found);
// }

// console.log(arr.includes('red'));
// if (arr.includes('red')) {

// }

// arr.reverse();
// console.log(arr);

// console.log(arr.concat('pink', [1, 65, 37]));
// black, blue, yellow, pink, 1, 65, 37

// console.log(arr);

// console.log(arr.slice(0, 2));

// let months = ["January", "June", "July", "August", "April", "May", 7];

// let deletedMonths = months.splice(1, 3, "February", "March");
// months.splice(-1, 1);
// months.splice(months.length, 0, "June", "July", "August");
// console.log(months);

// console.log(deletedMonths); // "June", "July", "August"