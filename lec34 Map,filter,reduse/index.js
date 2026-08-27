
// let student = {
//     name: "Manavi",
//     rollNo: 34,
//     subjects: ["math", "english", "hindi"],
// }

// let {subjects, name, rollNo} = student
// console.log(student);


// let {subjects , ...variable} = student  //rest operator last me aaega
// console.log(variable);



// How to rename key
// let {subjects: vishay , ...variable} = student  
// subjects --> vishay
// let vishay = subjects
// console.log(vishay);


// let obj1 = {
//     name : "Yashi",
//     phone : 3456274859,
// }

// let obj2 = {
//     address : "india",
//     adharCard : 36481794957,
//     name : "Manavi",
// }

// let obj3 = {...obj1 , ...obj2}

// console.log(obj3);


// aaray and objects update

// const arr = [1, 2, 3, 4]

// arr[1] = "updated"
// console.log(arr);

// let obj = {
//     name : "Manavi",
//     rollNo : 9,
//     address : null
// }

// obj["name"] = "Vanshika"
// obj.name = "Sunita"


// delete obj.rollNo    // property delete

// console.log(obj);

// console.log(obj.address?.street);


// let arr1 = [1, 2 , 3, 4, 5, 6]

// // arr1.splice(2,2)
// arr1.splice(1,3) // delete
// console.log(arr1);


let arr1 = [1, 2 , 3, 4, 5, 6]

// arr1.splice(3 ,0, 2)  // add
// arr1.splice(3 ,1 , ["replace"])  // replace
// console.log(arr1);


// let trimArr = arr1.slice(1 , 3)
// console.log(trimArr);


// console.log(arr1.indexOf(3));

let res = arr1.find((value) => {
return value ==="3";
})
console.log(res);








// Muteability

let arr4 = [4, 5, 6, 62, 213, 13]

let arrCopy = arr4;

arrCopy.pop()

console.log("arr4",arr4 );
console.log("arrCopy",arrCopy );
