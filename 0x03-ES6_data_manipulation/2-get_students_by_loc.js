export default function getStudentsByLocation(studentsList, city) {
  const filteredStudents = studentsList.filter((student) => student.location === city);
  return filteredStudents;
}
