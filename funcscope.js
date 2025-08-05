//function scope
//this scope means that the variables are only accessible
//in this func in which they are declared
function Say(){
    let name="javascript"
    console.log("hello tamil frd");
    console.log("within the func"+name);
}
Say()
console.log("Outside the func"+name);