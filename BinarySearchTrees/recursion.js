//Recursive Funcitons


// Factorail (!)
// 4! = 4 * 3 * 2 * 1 =24
// 3! = 3 * 2 * 1 = 6

function factorial(num) {
  //base case
  if (num === 1) return num
  //recursive case
  else return num * factorial(num -1);
}
