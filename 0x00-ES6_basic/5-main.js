export default function concatArrays(array1, array2, string) {
    let new_array = [...array1,...array2,...string];
    return new_array;
}