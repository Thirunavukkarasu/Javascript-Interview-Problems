function performReverseWord(){
    var word         = "pig is only a pig if it is pig",
        wordArray    = word.split(" "),
        reverseWord  = "";

    for(var i=wordArray.length-1;i>=0;i--){
       reverseWord+=wordArray[i];
    }   

    console.log(reverseWord); 
}

performReverseWord();
