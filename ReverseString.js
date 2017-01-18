function performReverseString(){
    var string         = "Sweety",
        stringArray    = string.split(""),
        reverseString  = "";

    for(var i=stringArray.length-1;i>=0;i--){
       reverseString+=stringArray[i];
    }   

    console.log(reverseString); 
}

performReverseString();
