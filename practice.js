function checking (str) {
  const array = str.split('');


  reverse_arry = array.reverse();

  const final = reverse_arry.join('');

  if(str == final){
    console.log('this is a palindrome');
  }else(  
      console.log('this is not a palindrome')
  )
};

const huge = prompt ('enter a string : ')
checking(huge);


