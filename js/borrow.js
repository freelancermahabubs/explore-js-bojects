const khodomAli = {
  name: 'KhodomAli',
  money: 5000,
  study: 'Maht',
  subjects: ['Calculus', 'algebra', 'geometry'],
  exam: function(){
    return this.name + 'is participatning in an exam';
  },
  improveExam: function(subject){
    this.exam();
    return ` ${this.name} is takeing improvement exam on ${subject}`
  },

  treatDey: function(amount, tips){
    this.money = this.money - amount - tips;
    return this.money;
  }
};

const result = khodomAli.exam();
const badamAli = {
  name: 'kacha badam',
  money: 8000
}
const result2 = khodomAli.exam.call(badamAli);
// console.log(result2)
const badamMoney = khodomAli.treatDey.call(badamAli, 400, 40);
// console.log(badamMoney);

const badamMoney2 = khodomAli.treatDey.apply(badamAli, [1000, 100]);
console.log(badamMoney2)

const badamAliTreat = khodomAli.treatDey.bind(badamAli);
const remaining =  badamAliTreat(1000, 100);
console.log(remaining);


