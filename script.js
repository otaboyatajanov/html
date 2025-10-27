// 1 dan 10 gacha sonlarni chiqaring
// let son = 10
// for (let index = 1; index <= son; index++) {
//     console.log(index);
// }
// let i = 1
// while(i <= 10) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++
// }

// 10 dan 1 gacha kamayib chiqaring
// let son1 = 10
// for (let index = son1; index >= 1; index--) {
//     console.log(index);
// }

// let summa = 1
// let son = 10
// for (let index = 1; index <= son; index++) {
//     summa *= index
// }
// console.log(summa);

let son = 10;
let count = 0;
for (let i = 1; i <= son; i++) {
  if (i % 3 === 0) {
    count++;
  }
}

console.log(count);
