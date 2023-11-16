// findUserByUsername
// Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string.
// The function should return the first object with the key of username that matches the string passed to the function.
// If the object is not found, return undefined.
function findUserByUsername(array, string){
    return array.find(function(val){
        return val.username === string;
    });
}

// removeUser
// Write a function called removeUser which accepts an array of objects, each with a key of username, and a string.
// The function should remove the object from the array and return this object.
// If the object is not found, return undefined.
// function removeUser(array, string){
//     let user = array.find(function (username) {
//         return username === string
//       })
//     if (user !== undefined) {
//         return us
//         array.splice(user, 1)
//       }
// }
function removeUser(array, string) {
    let index = array.findIndex(function(user){
      return user.username === string;
    })
    if(index === -1) return;
  
    return array.splice(index,1)[0];
  }
// // function removeUser(array, string){
// //     return array.find(function(user){
// //         return user.username === string
// //         array.splice(user, 1)
// //     })
    
// // }
