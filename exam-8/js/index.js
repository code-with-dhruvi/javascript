import Navbar from "../componets/navbar.js";

document.getElementById('navbar').innerHTML=Navbar();
const studentData = JSON.parse(localStorage.getItem('studentData'));

if (studentData) {
    const studentInfo = `Name: ${studentData.name}, Roll No: ${studentData.rollNo}, Class: ${studentData.classValue}`;
    document.getElementById('student-info').innerHTML = studentInfo;
}
document.getElementById("#userData").addEventListener("add-student", handleData);