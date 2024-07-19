function func_overload(a, b) {
    return a + b;
}
var a = func_overload("altaf", "{age,35,class,giaic");
var b = func_overload(12, 34);
console.log(a, " ", b);
