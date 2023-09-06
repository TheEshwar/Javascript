const radius = [1,40,12,22]

const calculateRadius = function(radius){
    const output = []

    for(let i =0; i< radius.length; i++)
    {
        output.push(Math.PI*radius[i]*radius[i])
    }
    return output
}

console.log(calculateRadius(radius));