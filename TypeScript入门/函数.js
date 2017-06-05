// 函数
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function func() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
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
func1.apply(void 0, args); //ts报错 //1 2 undefined
var args2 = [11, 12, 13, 14, 15];
func1.apply(void 0, args2); // 11 12 13
// generator 生成器函数，返回一个 Generator 对象
function doSomething() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("start");
                return [4 /*yield*/];
            case 1:
                _a.sent(); // 第一次调用，停在此处
                console.log("finish");
                return [2 /*return*/];
        }
    });
}
var f2 = doSomething();
f2.next();
f2.next();
// 复杂一点
function getStockPrice(stock) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 2];
                return [4 /*yield*/, Math.random() * 100];
            case 1:
                _a.sent();
                return [3 /*break*/, 0];
            case 2: return [2 /*return*/];
        }
    });
}
var priceGenerator = getStockPrice("IBM");
var limitPrice = 15;
var price = 100;
while (price > limitPrice) {
    price = priceGenerator.next().value;
    console.log("the generator return " + price);
}
// 解构
function getStock() {
    return {
        code: "IBM",
        price: {
            price1: 100,
            price2: 400
        }
    };
}
var _a = getStock(), codex = _a.code, price2 = _a.price.price2;
console.log(codex);
console.log(price);
// 数组解构
var array1 = [1, 2, 3, 4];
var n1 = array1[0], n2 = array1[1];
console.log(n1);
console.log(n2);
var n3 = array1[2], n4 = array1[3];
console.log(n3);
console.log(n4);
var x = array1[0], y = array1[1], others = array1.slice(2);
console.log(x);
console.log(y);
console.log(others); // 1 2 [3, 4]
function func2(_a) {
    var x = _a[0], y = _a[1], others = _a.slice(2);
    console.log(x);
    console.log(y);
    console.log(others);
}
func2(array1); // 1 2 [3, 4]
