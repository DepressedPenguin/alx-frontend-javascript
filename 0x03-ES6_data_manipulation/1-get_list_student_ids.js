export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  const arrayResult = getListStudents.map((student) => student.id);

  return arrayResult;
}
