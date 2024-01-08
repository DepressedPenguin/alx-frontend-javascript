const getListStudentIds = (getListStudents)=>{
    if (!Array.isArray(getListStudents)){
        return [];
    }

    const array_result = getListStudents.map((student)=>{
        return student.id;
    })
    return array_result;
};
