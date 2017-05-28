// 参数类型
var myName = "Mai";
// 修改为其他类型值时会报错，但仍可编译成js，因js是弱类型
var age = 13;
var man = true;
// 可以重新赋予任何类型的值
var alias = "summer";
// 声明函数不需要任何返回值
function test1() {
}
// 声明函数参数为字符串，返回值为字符串
function test2(name) {
    return "";
}
test2(""); // 参数只能是字符串类型
// 自定义类型
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var zhang = new Person();
zhang.name = "zhang";
zhang.age = 20;
// 参数默认值
function test3(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test3("aaa", "bbb"); // aaa bbb jojo
// 可选参数
function test4(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test4("aaa"); // aaa undefined jojo
