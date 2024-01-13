"use strict";
/* function addition(x: number, y: number):number {
    return x + y;
}
const result = addition(10, 20);
console.log(result); */
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(target) {
    return "Hello ".concat(target.firstName, ", you have ").concat(target.money, " on your bank account.");
}
var message = sayHello({ firstName: 'World', money: 123 });
