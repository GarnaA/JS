// objects copying

let user = {
    name: "John",
    age:30
};

let userCopy = {};

for(let key in user){
    userCopy[key] = user[key];
}

userCopy.name = "Alan";

console.log(userCopy.name);
console.log(user.name);

// Object.assign method

let user2 = {name: "Alice"};

let permission1 =  {canView: true};
let permission2 = {canEdit: true};

console.log(user2);

Object.assign(user2, permission1, permission2);

console.log(user2);