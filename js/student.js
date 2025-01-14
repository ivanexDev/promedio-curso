export class Student {
  average = 0;
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
  }

  getName() {
    return this.name;
  }

  getGrades() {
    return this.grades;
  }

  getAverageGrade() {
    const average = (
      this.grades.reduce((prev, curr, acc) => (acc = prev + curr)) /
      this.grades.length
    ).toFixed(1);
    this.average = average;
    return average;
  }
}
