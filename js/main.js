// Ré-actualise la page toutes les 5 secondes
function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

$(document).ready(function () {

	// Variables de temps 
	var now = new Date();

	var heure = now.getHours();
	var minute = now.getMinutes();
	var seconde = now.getSeconds();

	// Gestion des heures du matin et de l'apprès midi
	// -----------------------------------------------

	// Heures du matin (AM) 
	if (heure == 0 ||
		heure == 1 ||
		heure == 2 ||
		heure == 3 ||
		heure == 4 ||
		heure == 5 ||
		heure == 6 ||
		heure == 7 || 
		heure == 8 || 
		heure == 9 || 
		heure == 10 ||
		heure == 11 ) {
		$('.am').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Heures du matin (PM)
	if (heure == 12 ||
		heure == 13 ||
		heure == 14 ||
		heure == 15 ||
		heure == 16 ||
		heure == 17 ||
		heure == 18 ||
		heure == 19 ||
		heure == 20 || 
		heure == 21 || 
		heure == 22 || 
		heure == 23 ) {
		$('.pm').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion des 5 minutes
	// ---------------------

	if (minute >= 4 && minute < 9) {
		$('.cinq-2').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion des 10 minutes
	// ----------------------

	if (minute >= 9 && minute < 14) {
		$('.dix').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du quart d'heure
	// ------------------------

	if (minute >= 14 && minute < 19) {
		$('.et').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.quart').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du 20 minutes
	// ---------------------

	if (minute >= 19 && minute < 24) {
		$('.vingt').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du 25 minutes
	// ---------------------

	if (minute >= 24 && minute < 29) {
		$('.vingt').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.vingtcinq').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion de la demi Heure
	// ------------------------

	if (minute >= 29 && minute < 34) {
		$('.et').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.demie').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du moins 25 minutes
	// ---------------------------

	if (minute >= 34 && minute < 39) {
		$('.moins').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.vingt').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.vingtcinq').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du moins 20 minutes
	// ---------------------------

	if (minute >= 39 && minute < 44) {
		$('.moins').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.vingt').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du moins le quart
	// ---------------------------

	if (minute >= 44 && minute < 49) {
		$('.moins').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.le').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.quart').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du moins 10
	// -------------------

	if (minute >= 49 && minute < 54) {
		$('.moins').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.dix').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du moins 5
	// ------------------

	if (minute >= 54 && minute < 59) {
		$('.moins').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.cinq-2').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};


	// Gestion des heures
	// ------------------
	if ((heure == 0 && minute < 34) || (heure == 23 && minute >= 34)) {
		$('.minuit').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.heures').css({'color':'rgba(255,255,255,0.2)', 'font-weight':'900'});
		$('.pm').css({'color':'rgba(255,255,255,0.2)', 'font-weight':'900'});
	}
	else if ((heure == 12 && minute < 34) || (heure == 11 && minute >= 34)) {
		$('.midi').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.heures').css({'color':'rgba(255,255,255,0.2)', 'font-weight':'900'});
		$('.am').css({'color':'rgba(255,255,255,0.2)', 'font-weight':'900'});
	}
	else if (heure == 11 || heure == 23 || (heure == 10 && minute >= 34 || heure == 22 && minute >= 34)) {
		$('.onze').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 10 || heure == 22 || (heure == 9 && minute >= 34 || heure == 21 && minute >= 34)) {
		$('.dix-2').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 9 || heure == 21 || (heure == 8 && minute >= 34 || heure == 20 && minute >= 34)) {
		$('.neuf').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 8 || heure == 20 || (heure == 7 && minute >= 34 || heure == 19 && minute >= 34)) {
		$('.huit').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 7 || heure == 19 || (heure == 6 && minute >= 34 || heure == 18 && minute >= 34)) {
		$('.sept').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 6 || heure == 18 || (heure == 5 && minute >= 34 || heure == 17 && minute >= 34)) {
		$('.six').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 5 || heure == 17 || (heure == 4 && minute >= 34 || heure == 16 && minute >= 34)) {
		$('.cinq').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 4 || heure == 16 || (heure == 3 && minute >= 34 || heure == 15 && minute >= 34)) {
		$('.quatre').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 3 || heure == 15 || (heure == 2 && minute >= 34 || heure == 14 && minute >= 34)) {
		$('.trois').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 2 || heure == 14 || (heure == 1 && minute >= 34 || heure == 13 && minute >= 34)) {
		$('.deux').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 1 || heure == 13 || (heure == 12 && minute >= 34|| heure == 0 && minute >= 34)) {
		$('.une').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion de l'heure au singulier
	// -------------------------------

	if ((heure == 1 && minute < 34) || (heure == 12 && minute >= 34)) {
		$('span.plur').css({'color':'rgba(255,255,255,0.2)', 'font-weight':'400'});
	};
	
});