//Writing the helper functions to generate random tickets

function genTicket(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    //using Math.floor method to generate random numbers
    arr[i] = Math.floor(Math.random() * 10);
  }

  return arr;
}
function sum(arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}

export { genTicket, sum };
