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

// students.splice(1,1);
// console.log(students);

const IfIdIsEqual =(student,id) =>{
    if(student.id==id) return true;
};
const getStudentById =(id) =>{
    students.forEach(student => {
        if (IfIdIsEqual(student, id)) {
            console.log(student);
        }
    });
};
getStudentById('562115003');