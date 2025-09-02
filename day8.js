let currenttime=new DataTransfer();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.gethours();
console.log(hours);
let minutes=currenttime.getMinutes();
console.log(minutes);
let Day=currenttime.getDay();
console.log(Day);

class Exam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);

    }
}
let result=new Exam("jhon");

class Bank{
    constructor(initialamount=0){
        
    }  
    get balance(){
        return this._balance;
    }                                                                                                                                                                                                                                       
    set _balance(amountdeposit){
        if(amountdeposit>0){
            this.balance+=amountdeposit;
            console.log(_balance)
        }
    }
}
let add=new Bank(10);
console.log(add);
add._balance=300;
console.log(add);
