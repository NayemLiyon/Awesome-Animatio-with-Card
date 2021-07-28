let container = document.querySelector('.container')
let card = document.querySelector('.card')

//select item for scaling
let boote = document.querySelector('#imge img')
let title = document.querySelector('.title')
let dtails = document.getElementById('dtails')
let btn = document.querySelectorAll('.btn')

let parches = document.querySelector('.purchse')
//Animation
container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX)/15
    let yAxis = (window.innerHeight / 2 - e.pageY)/15
    card.style.transform =  `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
   
})
// card.addEventListener

//mouse enter
card.addEventListener('mouseenter',(e)=>{
    card.style.transition = 'none'
    boote.style.transform = "translateZ(140px) rotate(-45deg)"
    title.style.transform = 'translateZ(100px)'
    dtails.style.transform = 'translateZ(70px)'
    parches.style.transform = 'translateZ(50px)'
    for (item of btn ){
        item.style.transform = 'translateZ(50px)'
    }

})
//mouse leave
container.addEventListener('mouseleave',(e)=>{
    card.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`
    card.style.transition = 'all .5s ease'
    boote.style.transform = "translateZ(0) rotate(0deg)"
    title.style.transform = 'translateZ(0px)'
    dtails.style.transform = 'translateZ(0px)'
    parches.style.transform = 'translateZ(0px)'
    for (item of btn ){
        item.style.transform = 'translateZ(0px)'
    }

})