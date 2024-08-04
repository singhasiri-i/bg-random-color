// ทำให้มัน random เปลี่ยนสีทุกครั้งที่ click ปุ่ม

const pTag = document.querySelector('#color')

const btnTag = document.querySelector('#btn')

// btnTag.addEventListener("click", function() {
//     let r = Math.floor(Math.random() * 255)
//     let g = Math.floor(Math.random() * 255)
//     let b = Math.floor(Math.random() * 255)
//     let color = `rgb(${r},${g},${b})`

//     document.body.style.backgroundColor = color
//     console.log(color);

//     pTag.innerText = color
// })


// อีกวิธีคือ สามารถเขียน function random แยกกับ event click 
// แล้วให้มัน log code อีกที

btnTag.addEventListener("click", function() {
    let newColor = randomColor()
    document.body.style.backgroundColor = newColor
    console.log(newColor);

    pTag.innerText = newColor
})

function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let color = `rgb(${r},${g},${b})`

    return color
}
