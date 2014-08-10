
$(document).ready(function () {

	// Variables de temps 
	var now = new Date();

	var heure = 22;
	// var heure = now.getHours();
	var minute = 14;
	// var minute = now.getMinutes();
	var seconde = now.getSeconds();

	alert("Il est "+heure+" heure et "+minute+" minutes")

	// Gestion des heures du matin et de l'apprès midi
	// -----------------------------------------------

	// Heures du matin (AM) 
	if (heure == 1 ||
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
	if (heure == 13 ||
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

	// Gestion des 10 minutes
	// ----------------------

	if (minute > 9 && minute < 14) {
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

	if (minute >= 29 && minute < 35) {
		$('.et').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.demie').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du moins 25 minutes
	// ---------------------------

	if (minute >= 35 && minute < 39) {
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


	// Gestion des heures
	// ------------------

	if (heure == 1) {
		$('.une').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 2) {
		$('.deux').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 3) {
		$('.trois').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 4) {
		$('.quatre').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 5) {
		$('.cinq').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 6) {
		$('.six').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 7) {
		$('.sept').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 8) {
		$('.huit').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 9 || heure == 21) {
		$('.neuf').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 10 || heure == 22) {
		$('.dix-2').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 11) {
		$('.onze').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 12) {
		$('.midi').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 0) {
		$('.minuit').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};
			   

});