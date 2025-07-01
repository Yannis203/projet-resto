// code appscript

function doPost(e) {
  const nom = e.parameter.nom;
  const email = e.parameter.email;
  const table = e.parameter.table;
  const date = e.parameter.date;
  const time = e.parameter.time ;
  const nbr_personne = e.parameter.nbr_personne;
  const text = `Merci ${nom} , votre réservation a été confirmée avec succès.\n Détails: \n Email:${email}, \n Table: ${table}, \n Date: ${date}, \n Heure: ${time}, \n Nombre de personnes : ${nbr_personne} `;
  const texto = `Merci ${nom} , votre réservation a été a été confirmée avec succès.\n Un e-mail de confirmation avec les détails vous a été envoyé. `

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Réservations")
                || SpreadsheetApp.getActiveSpreadsheet().insertSheet("Réservations");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Nom", "Email","Nbr_personne", "Date", "Table","Time"]);
  }

  sheet.appendRow([nom, email, nbr_personne, date, table, time]);
  // Envoi d'email de confirmation
  MailApp.sendEmail(email,"Merci d'avoir réservé chez TᕼE ᗷIᒪᒪIOᑎᗩIᖇE",text);
  return ContentService
    .createTextOutput( texto);
    
}
