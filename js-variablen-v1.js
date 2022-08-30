* Unicode text, UTF-8 text, with CRLF line terminators
/*********************************************************/
/** ******** BEGINN VARIABLEN INITIALISSIERUNG ******** **/
/*********************************************************/
/* +++ KONSTANTEN +++ */
// Anzahl der WÃ¼rfel
const ANZAHL_WURFEL = 5;

/* +++ VARIABLEN +++ */
// Klickcounter
var clickcounter = 0;

// Wurde gewÃ¼rfelt?
var gewurfelt_b = false;

// RundenzÃ¤hler - Variable
var runde = 0; //wÃ¼rfeln + stehen lassen = runde
var wurf = 0; //wie oft wurde gewÃ¼rfelt

// Zugspieler fÃ¼r Zuweisung der Punkte
var spielerAmZug = 1;

// Spielernummer
var spieler_button_nr = 0;

// ID-Zuweisungen
var wurfel1 = document.getElementById('wurfel1');
var wurfel2 = document.getElementById('wurfel2');
var wurfel3 = document.getElementById('wurfel3');
var wurfel4 = document.getElementById('wurfel4');
var wurfel5 = document.getElementById('wurfel5');

var wurfel1alt = document.getElementById("wurfel1alt");
var wurfel2alt = document.getElementById("wurfel2alt");
var wurfel3alt = document.getElementById("wurfel3alt");
var wurfel4alt = document.getElementById("wurfel4alt");
var wurfel5alt = document.getElementById("wurfel5alt");

var wurfel_satz1_alt = document.getElementById("wurfel_satz1_alt");
var wurfel_satz2_alt = document.getElementById("wurfel_satz2_alt");
var wurfel_satz3_alt = document.getElementById("wurfel_satz3_alt");
var wurfel_satz4_alt = document.getElementById("wurfel_satz4_alt");
var wurfel_satz5_alt = document.getElementById("wurfel_satz5_alt");

// PunktestÃ¤nde der Spieler
var punkteSpielerEins = document.getElementById("punkteSpielerEins").innerHTML;
var punkteSpielerZwei = document.getElementById("punkteSpielerZwei").innerHTML;
var punkteSpielerDrei = document.getElementById("punkteSpielerDrei").innerHTML;
var punkteSpielerVier = document.getElementById("punkteSpielerVier").innerHTML;

// Aktueller Punktestand ("grÃ¼ne Box")
var punkteAktuell = document.getElementById("punkteAktuell").innerHTML;

// temporÃ¤re Punkte (zum Ãœbertrag)
var punkteTransfer = 0;

// Boolean fÃ¼r freie WÃ¼rfel
var wurfel1_b = true;
var wurfel2_b = true;
var wurfel3_b = true;
var wurfel4_b = true;
var wurfel5_b = true;

// Boolean ob WÃ¼rfel gesetzt werden kÃ¶nnen
var wurfel1_setzen_b = true;
var wurfel2_setzen_b = true;
var wurfel3_setzen_b = true;
var wurfel4_setzen_b = true;
var wurfel5_setzen_b = true;

// Variable um wÃ¼rfel identifizieren zu kÃ¶nnen
var wurfel_nummer_pasch = 0;

// Variable fÃ¼r den Wurfel, der gesetzt werden soll
var wurfel_nummer_wurfelEvent = 0;
var wurfel_nummer_einzelwurfelPruf = 0;
var wurfel_nummer_strasse = 0;

// Boolean ob Spieler Zugende erreicht hat
var spielerZugEnde_b = false;

//Array fÃ¼r WÃ¼rfelwert auf dem Tisch (Button.value)
var wurfel_array = [0];
var sort_array = [0]; //sortiert
var pruf_array = [true]; //prÃ¼f-array ob wÃ¼rfel zufallszahl bekommt
for (let i = 0; i < 5; i++) {
    pruf_array[i] = true;
}

//Variable fÃ¼r den Wert des PaschwÃ¼rfels
var pasch_wurfel = 7; //7, da bei nichtgesetzte WÃ¼rfel auch mit 0 im Array stehen.

//Kontrollvariable, um die Punkte fÃ¼r einen Pasch nur einmal zu zÃ¤hlen
var pasch_punkte_kontrolle = 0;

//Kontrollvariable fÃ¼r WÃ¼rfelsetzen bei Pasch mit mehr als 3 WÃ¼rfeln
var pasch_setzen_pruf = 0;

//PrÃ¼fvariablen
var pasch_pruf_b = false; //Boolean ob ein Pasch auf dem Tisch liegt
var strasse_pruf_b = false; //Boolean ob eine StraÃŸe auf dem Tisch liegt
var spielEnde_pruf_b = false; // Boolean ob das Spiel zu Ende ist

//Boolean ob der WÃ¼rfel 1 oder 5 zeigt
var wurfel_default_setzen_b = false;

//Array fÃ¼r Punkteauswertung
var punkte_array = [0];

//Counter fÃ¼r PunkteÃ¼bertrag
var punkte_counter = 0;

//Boolean fÃ¼r Punkteauswertung bei PÃ¤schen
var pasch_punkte_b = true;

// Punkte auf dem Tisch (0er Linie)
var wurfelWertAufDemTisch = 0;

// sonstige Variable
var x = 0;

// reset Funktionskontrolle
var reset_b = false;

/*********************************************************/
/** ********* ENDE VARIABLEN INITIALISSIERUNG ********* **/
/*********************************************************/
