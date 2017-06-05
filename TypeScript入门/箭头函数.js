// 箭头函数, 可解决匿名函数声明里this关键字问题
// 单行 
var f1 = function (a1, a2) { return a1 + a2; };
// 多行
var f2 = function (a1, a2) {
    return a1 + a2;
};
// 没有参数
var f3 = function () { };
// 一个参数
var f4 = function (arg) {
    console.log(arg);
};
// 使用
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.filter(function (value) { return value % 2 === 0; })); //2 4
// this
function getStock(name) {
    var _this = this;
    this.name = name;
    setTimeout(function () {
        console.log("name:", _this.name);
    }, 1000);
}
var stock = new getStock("IBM"); // name: IBM
// 新增：for of
var myArray = [1, 2, 3, 4];
myArray.desc = "four number";
// Array.forEach() —— 针对数组中的值
myArray.forEach(function (value) { return console.log(value); }); // 1 2 3 4
// for in —— 遍历对象属性名称，数组中为下标
for (var i in myArray) {
    console.log(i); // 0 1 2 3 desc
    //遍历所有属性值
    console.log(myArray[i]); // 1 2 3 4 four number
}
//for of —— 遍历属性值
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var j = myArray_1[_i];
    console.log(j); // 1 2 3 4
}
