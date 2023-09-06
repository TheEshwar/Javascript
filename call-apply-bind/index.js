let name = {
    firstname: "Eshwar",
    lastname: "Deshmukh",
}
let printFullName = function(city){
    console.log("\n full name :- ", this.firstname, this.lastname, city);
}
// printFullName.call(name, "Pune")

let name2 = {
    firstname: "Kishor",
    lastname: "Deshmukh"
}

// function borrowing
// printFullName.call(name2, "Pune")

printFullName.apply(name2, ["Pune"])

let fullName = printFullName.bind(name2, "Pune")
let fullName2 = printFullName.bind(name, "Pune")

console.log('bind method :- ', fullName);
fullName()
fullName2()