// 接口 Interface

// 用法1：接口是方法的参数的类型声明
interface IPerson {
	name: string;
	age: number;
}

class Person {
	constructor(public config: IPerson) {
	}
}

var p1 = new Person({
	name: "zhang", // 与接口声明一致
	age: 12
});


// 用法2：在接口声明方法，实现接口的类要实现接口的方法
interface Animal {
	eat();
}

// 类实现接口
class Sheep implements Animal {
	eat() {
		console.log("I eat grass.");
	}
}

class Tiger implements Animal {
	eat() {
		console.log("I eat meat!");
	}
}