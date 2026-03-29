"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    name: "Logina",
};
console.log("User:", user1);
let profile1 = {
    username: "logina",
    email: "logyesmaeil@gmail.com",
};
console.log("Profile:", profile1);
let colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};
console.log("Red color:", colors.red);
let p1 = {
    name: "Rana",
    email: "rana@gmail.com",
};
console.log("Person Pick:", p1);
let p2 = {
    name: "Ahmed",
    email: "ahmed@gmail.com",
};
console.log("Person Omit:", p2);
let c1 = "red";
console.log("Exclude:", c1);
let c2 = "blue";
console.log("Extract:", c2);
let str = "hello";
console.log("NonNullable:", str);
function runTests() {
    console.log(colors.red === "#ff0000" ? "Test 1 Passed " : "Test 1 Failed ");
    console.log(typeof user1.name === "string" ? "Test 2 Passed " : "Test 2 Failed ");
    console.log(c1 === "red" ? "Test 3 Passed " : "Test 3 Failed ");
}
runTests();
//# sourceMappingURL=script.js.map