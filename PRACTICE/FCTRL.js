// https://www.codechef.com/problems/FCTRL

process.stdin.resume();
process.stdin.setEncoding("utf8");

let input = '';
let output = '';

process.stdin.on('data',chunk => input += chunk);

process.stdin.on("end", () => {
  input = input.trim().split("\n").map(item => parseInt(item));
  input.shift(); // Si uso programacion funcional prescindo del primer elemento
  output= input.map(item => damezeros(item));
  for (const z of output) {console.log(z);}
});

function damezeros(num){
  let N = num;
  let sum;
  let div;
    sum = 0;
    div = 5;
    while (true) {
      if (N / div <= 0) break;
      sum += Math.floor(N / div);
      div *= 5;
    }
    return sum;
  
 }
