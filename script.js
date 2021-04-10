let navBarIcon = document.querySelector('.navBarIcon')
let navIcon = document.querySelectorAll('.navIcon')
let navLinks = document.querySelector('.nav-links')

navBarIcon.addEventListener('click', () => {
    // navLinks.classList.toggle('show')
})

const navlinks = document.querySelectorAll('.nav-links a');

for (let i = 0; i < navlinks.length; i++){
    navlinks[i].addEventListener("click", ()=>{
        navLinks.classList.remove('show')
  });
}

for (let i = 0; i < navIcon.length; i++){
    navIcon[i].addEventListener("click", ()=>{
        navLinks.classList.toggle('show')
  });
}

window.addEventListener('click', () => {
    if(event.target == navLinks || event.target.parentNode == navBarIcon || event.target == navIcon ) {
        
    } else {
        navLinks.classList.remove('show')
    }
})


