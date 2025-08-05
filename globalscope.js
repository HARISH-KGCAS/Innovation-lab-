//global scope
let a=10;
function Say(){
    console.log("hello");
    console.log("within"+a);
    let name="javascript"
    console.log("Access with in the function"+a);

}
Say()
console.log("outside"+a);