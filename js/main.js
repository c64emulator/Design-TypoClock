
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
			   

});