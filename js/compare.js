// const first = {a: 5};
// const second = {a: 5};
// const third = second;

// if(third === second){
//   console.log('there are same');
// }
// else{
//   console.log('different')
// }

// do not use thi method to compare object or array
const first = {a: 5, b: 2, d: 5, c: 8};
const second = {a: 5, c: 5, b: 2};

// const fritString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// console.log(fritString, secondString);
// if(fritString === secondString){
//   console.log('same');
// }
// else{
//   console.log('diffrenet')
// }

function compareObject(first, second){
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if(firstKeys.length === secondKeys.length){
    for(const key of firstKeys){
      if(first[key] !== second[key]){
        return false;
      }
    }
    return true;
  }
  else{
    return false
  }
}

const isSame = compareObject(first, second);
console.log(isSame);