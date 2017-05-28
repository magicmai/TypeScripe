//指定变量类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function greet(msg: string) {
//     console.log("Say " + msg);
// }
// greet("hello!");
//1. 数据类型
var a = '';
var b = 12;
var c = ['a', 'b', 'c'];
var d = [1, 2, 3];
var e = true;
var f = [1, "hello"];
var g = 1;
var h = "hhh";
//参数为空
function fun() {
    alert(1);
}
//2. 函数 Function
function hello(name) {
    if (name === void 0) { name = '李知恩'; }
    return "Hello, " + name;
}
console.log(hello('IU'));
// 第二个string为返回值类型
var nihao = function (name) { return 'Hello,' + name; };
console.log(nihao('小姐姐'));
var obj = { a: 1, b: 1 };
// function add(obj) {
// 	return obj.a + obj.b;
// }
var add = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
};
console.log(add(obj));
//3. Class
var Person = (function () {
    // 构造函数，实例化的一瞬间被执行
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        return "Welcome " + this.name + "\uFF01";
    };
    return Person;
}());
var xiaohong = new Person('小红');
console.log(xiaohong.greet());
// 类的继承
// Student 继承了 Person 的属性
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, major) {
        var _this = _super.call(this, name) || this;
        _this.major = major;
        return _this;
    }
    Student.prototype.studentGreet = function () {
        return this.major + "\u7CFB\u7684" + this.name + "\u5411\u4F60\u95EE\u597D\u3002";
    };
    return Student;
}(Person));
var xiaoming = new Student('小明', '哲学');
console.log(xiaoming.studentGreet());
