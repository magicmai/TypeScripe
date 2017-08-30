// 类：class
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// 接口：interface
interface Person {
    firstName: string;  // 类型注解：:string
    lastName: string;
}

function greeter(person: Person) {
    //return "Hello, " + person;
    return "Hello, " + person.firstName + " " + person.lastName;
}

//var user = "Jane User";
//var user = { firstName: "Jane", lastName: "User" };  // interface
var user = new Student("Jane", "M.", "User");          // class

document.body.innerHTML = greeter(user);