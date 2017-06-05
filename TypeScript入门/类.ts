// 类

// 访问控制符：控制是否能在类外部被访问
class Person {
	name; 
	//private name; //私有的，不能被外部访问
	public age; // 默认public
	protected sex; //类的内部和子类可以访问
	private eat() {
		//console.log(name); //这里可以访问name属性
		console.log(this.name); 
		console.log("I am eating.");
	}
}

//类的实例化
var p1 = new Person(); 
p1.name = "Ling";
p1.eat();

var p2 = new Person();
p2.name = "Ying";
p2.eat();



// 构造函数
// 在类实例化时立即被调用，只能调用一次
class Person1 {
	name;
	constructor(name: string) {
		// console.log("haha"); //外部不能访问的函数
		this.name = name;
	}
	// 简化写法,public声明了name属性：
	// constructor(public name: string) {
	// }

	getName() {
		console.log(this.name);
	}
}
var p3 = new Person1("Lala"); //实例化时要指定字符串名字
p3.getName();



// 类的继承：extends
// 类的关键字：super： 
//①调父类的构造函数super() 
//②调用父类的其他方法super.xxx

class Employee extends Person1 {
	code: string;
	constructor(name: string, code: string){
		// 子类的构造函数必须调用父类的构造函数
		super(name);
		this.code = code;
	}	
	work() {
		super.getName();
		this.doWork();
	}
	private doWork() {
		console.log("I am working!");
	}
}

var e1 = new Employee("Kuku", "1");
e1.getName();
e1.work();



// 泛型：参数化的类型，限制集合的内容
var workers: Array<Person1> = [];
workers[0] = new Person1("Ming");
workers[1] = new Employee("Lili", "2");
//workers[2] = 2; //报错，类型不对
console.log(workers);