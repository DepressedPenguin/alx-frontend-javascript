export default function getStudentIdsSum(studentsList) {
  const sumOfIds = studentsList.reduce((next, perv) => {
    const idSum = next + perv.id;
    return idSum;
  }, 0);

  return sumOfIds;
}
