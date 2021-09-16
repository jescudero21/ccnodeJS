/* Primer problema e instrucciones para procesar la entrada
https://www.codechef.com/problems/HS08TEST
https://medium.com/@abhishek2kr/step-by-step-guide-for-start-coding-at-codechef-using-javascript-1ad3ffb16870
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data',chunk => input += chunk);

process.stdin.on('end',()=> {
   let [withdrawAmount, balanceAmount] = input.split(' ').map(item => parseFloat(item));
   performTransaction(withdrawAmount, balanceAmount);
}); 

function performTransaction(withdraw, balance) {
    let result = balance;
    if(withdraw % 5 === 0 && withdraw + 0.50 <= balance) {
        result = balance - (withdraw + 0.50); 
    }
    console.log(result.toFixed(2));
}