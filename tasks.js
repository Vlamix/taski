// 1. Напишите функцию, которая берет массив объектов и возвращает массив значений определенного поля:
//
//     const chars = [
//         { 'name': 'tony', 'age': 20 },
//         { 'name': 'feel', 'age': 30 }
//     ];
//
// console.log(pluck(chars, 'name')); // ['tony', 'feel']
const chars = [
        { 'name': 'tony', 'age': 20 },
        { 'name': 'feel', 'age': 30 }
    ];
function pluck(name, obj) {
    const arr = []
    arr.push(obj.name)
    return arr
}

console.log(pluck('name', chars))
//
// 2. Напишите функцию неглубокого копирования массива, учитывая, что исходный массив может быть произвольной длины, но не глубже массива в массиве
//
// const arr1 = [[1,2], [3,4]];
// const arr2 = aCopy(arr1);
//
// arr1.push([5,6]);
//
// console.log(arr1); // [[1,2], [3,4], [5,6]]
// console.log(arr2); // [[1,2], [3,4]]
//
const arrToCopy = [[1,2], [3,4]]
function aCopy(arr) {
    const arrCopy = [...arr]
    return arrCopy
}

console.log(aCopy(arrToCopy))
//
// const arr1 = [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']];
// const arr2 = aCopy(arr1);
//
// arr1.unshift(['z']);
//
// console.log(arr1); // [['z'], ['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
// console.log(arr2); // [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
//
//
// 3. Напишите функцию, которая принимает на входе массив и число, обозначающее размер группы, на которые нужно разделить исходный массив
//
// const arr1 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 2);
//
// console.log(arr1); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
//
const arrSpl = ['a', 'b', 'c', 'd', 'e', 'f']
function splitArr(arr, num){
    return arr.reduce((accumulator, currentValue) => {
        []
    })
}

console.log(splitArr(arrSpl, 2))
// 4. Напишите функцию, которая удалит из массива все "отрицательные" типы данных (false, null, 0, "", undefined, NaN)
//
// const arr1 = clearArray([1, 0, 2, false, '', 3]);
//
// console.log(arr1); // [1, 2, 3]
function clearArr(arr){
    return arr.filter(value => value)
}
const negArr = [1, 0, 2, false, '', 3]
console.log(clearArr(negArr))
//
// 5. Напишите функцию, которая конкатенирует исходный массив с другими массивами или примитивными значениями
//
// const arr1 = [1];
// const arr2 = concatArray(arr1, 2, [3], [[4]]);
//
// console.log(arr2); // [1, 2, 3, [4]]
// console.log(arr1); // [1]
const arr1 = [1];
const arr2 = concatArray(arr1, 2, [3], [[4]]);
function concatArray(arr1, ...arr2) {
    return arr1.concat(...arr2)
}

console.log(arr2)
// 6. Напишите функцию, которая удалит указанное кол-во элементов с начала исходного массива. Аргумент функции, который означает кол-во элементов, опциональный и равен 1 по умолчанию. Если элементов меньше, чем указанное кол-во для удаления - вернуть пустой массив
//
// console.log(rm([1, 2, 3])); // [2, 3]
//
// console.log(rm([1, 2, 3], 2)); // [3]
//
// console.log(rm([1, 2, 3], 5)); // []
//
// console.log(rm([1, 2, 3], 0)); // [1, 2, 3]
function rm(arr, el) {
    arr.splice(0, el)
    return arr
}
const arrDel = [1, 2, 3, 4]
console.log(rm(arrDel, 2) )
// 7. Аналогично заданию 6, только удаление с конца массива
//
function rmRev(arr, el) {
    arr.reverse().splice(0, el)
    return arr.reverse()
}
const arrDelRev = [1, 2, 3, 4]
console.log(rmRev(arrDelRev, 2) )
// 8. Написать функцию, которая принимает массив, символ для замены, с какой ячейки начинать заменять и на какой остановиться. Если номера ячеек не заданы, то по умолчанию это начало и конец всего массива
//
// const arr1 = [1, 2, 3];
//
// replaceIn(arr1, 'a');
// console.log(arr1); // ['a', 'a', 'a']
//
// replaceIn(arr1, 2);
// console.log(arr1); // [2, 2, 2]
//
// const arr2 = [4, 6, 8, 10];
// replaceIn([4, 6, 8, 10], '*', 1, 3);
// console.log(arr2); // [4, '*', '*', 10]
const arrReplace = [4, 6, 8, 10]
function replaceIn(arr, pos1, pos2) {

    for (let j = pos1; j < pos2; j++) {
        arr.splice(j, 1, "*")
    } //я хз как сделать без цикла

    return arr
}

console.log(replaceIn(arrReplace, 1, 3))
//
// 9. Напишите функцию, которая вернет массив с всеми элементами исходного массива, кроме последней ячейки
//
// const arr1 = [1,2,3,4];
// const arr2 = init(arr1);
//
// console.log(arr2); // [1,2,3]
function init(arr) {
    arr.splice(arr.length-1, 1)
    return arr
}
const arrInit = [1, 2, 3, 4]
console.log(init(arrInit))
//
// 10. Напишите функцию, которая вернет массив с всеми значениями, которые повторяются в исходном массиве
//
// const arr1 = [1,2,3,4,2,5,6,1,3];
// const arr2 = uni(arr1);
//
// console.log(ar2); // [1,2,3]
function uni(arr) {

    return arr.filter((value, index) => arr.indexOf(value) === index)
}
const arrUni = [1,2,3,4,2,5,6,1,3]
console.log(uni(arrUni))
// 11. Напишите функцию, которая вернет элемент из массива по указанному индексу. Но если индекс отрицательный, то считаем с конца массива
//
// const arr = ['a', 'b', 'c', 'd'];
//
// console.log(nfa(array, 1)); // 'b'
// console.log(nfa(array, -2); // 'c';
const arrNfa = ['a', 'b', 'c', 'd'];
function nfa(arr, index){
    if(index < 0){
        arr.reverse()
        return arr[index*(-1)-1]
    } else {
        return arr[index]
    }
}

console.log(nfa(arrNfa, -1))

//
// 12. Напишите решение в одну строчку, которое считает сумму квадратных корней для всех чётных чисел внутри массива

console.log(
    [1, 4, 3, 0, 4, 5, 4].filter(value => value % 2 === 0)
        .map(Math.sqrt).reduce((a,b) => a + b)
)
// 13. Напишите функцию, которая вернет массив с группированными элементами исходных массивов. Логика группировки: первая группа состоит из всех первых элементов исходных массивов, вторая группа - из вторых элементов и т.д.
//
// console.log(group(['a', 'b'], [1, 2], [true, false]));
// // [['a', 1, true], ['b', 2, false]]
//
//
const arrGroup = [['a', 'b'], [1, 2], [true, false]]
function group(arr){

}

console.log(group(arrGroup))
// 14. Напишите функцию которая преобразует массив в строку через указанный разделитель
const arrImplode = ['a', 'b', 'c']

function implode(arr, delimiter) {
    return arr.join(delimiter)
}

console.log(implode(arrImplode,'-'))