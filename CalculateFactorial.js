function calculateFactorial(number,factorial){
    if(number){
      factorial = (factorial||1)*number;   
      calculateFactorial(number-1,factorial);
    }
    else{
       console.log(factorial);
    }
}

calculateFactorial(5);
