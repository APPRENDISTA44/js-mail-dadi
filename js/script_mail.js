//lista mail
var lista = ['carlo@libero.it','franco@gmail.com','ernesto@mail.com','luca@alice.it'];
//inizializzo variabile falsa
var presente = false;

//chiedo all'utente la gmail
var mail = prompt('Inserisci la mail:');

//controllo la lista per corrispondenza
for (var i = 0; i < lista.length; i++) {
  if (mail == lista[i]) {
    presente = true;
  }
}
//se l'ho trovata...
if (presente) {
  document.getElementById('risposta').innerHTML = 'La mail è stata trovata!'
}else {
  document.getElementById('risposta').innerHTML = 'La mail NON è stata trovata!'
}
