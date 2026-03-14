function printUserInfo(name: string, age: number, email?: string): void{
    if (email !== undefined) {
        console.log("Name:", name);
        console.log("Age:", age);
         console.log("Email:", email);
    } else {
        console.log("Name:", name);
        console.log("Age:", age);
    }
}