function balanceBracket(expr) {

    console.log(expr.length);
    if (expr.length === 0) {
        return false;
    }

    const arr = [];
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === "(" || expr[i] === "[" || expr[i] === "{") {
            arr.push(expr[i]);
        }

        let check;

        if (expr[i] === ")") {
            check = arr.pop();
            if (check !== "(") {
                return false;
            }
        } else if (expr[i] === "]") {
            check = arr.pop();
            if (check !== "[") {
                return false;
            }
        } else if (expr[i] === "}") {
            check = arr.pop();
            if (check !== "{") {
                return false;
            }
        }
    }
    return true;
}


let exp = "([]{()}[])[]";
let exp2 = "()";

console.log(balanceBracket(exp));
