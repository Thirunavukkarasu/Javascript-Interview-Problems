function calculateOccurenceOfWord(){
    var word          = "Sweety is my jeevan and Sweety is my life",
        wordArray     = word.split(" "),
        countMap      = {};

    for(var i=0;i<wordArray.length;i++){
       if(!countMap[wordArray[i]]){
          countMap[wordArray[i]] = 1;
       }
       else{
           countMap[wordArray[i]] = countMap[wordArray[i]]+1;
       }
    }   

    console.log(countMap); 
}

calculateOccurenceOfWord();
