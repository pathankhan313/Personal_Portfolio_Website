// console.log('Hello');

let burger = document.querySelector('.burger');
let nav_list = document.querySelector('.list-items');
let logo = document.querySelector('.logo');

let navbar = document.querySelector('.container')

let line1 = document.querySelectorAll('.line')[0];
let line2 = document.querySelectorAll('.line')[1];
let line3 = document.querySelectorAll('.line')[2];


window.addEventListener('load',()=>{
    const loading = document.querySelector('#loading')
    loading.style.display = 'none'
})


burger.addEventListener('click', () =>{
    nav_list.classList.toggle('v-hidden-resp')
    logo.classList.toggle('v-hidden-resp')
    navbar.classList.toggle('h-resp')

    if (burger.classList.contains('line1')) {
        burger.classList.remove('line1')
        line1.style.transform = 'rotate(0deg)'
        line1.style.top = '0px'
        line3.style.transform = 'rotate(0deg)'
        line2.style.display = 'block'
    }

    else {
        line3.style.transform = 'rotate(-45deg)'
        line1.style.transform = 'rotate(45deg)'
        line1.style.position = 'relative'
        line2.style.display = 'none'
        line1.style.top = '7px'
        burger.classList.add('line1')

    }
});

// const scroll_change = () => {
//     let top = window.scrollY;
//     // console.log(top);
//     if (top>=30) {
//         navbar.classList.add('active')
//     } else {
//         navbar.classList.remove('active')
        
//     }
// }
// window.addEventListener('scroll',scroll_change)