// 函数

function func(...args) {
	args.forEach(function(arg) {
		console.log(arg);
	})
}
func(1, 2, 3);
func(11, 12, 13, 14, 15);



//ts暂不支持语法
function func1(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
var args = [1, 2]; 
func1(...args); //ts报错 //1 2 undefined

var args2 = [11, 12, 13, 14, 15]; 
func1(...args2); // 11 12 13



// generator 生成器函数，返回一个 Generator 对象
function* doSomething() {
	console.log("start");
	yield; // 第一次调用，停在此处

	console.log("finish");
}
var f2 = doSomething();
f2.next();
f2.next();


// 复杂一点
function* getStockPrice(stock) {
	while(true) {
		yield Math.random()*100;
	}
}
var priceGenerator = getStockPrice("IBM");
var limitPrice = 15;
var price = 100;
while(price > limitPrice) {
	price = priceGenerator.next().value;
	console.log(`the generator return ${price}`);
}



// 解构
function getStock() {
	return {
		code: "IBM",
		price: {
			price1: 100,
			price2: 400
		}
	}
}
var {code: codex, price: {price2}} = getStock();
console.log(codex);
console.log(price);



// 数组解构
var array1 = [1, 2, 3, 4];

var [n1, n2] = array1;
console.log(n1); 
console.log(n2); 

var [, , n3, n4] = array1;
console.log(n3); 
console.log(n4);

var [x, y, ...others] = array1;
console.log(x); 
console.log(y);
console.log(others); // 1 2 [3, 4]


function func2([x, y, ...others]) {
	console.log(x); 
	console.log(y);
	console.log(others);
}
func2(array1); // 1 2 [3, 4]
