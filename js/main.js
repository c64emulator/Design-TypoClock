// Variable d'alarme 

var alarm = $('#clock-alarm');
var horloge = $('#horloge-box');
var	dialog = $('#alarm-config').parent();
var	alarm_set = $('#alarm-set');
var	alarm_clear = $('#alarm-clear');
var	alarm_done = $('#alarm-song').parent();

var alarm_counter = -1;

$(document).ready(function time() {

	// Recharger le code de la fonction "time()" pour actualiser l'heure et décrémenter l'alarme
	setTimeout(time, 1000);

	// Reset du CSS pour éviter que les anciennes heures restent affiché
	$('span').css({'color':'rgba(255,255,255,0.2)', 'font-weight':'300'});
	$('span.il, span.est, span.heures').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});

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
		$('.heures').css({'color':'rgba(255,255,255,0.2)', 'font-weight':'300'});
		$('.pm').css({'color':'rgba(255,255,255,0.2)', 'font-weight':'300'});
	}
	else if ((heure == 12 && minute < 34) || (heure == 11 && minute >= 34)) {
		$('.midi').css({'color':'rgba(255,255,255,1)', 'font-weight':'900'});
		$('.heures').css({'color':'rgba(255,255,255,0.2)', 'font-weight':'300'});
		$('.am').css({'color':'rgba(255,255,255,0.2)', 'font-weight':'300'});
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


	// Gestion de l'alarme
	// -------------------

	// Si l'alarme est active
	if(alarm_counter > 0){
		
		// Cette boucle est lancée toute les 1 secondes, donc décrémenté de -1 par seconde
		// Et active l'icone de l'alarme
		alarm_counter--;
		alarm.addClass('active');

	}
	else if(alarm_counter == 0){

		// Affiche le texte
		alarm_done.fadeIn();
		// Jouer le son de l'alarme (ne fonctionne qu'avec 
		// les navigateurs gérant l'audio de HTML5)
		try{
			$('#alarm-audio')[0].play();
		}
		catch(e){}
		alarm_counter--;
		alarm.removeClass('active');
		horloge.css({'opacity':'0.2', 'transition':'opacity 0.3s'});
	}
	else{
		// Reset de l'alarme
		alarm.removeClass('active');
	}

});

// Paramètre de l'alarme
// ---------------------
	
$('#clock-alarm').click(function(){
	dialog.trigger('show');
	horloge.css({'opacity':'0.1', 'transition':'opacity 0.3s'});
});

dialog.find('.close').click(function(){
	dialog.trigger('hide')
	horloge.css({'opacity':'1', 'transition':'opacity 0.3s'});
});

dialog.click(function(e){

	if($(e.target).is('.hide')){
		dialog.trigger('hide');
		horloge.css({'opacity':'1', 'transition':'opacity 0.3s'});	
	}
});


// Fonction lors du lancement de l'alarme
alarm_set.click(function(){

	var valid = true;
	var after = 0;
	var to_seconds = [3600, 60, 1];

	dialog.find('input').each(function(i){

		// Utilise la vérification des navigateurs
		if(this.validity && !this.validity.valid){

			valid = false;
			this.focus();

			return false;
		}

		after += to_seconds[i] * parseInt(parseInt(this.value));
	});

	if(!valid){
		alert('Entrez un nombre correct!');
		return;
	}

	if(after < 1){
		alert('Ceci est une alarme, pas une machine à remonter le temps!');
		return;	
	}

	alarm_counter = after;
	dialog.trigger('hide');
	horloge.css({'opacity':'1', 'transition':'opacity 0.3s'});
});

alarm_clear.click(function(){
	alarm_counter = -1;

	dialog.trigger('hide');
	horloge.css({'opacity':'1', 'transition':'opacity 0.3s'});
});

dialog.on('hide',function(){

	dialog.fadeOut();
	horloge.css({'opacity':'1', 'transition':'opacity 0.3s'});

}).on('show',function(){

	// Calcule du temps restant pour l'alarme

	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	var tmp = 0;

	if(alarm_counter > 0){

		tmp = alarm_counter;

		hours = Math.floor(tmp/3600);
		tmp = tmp%3600;

		minutes = Math.floor(tmp/60);
		tmp = tmp%60;

		seconds = tmp;
	}

	// Met à jour les inputs de l'alarme
	dialog.find('input').eq(0).val(hours).end().eq(1).val(minutes).end().eq(2).val(seconds);

	dialog.fadeIn();
	horloge.css({'opacity':'0.2', 'transition':'opacity 0.3s'});

});

alarm_done.click(function(){
	alarm_done.fadeOut();
	horloge.css({'opacity':'1', 'transition':'opacity 0.3s'});
});