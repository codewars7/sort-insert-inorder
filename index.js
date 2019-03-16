
const fun = (arr, num) => {
  arr.sort((a, b) => a -b)
  for(let i = 0; i < arr.length; i++) {
    if(num <= arr[i]) {
      return i 
    } 
  }
  return arr.length
}

console.log(
  fun([10, 20, 30, 40, 50],  35)
)
