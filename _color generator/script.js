// console.log(-1)

let colorCodes=[0, 1, 2, 3, 4 , 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
let display= document.getElementById('display')
let colorUnit = document.getElementById("color-unit")

const changeColor =() => {
    let colorCode = '#'
    
    for (let i=0; i<6; i++){
        let RandNo =Math.floor(Math.random()*16)
        colorCode +=colorCodes[RandNo]
    }
    display.style.backgroundColor = colorCode
    colorUnit.innerHTML = colorCode
}