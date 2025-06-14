// Partie front-end du projet (menu burger responsive)
const menuHumberger=document.querySelector('.menu-icon');
const menu =document.querySelector('.onglets');
const liens=document.querySelectorAll('.onglets a');
menuHumberger.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu',);
})
liens.forEach(link =>{
    link.addEventListener('click',() =>{
        menu.classList.remove('mobile-menu');
    }
)
}

)


// // Partie backend du projet (avec appdcript )
// document.getElementById("reservation-form").addEventListener("submit", function(event) {
//   event.preventDefault(); // Empêche le rechargement de la page

//   Récupération des données du formulaire
//   const nom = document.getElementById("nom").value;
//   const email = document.getElementById("email").value;
//   const date = document.getElementById("date").value;
//   const table = document.getElementById("table").value;

//   // Envoi des données vers Apps Script (backend)
//   fetch("https://script.google.com/macros/s/AKfycbz3xVWmh_QIxy-jc3oWJSmL7nLDoZFZW2rB2C5QQdFRzJiSj5QJetesp8J2NzztDe46/exec", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ nom, email, date, table }),
//   })
//   .then(response => response.json())
//   .then(data => {
//     document.getElementById("message").textContent = data.message;
//   })
//   .catch(error => {
//     document.getElementById("message").textContent = "Erreur lors de l’envoi ";
//     console.error("Erreur : ", error);
//   });
// });

