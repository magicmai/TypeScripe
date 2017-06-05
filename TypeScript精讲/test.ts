//指定变量类型

// function greet(msg: string) {
//     console.log("Say " + msg);
// }
// greet("hello!");



//1. 数据类型
let a:string = '';
let b:number = 12;
let c:string[] = ['a', 'b', 'c'];
let d:number[] = [1, 2, 3];
let e:boolean = true;
let f:[number, string] = [1, "hello"];
let g:any = 1;
let h:any = "hhh";
//参数为空
function fun():void {
	alert(1);
}



//2. 函数 Function
function hello(name: string='李知恩'): string {
	return `Hello, ${name}`;
}
console.log(hello('IU'));

// 第二个string为返回值类型
let nihao =(name: string): string => 'Hello,' + name;
console.log(nihao('小姐姐'));

let obj = {a: 1, b: 1};

// function add(obj) {
// 	return obj.a + obj.b;
// }

let add = ({a, b}:{a: number, b: number}) => a + b;
console.log(add(obj));



//3. Class
class Person {
	//name: string;
	//public name: string; //默认public
	//private name: string;
	protected name: string;

	// 构造函数，实例化的一瞬间被执行
	constructor(name: string) {
		this.name = name;
	}

	greet() {
		return `Welcome ${this.name}！`;
	}
}
let xiaohong = new Person('小红');
console.log(xiaohong.greet());



// 类的继承
// Student 继承了 Person 的属性
class Student extends Person {
	//major: string;
	private major: string;

	constructor(name: string, major: string) {
		super(name);
		this.major = major;
	}
	studentGreet() {
		return `${this.major}系的${this.name}向你问好。`;
	}
}

let xiaoming = new Student('小明', '哲学');
console.log(xiaoming.studentGreet());