
$(document).ready(function () {

	// Variables de temps 
	var now = new Date();

	var heure = now.getHours();
	var minute = now.getMinutes();
	var seconde = now.getSeconds();

	alert("Il est "+heure+" heure et "+minute+" minutes")

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

	// Gestion de la demi Heure
	// ------------------------

	if (minute > 29 && minute <35) {
		$('.et').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.demie').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du quart d'heure
	// ------------------------

	if (minute > 14 && minute <19) {
		$('.et').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.quart').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};

	// Gestion du 20 minutes
	// ---------------------

	if (minute > 19 && minute <24) {
		$('.vingt').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
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
	else if (heure == 9) {
		$('.neuf').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 10) {
		$('.dix').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 11) {
		$('.onze').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	}
	else if (heure == 12) {
		$('.douze').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
	};
			   

});