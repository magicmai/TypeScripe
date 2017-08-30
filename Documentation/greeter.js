// 类：class
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    //return "Hello, " + person;
    return "Hello, " + person.firstName + " " + person.lastName;
}
//var user = "Jane User";
//var user = { firstName: "Jane", lastName: "User" };  // interface
var user = new Student("Jane", "M.", "User"); // class
document.body.innerHTML = greeter(user);
