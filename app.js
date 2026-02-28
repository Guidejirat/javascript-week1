const prompt = require("prompt-sync")();

let name = prompt("กรุณาใส่ชื่อของคุณ: ");
let birthYear = prompt("กรุณาใส่ปีเกิด (ค.ศ.): ");

let currentYear = new Date().getFullYear();
let age = currentYear - Number(birthYear);

console.log("สวัสดีคุณ " + name + " 👋");
console.log("ปีนี้คุณอายุประมาณ " + age + " ปี");

console.log("ยินดีต้อนรับเข้าสู่โปรแกรม");