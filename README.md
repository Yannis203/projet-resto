# TᕼE ᗷIᒪᒪIOᑎᗩIᖇE
*Réservez en ligne , savourez sur place *

Bienvenue dans notre application web de réservation de restaurant, une solution simple, intuitive et moderne conçue pour faciliter la gestion des réservations aussi bien pour les clients que pour les restaurateurs.

Cette plateforme a été imaginée pour répondre aux besoins concrets d’un restaurant souhaitant digitaliser une partie essentielle de son activité : la prise de réservation. Grâce à cette application, les clients peuvent désormais réserver une table en quelques clics, sans avoir à se déplacer ou à passer de longs appels. L’objectif est d’offrir une expérience fluide, rapide et agréable, tant pour les utilisateurs que pour le personnel du restaurant.

---

## Fonctionnalités

	- Réservation en ligne : Permet aux clients de réserver une table en quelques clics, à tout moment.
	- Formulaire interactif : Saisie des informations essentielles : nom, prénom, email, téléphone, date, heure et nombre de personnes.
	- Envoi d’email automatique : Confirmation envoyée par mail avec tous les détails de la réservation, grâce à Google Apps Script.
	- Stockage des données sur Google Sheets : Toutes les réservations sont enregistrées automatiquement dans un tableau organisé en ligne.
	- Interface responsive : Application accessible depuis un ordinateur, une tablette ou un smartphone.
	- Design simple et épuré : Expérience utilisateur fluide et agréable, sans distraction.
	- Respect de la vie privée : Aucune information sensible n’est partagée ; les données sont stockées de manière sécurisée

---

## Installation

### Prérequis

- Un compte Google
- Une feuille Google Sheets nommée "Réservations"
- Accès à l'éditeur **Google Apps Script**
- Un navigateur web moderne

---

### 1. Cloner ou copier le projet

- Placer les fichiers du projet dans le dossier `project/` :
  - Le formulaire HTML
  - Les éventuels fichiers CSS ou JavaScript associés

---

### 2. Configuration de la feuille Google Sheets

- Créer une nouvelle feuille Google Sheets
- La nommer **Réservations**
- Ajouter les colonnes nécessaires : Nom, Email, Personnes, Date, Table, Heure

---

### 3. Configuration du script Apps Script

- Depuis la feuille Google Sheets, ouvrir **Extensions > Apps Script**
- Créer un script Apps Script qui reçoit les données et les enregistre
- Ajouter une fonction d’envoi d’e-mail de confirmation
- Déployer le script en tant qu’**application web accessible à tous**

---

## Structure du projet

projet_Resto/
│
┣ 📂 project/ # Code source principal du projet
     ┗📂image
┃ ┗ 📄 index.html 
  ┗ 📄 menu.html  
  ┗ 📄 galerie.html 
  ┗ 📄 table.html 
  ┗ 📄 contact.html 
  ┗ 📄 Appscript.js 
  ┗ 📄 script.js 
  ┗ 📄 reservation.html 
  ┗ 📄 style.css 
┃
┣ 📂 docs/ # Documentation
┃ ┗ 📄 cahier-de-charge.pdf # Cahier des charges au format PDF
┃
┣ 📄 README.md # Présentation du projet


---

## Guide d’utilisation

1. L’utilisateur accède au formulaire via le fichier `reservation.html`
2. Il remplit ses informations (nom, email, date, etc.)
3. Lorsqu’il valide, ses données sont transmises à Google Sheets
4. Il reçoit un e-mail de confirmation automatique
5. Si l’utilisateur entre un mot de passe (prévu dans la même page), les détails des réservations s’affichent

---

## Auteur

Ce projet a été conçu et développé par :

- **Yannis Lubamba**
- Étudiant en L1 LMD FASI
- Email:lubambayannis@gmail.com
- Contact : +243 837698324

N’hésitez pas à me contacter pour toute suggestion ou amélioration du projet.
