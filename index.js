
//=============================================================================================================================================
//Quiz 1
//Sort the below array of employees in ascending order by age employees

let employees = [

    {

        firstName: 'John',

        lastName: 'Doe',

        age: 27,

        joinedDate: 'December 15, 2017'
    },

    {

        firstName: 'Ana',

        lastName: 'Rosy',

        age: 25,

        joinedDate: 'January 15, 2019'
    },

    {

        firstName: 'Zion',

        lastName: 'Albert',

        age: 30,

        joinedDate: 'February 15, 2011'
    }
];

employees.sort(function(a,b){
  if(a.age>b.age){
    return 1
  }else{
    return -1
  }
})
console.log(employees)

//=============================================================================================================================================

//2. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array

// function getLastElements(arr, n = 1) {
//   if (n === 1) {
//     return arr[arr.length - 1];
//   } else {
//     return arr.slice(-n);
//   }
// }
// const arr = [1, 2, 3, 4, 5];

// console.log(getLastElements(arr)); // Output: 5

// console.log(getLastElements(arr, 2)); // Output: [4, 5]


//===============================================================================================================================================

// 3. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

// const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (let i = 0; i < a.length; i++) {
//   console.log("Row "+i)
//   for (let j = 0; j < a[i].length; j++) {
//     console.log(a[i][j]);
//   }
// }

//==========================================================================================================================================
// Quiz 4. Write a JavaScript function to find the difference between two arrays.

// Test Data:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

// function difference(arr1, arr2) {
//     // create an empty array to store the differences
//     var diff = [];
  
//     // loop through arr1 and check if each element is also in arr2
//     for (var i = 0; i < arr1.length; i++) {
//       if (arr2.indexOf(arr1[i]) === -1) {
//         // if the element is not found in arr2, push it to the diff array
//         diff.push(arr1[i]);
//       }
//     }
  
//     // loop through arr2 and check if each element is also in arr1
//     for (var j = 0; j < arr2.length; j++) {
//       if (arr1.indexOf(arr2[j]) === -1) {
//         // if the element is not found in arr1, push it to the diff array
//         diff.push(arr2[j]);
//       }
//     }
  
//     // return the diff array
//     return diff;
//   }
  
//   // example usage
//   console.log(difference([1, 2, 3], [100, 2, 1, 10])); // output: ["3", "10", "100"]


//===============================================================================================================================

  //Quiz 5. Write a JavaScript function to filter false, null, 0 and blank values from an array.

//Test Data :
//console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
//[58, "abcd", true]
//   function filter_array_values(arr) {
//     // create a new array to store the filtered values
//     var result = [];
  
//     // loop through the input array
//     for (var i = 0; i < arr.length; i++) {
//       // check if the current value is not false, null, 0, or blank
//       if (arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== "") {
//         // if the value is not one of the filtered values, add it to the result array
//         result.push(arr[i]);
//       }
//     }
  
//     // return the result array
//     return result;
//   }
  
//   // example usage
//   console.log(filter_array_values([58, '', 'abcd', true, null, false, 0])); // output: [58, "abcd", true]
// //   This function loops through the input array and checks each value to see if it is one of the filtered values.
// //    If the value is not false, null, 0, or blank, 
// //   it is added to a new array called result. Finally, the result array is returned as the result.
  
  