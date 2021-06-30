/**
 * const, letの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は際宣言可能
// var val1 = "var変数を際宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可能
// let val2 = "ののんおん";

// const val4 = {
//   name: "あず",
//   age: 30
// };

// val4.name = "azusa";
// console.log(val4);

/**
 * テンプレート文字列
 */

// const name = "azu";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。${age}歳です。`
// console.log(message2);

/**
 * 分割代入
 */

// const myProfile = {
//   name: "azu",
//   age: 30
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}、${age}です。`;
// console.log(message2);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ななし") => console.log(`こんにちは${name}さん`);
// sayHello();

/**
 * スプレッド構文
 */

// // 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);
