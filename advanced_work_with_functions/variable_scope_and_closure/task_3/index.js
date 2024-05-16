function byField(field){
  return (a, b) => a[field] > b[field] ? 1: -1;
}


let users = [
  { name: "John", age: 20, surname: "Doe" },
  { name: "Peter", age: 18, surname: "Smith" },
  { name: "Anna", age: 19, surname: "Abbey" }
  ];

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

