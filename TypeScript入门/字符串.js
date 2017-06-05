//字符串
//1.多行字符串
var str = "aaa\nbbb\nccc";
console.log(str);
//2.字符串模板
var myName = "My name is Magic.";
var getName = function () {
    return "get my name: Magic.";
};
console.log("Hello, " + myName);
console.log("Here, " + getName());
console.log("<div>\n\t<span>" + myName + "</span>\n\t<span>" + getName() + "</span>\n\t<div>\u662F\u4E0D\u662F\u5F88\u9177~</div>\n</div>");
//3.自动拆分字符串
function test(tpl, name, age) {
    console.log(tpl);
    console.log(name);
    console.log(age);
}
var yourName = "Black";
var getAge = function () {
    return 18;
};
//调用，不写圆括号
//评估模板的值，放入test()
(_a = ["Hello, your name is ", ", you're ", ""], _a.raw = ["Hello, your name is ", ", you're ", ""], test(_a, yourName, getAge()));
var _a;
//["Hello, my name is ", ", I'm ", ""] 20 18
