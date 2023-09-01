
function rearng(n) {
    const digits = n.toString().split('');
    const sortedDigits = digits.sort((a, b) => b - a);
    const result = parseInt(sortedDigits.join(''));
    return result;
  }
  
  const input = prompt('please enter a positive number ');
  const number = parseInt(input);
  
  console.log(rearng(number));