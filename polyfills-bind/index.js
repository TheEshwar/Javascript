let name = {
    firstname: "Eshwar",
    lastname: "Deshmukh"
}

let printName = function (homeTown, state) {
    console.log(this.firstname + " " + this.lastname + " " + homeTown + " " + state);
}

let printMyName1 = printName.bind(name, "Pune", "Maharashtra")
printMyName1()

Function.prototype.mybind = function (...args) {
    let obj = this,
        params = args.slice(1)

    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let printMyName2 = printName.mybind(name, "Pune", "Maharashtra")
printMyName2()