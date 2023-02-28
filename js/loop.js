const numbers = [12, 45, 65, 87, 51];
// for(const number of numbers){
//   console.log(number)
// }

// 1. for of  cna not used with objects
const bottle = {color: 'Yellow', price: '50', isCleaned: true, capacity: 1 };
// for(key of bottle){
//   console.log(key)
// }

// first option to loop through an object
 const keys = Object.keys(bottle);
//  console.log(keys)

/*
3 ways to read object properties
bootle.color
bootle['color']
bootle[key]

*/
// for(const key of keys){
//   console.log(key, bottle[key])
// };


for(const key in bottle){
  const value = bottle[key]
  // console.log(key, value)
}
// adnvance systme

const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
  console.log(key, value);
}
