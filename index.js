// Task - 1
// let arr = [-10, 66, "Anna", "flower", 9, -5];
// let ind = arr.indexOf(3);

// function index(arr) {
//     if(ind !== -1){
//         return "Bu element mavjud"
//     }
//     else{
//         return "Bu element mavjud emas"
//     }
// }  
// console.log(index(arr));



// // Task - 2
// const products = [
//   { id: 1, name: 'Laptop', brand: 'Dell', price: 999.99 },
//   { id: 2, name: 'Smartphone', brand: 'Samsung', price: 699.99 },
//   { id: 3, name: 'Tablet', brand: 'Apple', price: 499.99 },
//   { id: 4, name: 'Desktop', brand: 'HP', price: 1199.99 },
// ];

// function filter(arr, key, value) {
//     let res = [];
    
//     res = arr.filter(v => {
//         return v[key] == value
//     })

//     return res
// }
// console.log(filter(products, 'brand', 'HP'));



// // Task - 3
// const students = [
//          { name: 'Alice', age: 22, grades: [85, 90, 92, 88] },
//          { name: 'Bob', age: 20, grades: [78, 85, 80, 88] },
//          { name: 'Charlie', age: 21, grades: [90, 92, 89, 94] },
//        ];

// function MediumOfAge(arg) {
//     let ages = 0;
//  for(let i = 0; i < students.length; i++){ 
//         ages += students[i].age; 
//  }  
//     let average = ages / students.length;
//     return average
// }       
// console.log(MediumOfAge(students, ));



// Task - 4
const tasks = [
    { taskName: 'Task A', priority: 'High', deadline: '2023-03-15' },
    { taskName: 'Task B', priority: 'Medium', deadline: '2023-04-10' },
    { taskName: 'Task C', priority: 'Low', deadline: '2023-03-01' },
    { taskName: 'Task D', priority: 'High', deadline: '2023-03-20' },
  ];

function sortByPriority(tasks) {
    return tasks.sort((a, b) => {
      const priorityOrder = { High: 2, Medium: 3, Low: 1 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }
  
  console.log(sortByPriority(tasks));
  



// // Task - 5
// let arr = [56, 12, "hello", 2, -10, "world", -80];

// function GetMassivs(arg) {
//     let arr1 = arr.slice(3, 6);
//     return arr1
// }
// console.log(GetMassivs(arr));
