// const students = {
//   name: 'Mahabub',
//   money: 5000,
//   study: 'Maht',
//   subjects: ['Calculus', 'algebra', 'geometry'],
//   exam: function(){
//     return this.name + 'is participatning in an exam';
//   },
//   improveExam: function(subject){
//     this.exam();
//     return ` ${this.name} is takeing improvement exam on ${subject}`
//   },

//   treatDey: function(amount, tips){
//     this.money = this.money - amount - tips;
//     return this.money;
//   }
// }
// const output = student.exam();
// console.log(output)
// const reExam = student.improveExam('Algebra');
// console.log(reExam)
// const remaining = student.treatDey(900, 100);
// console.log(remaining);

// const dolaRemaining = student.treatDey(500, 50);
// console.log(dolaRemaining);

const student = {
  name: 'Mahabub',
  class: '12th',
  session: 'A',
  studentDetails: function(){
    return this.name + " " + this.class + " " + this.session + " ";
  }
};
const outputs  = student.studentDetails();
console.log(outputs);