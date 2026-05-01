import students from "./maps.js";
const studentname=students.map(student=>student.name);
console.log(studentname);

const studentemail=students.map(student=>student.email);
console.log(studentemail);

const studentid=students.map(student=>student.id);
console.log(studentid);