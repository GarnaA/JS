class Student{
  #id = 143456;

  get studentId(){
    return this.#id;
  }
}

let student = new Student();

console.log(`student id: ${student.studentId}`);
console.log(student);
