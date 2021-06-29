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

const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (str) => str;
console.log(func3("returnいらいない"));

const func4 = (num1, num2) => {
  return num1 + num2;
};

console.log(func4(10, 20));
