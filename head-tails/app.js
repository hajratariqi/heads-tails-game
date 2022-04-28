var headuser = prompt("Enter headuser name");
var tailuser = prompt("Enter tailsuser name");
var toss = Math.random()*2
var floor = Math.floor(toss)
if(floor === 0){
    document.write( headuser + " You win the toss")
}else{
    document.write(tailuser + " You win the toss")
}