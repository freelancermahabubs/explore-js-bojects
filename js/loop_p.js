const bottle = {color: 'Yellow', price: '50', isCleaned: true, capacity: 1 };

// for(const key in bottle){
//   const value = bottle[key]
//   console.log(key, value)
// };

const pair = Object.entries(bottle);
for(const [key, value] of Object.entries(bottle)){
  console.log(key, value);
}
