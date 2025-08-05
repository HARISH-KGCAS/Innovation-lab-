//block scope is a currly braces
//the block scope of a variable means that the varialbe is accessiable
//within the block that is btw the curly braces.
function Voting(age){
    if(age>=18){
        let iscloudy=true;    //let and const can be accessed anywhere
        var israining=true;   //var cannot be accessed
        console.log("eligible")
        console.log(iscloudy);
    }
    console.log(israining);
    console.log(iscloudy);//throw err this line will give error
}
Voting(18)

//this program will get error becuz of iscloudy