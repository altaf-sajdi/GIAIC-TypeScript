//  Function overloading is a TypeScript feature that lets us define a function that accepts different kinds of arguments.



function func_overload(a:number,b:number):number
function func_overload (a:string,b:string) :string

function func_overload(a:any,b:any) {
    return a+b
}

let a=func_overload("altaf", "{age,35,class,giaic");
let b : number =func_overload(12,34);


console.log(a," ",b)
