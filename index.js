'use strict';
console.log('Hello World!');
//const day='Tuesday'//const คือห้ามเขียนทับ ได้ครั้งเดียว
let day='Monday';
console.log(day);
const student1 ={
    id:'562115003',
    name:'Kris'
};
const student2 ={
    id:'562115028',
    name:'Nurse'
};
const student3 ={
    id:'562115012',
    name:'EJ'
};

const students=[student1,student2,student3];
if(Math.random()>0.5){
    students.splice(0,2);//ตัด
}
 
console.log(students);
