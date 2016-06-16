'use strict';
//console.log('Hello World!');
//const day='Tuesday'//const คือห้ามเขียนทับ ได้ครั้งเดียว

const student1 ={
    id:'562115003',
    name:'Kris',
    grade: 4.00
};
const student2 ={
    id:'562115028',
    name:'Nurse',
    grade: 5.0
};
const student3 ={
    id:'562115012',
    name:'EJ',
    grade: 4.5
};

const students=[student1,student2,student3];

// students.splice(1,1);
// console.log(students);

const getStudentById= (id) =>{
    console.log(
        students.filter(student => student.id == id).map(student=>'This is student number:'+student.id).pop() //map คือการเปลี่ยนรูป
    );
};
const isSomeStudentGradeGreaterThan2= () =>{
    return students.some(student=>student.grade>2.0);  //มี นร อย่างน้อย 1 คนที่ได้เกรดมากกว่า  2 หรือไม่
};
getStudentById('562115003')
console.log(isSomeStudentGradeGreaterThan2());