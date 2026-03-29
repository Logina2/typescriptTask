interface User {
    name: string;
    age: number;
}
let user1: Partial<User> = {
    name: "Logina",
};

console.log("User:", user1);



interface Profile {
    username?: string;
    email?: string;
}

let profile1: Profile = {
    username: "logina",
    email: "logyesmaeil@gmail.com",
};

console.log("Profile:", profile1);


let colors: Record<"red" | "green" | "blue", string> = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};

console.log("Red color:", colors.red);


interface Person {
    name: string;
    age: number;
    email: string;
}

type PersonNameEmail = Pick<Person, "name" | "email">;

let p1: PersonNameEmail = {
    name: "Rana",
    email: "rana@gmail.com",
};

console.log("Person Pick:", p1);


type PersonWithoutAge = Omit<Person, "age">;

let p2: PersonWithoutAge = {
    name: "Ahmed",
    email: "ahmed@gmail.com",
};

console.log("Person Omit:", p2);

type Colors = "red" | "green" | "blue" | "yellow";
type ColorsWithoutYellow = Exclude<Colors, "yellow">;
let c1: ColorsWithoutYellow = "red";
console.log("Exclude:", c1);


type OnlyRedBlue = Extract<Colors, "red" | "blue">;
let c2: OnlyRedBlue = "blue";
console.log("Extract:", c2);

type MaybeString = string | null | undefined;
type OnlyString = NonNullable<MaybeString>;
let str: OnlyString = "hello";
console.log("NonNullable:", str);

function runTests() {
    console.log(colors.red === "#ff0000" ? "Test 1 Passed " : "Test 1 Failed ");
    console.log(
        typeof user1.name === "string" ? "Test 2 Passed " : "Test 2 Failed ",
    );
    console.log(c1 === "red" ? "Test 3 Passed " : "Test 3 Failed ");
}
runTests();