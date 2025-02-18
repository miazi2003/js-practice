// let frndStr = "rahim ,  fahim , karim , sahil";
// let frnd = frndStr.split(",")
// console.log(frnd)
// console.log(frnd[1])

// let real = "rahim ,  fahim , karim , sahil";
// let Real2 = real.split(",")
// console.log(Real2.join())
// console.log(Real2.join('-----'))
// console.log(Real2)

// let first = "abid";
// let last = "nabid";

// let fullName = first.concat(" ").concat(last);
// console.log(fullName)

// let sen = "i am a programmer";

// let reverse = ''
// for (const letter of sen ){
//     // console.log(letter)
//     reverse = letter + reverse
// }

// // console.log(reverse)

// let reversed = sen.split(' ').reverse().join(' ')

// console.log(reversed)

// let car = {
//     brand : "BMW",
//     model : 2017,
//     price : 2500000,
//     accelerate : function(){
//         console.log("speed up")
//     }
// }

// car.accelerate()

// function vatKhao(){
//     console.log("ppp")
// }
// vatKhao();

// function square (number){
// const borgo = number * number;
// console.log(borgo)
// }
// square(3);

// function doubleIt (number1 , number2){
//     const double = number1 - number2;
//     const doublei = double*2;
//     console.log(double , doublei)
// }

// let myAge = 22;
// let fAge = 59;
// doubleIt( fAge , myAge);

// function tenTimes(number){
//     const result = number * 10;
//     return result
// }
//  let bigNum = tenTimes(2);
//  console.log(bigNum)

// function isLeapYear(year){
//     if(year % 4 === 0){
//         return true
//     }
//     else {
//         return false
//     }
// }

// const year = isLeapYear(2024)
// console.log(year)

// function isLeapYear2(year){
//      if (year % 100 !== 0 && year % 4 === 0){
//         return true;
//      }
//      else if(year % 100 == 0 && year % 400 === 0){
//         return true
//      }
//      else {
//         return false
//      }
// }

// const year = isLeapYear2(2054)

// console.log(year)

function oddAvg(numbers) {
  let odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 13];
const avg = oddAvg(numbers);
console.log(avg);
