//created by Michael Anderson
function check(){
    //declare variables
    //get text from the from using the id
    var txt = document.getElementById("palindromeCheck").value;
    //turn the text lower case and replace all special characters not defined in the brackets ([])
    var newTxt= txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //define the length of the text without special characters
    var len = newTxt.length;
    //half of the length of the new text
    var halfLen = Math.floor( len/2 );
    //define integer for internal maths
    var i;
    //defining a prompt input
    var inputTxt;
    //using a for loop to define the i variable in initialization, and to check the palindrome's length by counting how many times it loops to reach half of its length
    //console logs for debugging
    console.log(txt);
    console.log(newTxt);
    console.log(len);
    console.log(halfLen);
    if(txt.length === 0){
        let inputTxt = prompt(`You need to enter some sort of text to check, silly!`, 'Was it a cat I saw?');
        console.log(inputTxt);

        //repeat the same function as below
        var txt = inputTxt;
        //turn the text lower case and replace all special characters not defined in the brackets ([])
        var newTxt= txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        //define the length of the text without special characters
        var len = newTxt.length;
        //half of the length of the new text
        var halfLen = Math.floor( len/2 );
        //define integer for internal maths
        var i;
        for( i = 0; i < halfLen; i++){
            //if the length of the text on the left does not equal the length of the text on the right, it is not a palindrome
            //compare the text lengths by stepping in from the front and back side of the text
            //log the value of i to the console
            console.log(i);
            if( newTxt[i] !== newTxt[len-1-i]){
                document.getElementById("statusBoard").innerHTML = "<h3>Nope! Not a palindrome.</h3>";
                return;
            }
            document.getElementById("statusBoard").innerHTML  = "<h3>Yes! " +txt+ " is a palindrome.</h3>";
        }
    }
    else if (txt.length === 1){
        let inputTxt = prompt(`There needs to be more than one letter or number for there to be a palindrome!

Please try something else.`);
        //repeat the same function as below
        var txt = inputTxt;
        //turn the text lower case and replace all special characters not defined in the brackets ([])
        var newTxt= txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        //define the length of the text without special characters
        var len = newTxt.length;
        //half of the length of the new text
        var halfLen = Math.floor( len/2 );
        //define integer for internal maths
        var i;
        for( i = 0; i < halfLen; i++){
            //if the length of the text on the left does not equal the length of the text on the right, it is not a palindrome
            //compare the text lengths by stepping in from the front and back side of the text
            //log the value of i to the console
            console.log(i);
            if( newTxt[i] !== newTxt[len-1-i]){
                document.getElementById("statusBoard").innerHTML = "<h3>Nope! Not a palindrome.</h3>";
                return;
            }
            document.getElementById("statusBoard").innerHTML  = "<h3>Yes! " +txt+ " is a palindrome.</h3>";
        }
    }
    //complete the if/else tree with empty statement
    else{
        for( i = 0; i < halfLen; i++){
            //if the length of the text on the left does not equal the length of the text on the right, it is not a palindrome
            //compare the text lengths by stepping in from the front and back side of the text
            //log the value of i to the console
            console.log(i);
            if( newTxt[i] !== newTxt[len-1-i]){
                document.getElementById("statusBoard").innerHTML = "<h3>Nope! Not a palindrome.</h3>";
                return;
            }
            document.getElementById("statusBoard").innerHTML  = "<h3>Yes! " +txt+ " is a palindrome.</h3>";
        }
    }
}
