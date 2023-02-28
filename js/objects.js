// create Object using object literals 
const player = {};
player.name = 'Mahabub';
player.specialty = 'Batsman';
player.bat = function(){
  console.log('swing your bat');
}
// console.log(player)
// player.bat()

const student = {

  name: 'Mahabub',
  job: "Web developer",
  ball: function(){
    console.log('throw the ball')
  },
  salary: 1000000,
};

// 2. object constructor
const person = new Object()
console.log(person)

// 3. object create method
// const item = Object.create(null);

const atel = Object.create(student);
console.log(atel.friend);

// 4. class
class Person {
  name = 'Abul';
  address = "Netrokona";
  constructor(age){
    this.age = age;
  }

}

const person1 = new Person(56);
console.log(person1);

// 5. Create Object by Function 
function Car(model, price){
  this.model = model;
  this.price = price
}
const tesla = new Car('elon', 32);
