//callback
function text(){
        console.log("message");
}
function send(callback){
    console.log("message sended");
    setInterval(callback,2000);
}
send(text);