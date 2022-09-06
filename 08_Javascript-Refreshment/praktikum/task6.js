let arr = [1.5, 2.56, 5.1, 12.33];

// Using forEach to round each value on "arr"
// arr.forEach((element) => console.log(Math.round(element)));

// Using map to round each value on "arr"
const newArr = arr.map((element) => Math.round(element));
console.log(newArr);
