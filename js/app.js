import { Student } from "./student.js";
import { Course } from "./course.js";
document.getElementById("enviar").addEventListener("click", verificacion);

const course = new Course();

function verificacion() {
  const name = document.getElementById("nombre").value;
  const grades = [...document.querySelectorAll(".nota")].map(
    (grade) => +grade.value
  );
  const someEmptyValue = grades.some((e) => e === "");

  if (!name) alert("Debes ingresar un nombre");
  if (someEmptyValue) alert("Debes llenar todas las notas");
  const student = new Student(name, grades);
  student.getAverageGrade();
  course.addStudent(student);
  escribir(name, grades, student.getAverageGrade());
  resultados();
}

function escribir(name, grades, average) {
  const tableR = document.createElement("tr");
  let gradesHtml = "";
  grades.forEach((grade) => (gradesHtml += `<th>${grade}</th>`));
  tableR.innerHTML = `<th>${name}</th> ${gradesHtml} <th>${average}</th>`;
  document.getElementById("tabla").appendChild(tableR);
}

function resultados() {
  const bestGrades = course.getBestCourseGrade();

  document.getElementById("notaMasAlta").innerHTML = "";
  document.getElementById("promedioCurso").innerHTML =
    course.getAverageCourseGrade();

  bestGrades.forEach((student) => {
    const tablaMejorPromedio = document.createElement("li");
    tablaMejorPromedio.innerHTML =
      student.name + " con un promedio de " + student.getAverageGrade();
    document.getElementById("notaMasAlta").appendChild(tablaMejorPromedio);
  });
}
