// 类
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
// 访问控制符：控制是否能在类外部被访问
var Person = (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        //console.log(name); //这里可以访问name属性
        console.log(this.name);
        console.log("I am eating.");
    };
    return Person;
}());
//类的实例化
var p1 = new Person();
p1.name = "Ling";
p1.eat();
var p2 = new Person();
p2.name = "Ying";
p2.eat();
// 构造函数
// 在类实例化时立即被调用，只能调用一次
var Person1 = (function () {
    function Person1(name) {
        // console.log("haha"); //外部不能访问的函数
        this.name = name;
    }
    // 简化写法,public声明了name属性：
    // constructor(public name: string) {
    // }
    Person1.prototype.getName = function () {
        console.log(this.name);
    };
    return Person1;
}());
var p3 = new Person1("Lala"); //实例化时要指定字符串名字
p3.getName();
// 类的继承：extends
// 类的关键字：super： 
//①调父类的构造函数super() 
//②调用父类的其他方法super.xxx
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        var _this = 
        // 子类的构造函数必须调用父类的构造函数
        _super.call(this, name) || this;
        _this.code = code;
        return _this;
    }
    Employee.prototype.work = function () {
        _super.prototype.getName.call(this);
        this.doWork();
    };
    Employee.prototype.doWork = function () {
        console.log("I am working!");
    };
    return Employee;
}(Person1));
var e1 = new Employee("Kuku", "1");
e1.getName();
e1.work();
// 泛型：参数化的类型，限制集合的内容
var workers = [];
workers[0] = new Person1("Ming");
workers[1] = new Employee("Lili", "2");
//workers[2] = 2; //报错，类型不对
console.log(workers);
