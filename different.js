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

// function oddAvg(numbers) {
//   let odds = [];
//   for (const number of numbers) {
//     if (number % 2 === 1) {
//       odds.push(number);
//     }
//   }
//   let sum = 0;
//   for (const number of odds) {
//     sum = sum + number;
//   }
//   const count = odds.length;
//   console.log(sum, count);
//   const avg = sum / count;
//   return avg;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 13];
// const avg = oddAvg(numbers);
// console.log(avg);









// remove duplicate elements from array


// const biriyaniKhor = [ "abul" , "kabul", "sabul" , "abul" , "sabul"]

// function removeDuplicate(array){
//     let unique = []
// for (const element of array){  
//     if(unique.includes(element) === false){
//         unique.push(element)
//     }
// }
// return unique
// }

// const remove = removeDuplicate(biriyaniKhor);

// console.log(remove);


// remove duplicate elements from array(finished);



// const min = Math.max( 1,5,4,5643,6,1,325346,346,346,2,34,1,-1 )

// console.log(Math.random()*20)

// const today = new Date();
// const todays = new Date( 2 0 9 1, 1 0 , 1 2 );
// todays.setMonth("10")
// console.log( todays.toLocaleString('en-GB'),todays.getHours());



// a4 1st prblm 


// function cashOut(money){

//     let cash = money * 1.75 / 100 

//     if(typeof money === 'number' && money > 0 ){
//         return cash
//     }
//     else {
//         return "invalid"
//     }
// }

// const cash = cashOut(2000)

// console.log(cash)

// a4 2nd prblm

// let jim = 1;
// let kim = 2 ;
// let mim = 3;

// let max = Math.max(jim,kim,mim)

// if (max == 1){
//     console.log("jim")
// }else if (max == 2){
//     console.log("kim")
// }
// else{
//     console.log("mim")
// }



// const h = [ 12,32,4,54,56,7];


// function getMax(numbers){
// let max = h[0]
// for (const num of numbers ){
// if(num > max){
//     max = num
// }
// }
// return max;
// }


// const max = getMax(h)
// console.log(max)

// function woodQuantity(chair , table , bed){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const allChairWood = chair * perChairWood;
//     const allTableWood = table * perTableWood;
//     const allBedWood = bed * perBedWood;

//     const totalWood = allChairWood + allTableWood + allBedWood ;
//     return totalWood;
// }

// const wood = woodQuantity(3,0,0)

// console.log(wood)


// let prices = [20000, 120934,354,1498]
// function getCheap(numbers){
//     let min = numbers[0]
//     for (const num of numbers ){
//         if(num < min){
//             min = num
//         }
//     }
//     return min;
// }

// const min = getCheap(prices)
// console.log(min)

const products = [
    {name : 'Shampoo', price : 300 , quantity : 2},
    {name : 'Comb', price : 500 , quantity : 4},
    {name : 'Shirt', price : 800 , quantity : 5},
    {name : 'Pant', price : 400 , quantity : 1},
]



function getAllTotal(products){
    let total = 0
    for ( const product of products){
        const allTotal = product.price * product.quantity
        total = total + allTotal
    }
    return total
    
}

const total = getAllTotal(products)

console.log(total)