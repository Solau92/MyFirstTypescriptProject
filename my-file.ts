/* function addition(x: number, y: number):number {
    return x + y;
}
const result = addition(10, 20);
console.log(result); */

function sayHello(target: { firstName: string, money: number }): string {
    return `Hello ${target.firstName}, you have ${target.money} on your bank account.`;
 }

 const message: string = sayHello({ firstName: 'World', money: 123 });

export{}