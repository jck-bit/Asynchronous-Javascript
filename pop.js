function checkpalindrome (str) {
  const arrayvalues = str.split('')

  //reverse the array values
  reverse_array_values = arrayvalues.reverse();

  //return to a string
  const reverse_string = reverse_array_values.join('');

  if(str === reverse_string) {
      console.log('this is a palindrome');
  }else{
      console.log('this is not a palindrome')
  }
  
}

const stri = prompt('enter a string: ');
checkpalindrome(stri)



