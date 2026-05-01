import students from "./maps.js";
import data from "./file.json" assert { type: "json" };
const studentname=students.map(student=>student.name);
console.log(studentname);

const studentemail=students.map(student=>student.email);
console.log(studentemail);

const studentid=students.map(student=>student.id);
console.log(studentid);


console.log(data)
console.log(data.name);
console.log(data.age);
console.log(data.email);