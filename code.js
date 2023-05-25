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
    //using a for loop to define the i variable in initialization, and to check the palindrome's length by counting how many times it loops to reach half of its length
    //console logs for debugging
    console.log(txt)
    console.log(newTxt)
    console.log(len)
    console.log(halfLen)
    for( i = 0; i < halfLen; i++){
        //if the length of the text on the left does not equal the length of the text on the right, it is not a palindrome
        //the text on the left is the new text compared to the generated integer variable
        //the text on the right is the length of the new text minus the integer variable and a placemarker
        console.log(i)
        if( newTxt[i] !== newTxt[len-1-i]){
            document.getElementById("statusBoard").innerHTML = "<h3>Nope! Not a palindrome.</h3>";
            return;
        }
        document.getElementById("statusBoard").innerHTML  = "<h3>Yes! " +txt+ " is a palindrome.</h3>";
    }
}
