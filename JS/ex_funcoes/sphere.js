// This code calculates the area and volume of a sphere of radius r.
function r(){
    return Math.floor(Math.random() * 100) + 1
}
let radius = r()
// Arrow function that returns the area:
let area = radius => (4*Math.PI*radius**2).toFixed(2)
console.log(`Area of a sphere of radius ${radius} = ${area(radius)} `)

// Function that return the volume:
function vol(radius){
    return (4/3*Math.PI*radius**3).toFixed(2)
}
let volume = vol(radius)
console.log(`Volume of a sphere of radius ${radius} = ${volume} `)