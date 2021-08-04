export {};

// [1, 'user']
let user: [number, string];
user = [1, 'frii'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.lenght', user[1].length);
console.log('id', user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'frii', true];
console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'frii']); // 0
array.push([2, 'danny']); // 1
array.push([3, 'mariza']); // 2
console.log('array', array);

// Uso de funciones Array
// mariza -> mariza002

array[2][1] = array[2][1].concat('002'); // mariza002
console.log('array', array);