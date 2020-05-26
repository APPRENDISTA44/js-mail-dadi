//variabili con valore dado
var punteggioGiocatore = Math.floor(Math.random() *6) +1;
var punteggioPc = Math.floor(Math.random() *6) +1;

//mi aggancio all'html
var risposta = document.getElementById('risposta');

//valuto i casi
if (punteggioGiocatore == punteggioPc ) {
  risposta.innerHTML = 'Giocatore: ' +  punteggioGiocatore + ' Computer: ' + punteggioPc +' Pareggio!';
} else if (punteggioGiocatore > punteggioPc) {
  risposta.innerHTML = 'Giocatore: ' +  punteggioGiocatore + ' Computer: ' + punteggioPc + ' Hai vinto!';

}else if (punteggioGiocatore < punteggioPc) {
  risposta.innerHTML = 'Giocatore: ' +  punteggioGiocatore + ' Computer: ' + punteggioPc + ' Hai perso...';

}
