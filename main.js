

// const icon = document.querySelector("#icon")
// const x = document.querySelector("#x")
// const menu = document.querySelector("#menu")

// icon.addEventListener("click",() =>{
//     menu.style.display = "block"

//     icon.style.display = "none"
//     x.style.display = "block"
// })

// x.addEventListener("click" , () => {
//     menu.style.display = "none"

//     icon.style.display = "block"
//     x.style.display = "none"
    
// })

const icon = document.querySelector("#icon")
const menu = document.querySelector("#menu")
const explore = document.querySelector("#explore")
const count = document.querySelector("#count")
const countm = document.querySelector("#countm")
 let startvalue =(0);

icon.addEventListener("click" ,() =>{
    menu.classList.toggle("hidden")
})

explore.addEventListener("click" ,() =>{
    startvalue ++;
    count.innerHTML=startvalue
    countm.innerHTML=startvalue

    // menu.classList.toggle("hidden")
})

