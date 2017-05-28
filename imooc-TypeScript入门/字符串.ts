//字符串

//1.多行字符串
var str = `aaa
bbb
ccc`;
console.log(str);



//2.字符串模板
var myName = "My name is Magic.";
var getName = function () {
	return "get my name: Magic.";
}
console.log(`Hello, ${myName}`);
console.log(`Here, ${getName()}`);

console.log(`<div>
	<span>${myName}</span>
	<span>${getName()}</span>
	<div>是不是很酷~</div>
</div>`);



//3.自动拆分字符串
function test(tpl, name, age) {
	console.log(tpl);
	console.log(name);
	console.log(age);
}
var yourName = "Black";
var getAge = function () {
	return 18;
}

//调用，不写圆括号
//评估模板的值，放入test()
test `Hello, your name is ${yourName}, you're ${getAge()}`;
//["Hello, my name is ", ", I'm ", ""] 20 18
