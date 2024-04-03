let name = prompt("Who's it?");
let passwd;

if(name === "Admin"){
    passwd = prompt("Enter password");

    if(passwd === "I'm the leader"){
        alert("Hello!")
    }
    else if(passwd === '' || passwd === null){
        alert("Declined")
    }
    else{
        alert("Incorrect password")
    }
}
else if(name === '' || name === null){
    alert("declined");
}
else {
    alert("I don't know you")
}
