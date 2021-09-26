//objects

let student = {
  first: 'Ana',
  last: 'Beatriz',
  age: 22,
  hair: 'aurburn',
  studentInfo: function(){
    return this.first + '\n' + this.last + '\n' + this.age;
  }
};
console.log(student)
console.log(student.studentInfo());

//

console.log(student);

student.first = 'notAna';
console.log(student.first)

//here i changed one part of the object

student.age++;
console.log(student.age)

//incremented one year on my age

