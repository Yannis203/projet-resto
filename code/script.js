// Partie front-end du projet (menu burger responsive)
const menuHumberger=document.querySelector('.menu-icon');
const menu =document.querySelector('.onglets');
const liens=document.querySelectorAll('.onglets a');
menuHumberger.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu',);
    body.classList.toggle("no_scroll")
})
liens.forEach(link =>{
    link.addEventListener('click',() =>{
        menu.classList.remove('mobile-menu');
    }
)
}

)

const body = document.querySelector('body');
