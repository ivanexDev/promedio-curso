export class Course {
  students = [];

  addStudent(student) {
    this.students.push(student);
  }

  getAllStudent() {
    return this.students;
  }

  getBestCourseGrade() {
    const averageGrades = this.students.sort((a, b) => b.average - a.average);
    return averageGrades.filter(
      (student) => student.average === averageGrades[0].average
    );
  }

  getAverageCourseGrade() {
    const averageCurseGrades = this.students.map((student) => +student.average);
    const globalAverage = (
      averageCurseGrades.reduce((prev, curr, acc) => (acc = prev + curr)) /
      averageCurseGrades.length
    ).toFixed(1);
    return globalAverage;
  }
}
