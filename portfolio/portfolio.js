// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 30 }
//   ];
  
//   // Group people by age
//   const groupedByAge = people.reduce((accumulator, currentValue) => {
//     const age = currentValue.age;
//     if (!accumulator[age]) {
//       accumulator[age] = [];
//     }
//     accumulator[age].push(currentValue);
//     return accumulator;
//   }, {});
  
//   console.log(groupedByAge);
//   // Output: { 25: [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 25 } ], 30: [ { name: 'Charlie', age: 30 } ] }
  

// destructuring  array
// const raceresult = ["a", "b" , "c"];
// const [gold, silver, bronze] = raceresult;

//using rest
// const raceresult = ["a", "b" , "c"];
// const [gold, ...everyone] = raceresult;

// //destruturing in object
// const user = {
//   email: "@gmail.com",
//   firstname: "kurt",
//   lastname: "gutierrez",
//   number: 10
// };

// // //      this code is for renaming the variable 
// // const { email:address, firstname, lastname,number } = object;



// function fullname (firstname, lastname){
//   return `${firstname} ${lastname}`
// }

// const user = {
//   email: "@gmail.com",
//   firstname: "kurt",
//   lastname: "gutierrez",
//   number: 10
// };

// function fullname({ firstname, lastname }) {
//   return `${firstname} ${lastname}`;
// }

// console.log(fullname("kurt", "andrei")); // Output: kurt gutierrez

// const example = document.getElementById("") //the get element id use on targeting or seleeting the id of a specify part off the html 


// const allimage = document.getElementsByTagName('img')

// for( let a of allimage){
//     a.src= "imiges/image-removebg-preview.png"
// }

console.log("Script is running...");

const query = document.getElementsByTagName("img")


for (let querys of query){
    querys.src ="imiges/image-removebg-preview.png"
}

